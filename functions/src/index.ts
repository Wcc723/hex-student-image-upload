import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import {defineString} from "firebase-functions/params";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Define environment variables for allowed domains
const allowedDomains = defineString("ALLOWED_DOMAINS", {
  description: "Comma-separated list of allowed domains for image proxy",
  input: {
    text: {
      validationRegex: ".*",
    },
  },
});

export const imageProxy = onRequest(
  {
    cors: true,
    invoker: "public",
  },
  async (request, response) => {
    const imagePath = request.query.path;

    if (typeof imagePath !== "string" || !imagePath) {
      logger.warn("Image path not provided.");
      response.status(400).send("Bad Request: Missing image path.");
      return;
    }

    const normalizeHeader = (value: undefined | string | string[]) => {
      if (Array.isArray(value)) {
        return value[0];
      }
      return value;
    };

    const extractHostname = (raw?: string) => {
      if (!raw) return null;
      try {
        return new URL(raw).hostname;
      } catch (error) {
        logger.warn(`Could not parse origin/referrer value: ${raw}`);
        return null;
      }
    };

    const origin = normalizeHeader(request.headers.origin);
    const referer = normalizeHeader(request.headers.referer);
    const domainsString = allowedDomains.value();
    const sanitizeDomain = (domain: string) => {
      const trimmed = domain.trim();
      if (!trimmed) return null;
      try {
        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
          return new URL(trimmed).hostname.toLowerCase();
        }
        return trimmed.replace(/^\*\./, "").toLowerCase();
      } catch (error) {
        logger.warn(`Could not parse domain "${domain}" in ALLOWED_DOMAINS.`);
        return null;
      }
    };
    const allowedHostnames = domainsString
      .split(",")
      .map((d) => sanitizeDomain(d))
      .filter((d): d is string => Boolean(d));

    if (allowedHostnames.length === 0) {
      logger.error("ALLOWED_DOMAINS 未設定，imageProxy 拒絕所有請求。");
      response
        .status(403)
        .send("Forbidden: No allowed domains configured.");
      return;
    }

    const originHostname = extractHostname(origin);
    const refererHostname = originHostname ?? extractHostname(referer);

    const candidateHost = originHostname ?? refererHostname;
    const isAllowed =
      !!candidateHost &&
      allowedHostnames.some((allowedHost) => {
        return (
          candidateHost === allowedHost ||
          candidateHost.endsWith(`.${allowedHost}`)
        );
      });

    if (!isAllowed) {
      logger.error(
        `Unauthorized origin "${candidateHost ?? "unknown"}"
          attempted to access ${imagePath}.`,
        `Allowed: ${allowedHostnames.join(", ")}`,
      );
      response
        .status(403)
        .send("Forbidden: Access from this origin is not allowed.");
      return;
    }

    try {
      const bucket = admin.storage().bucket();
      const file = bucket.file(imagePath);

      const [exists] = await file.exists();
      if (!exists) {
        logger.error(`File not found at path: ${imagePath}`);
        response.status(404).send("Not Found");
        return;
      }

      const [metadata] = await file.getMetadata();

      response.setHeader(
        "Content-Type",
        metadata.contentType || "image/jpeg",
      );
      response.setHeader(
        "Cache-Control",
        "public, max-age=86400, s-maxage=86400",
      ); // Cache for 1 day

      const readStream = file.createReadStream();

      readStream.on("error", (err) => {
        logger.error(`Stream error for ${imagePath}:`, err);
        if (!response.headersSent) {
          response.status(500).send("Internal Server Error");
        }
      });

      readStream.pipe(response);
    } catch (error) {
      logger.error(`Error proxying image ${imagePath}:`, error);
      if (!response.headersSent) {
        response.status(500).send("Internal Server Error");
      }
    }
  },
);
