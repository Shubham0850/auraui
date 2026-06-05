import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2, R2_BUCKET } from "@/lib/r2";

// Map template IDs to their ZIP file keys in R2
const TEMPLATE_FILES: Record<string, string> = {
  "saas-landing": "templates/saas-landing.zip",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Auth check
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    return res.status(401).json({ error: "Sign in required" });
  }

  const { templateId } = req.query as { templateId: string };
  const fileKey = TEMPLATE_FILES[templateId];

  if (!fileKey) {
    return res.status(404).json({ error: "Template not found" });
  }

  try {
    const command = new GetObjectCommand({
      Bucket: R2_BUCKET,
      Key: fileKey,
    });

    // Signed URL valid for 60 seconds — enough to start the download
    const url = await getSignedUrl(r2, command, { expiresIn: 60 });

    return res.status(200).json({ url });
  } catch (err) {
    console.error("R2 sign error:", err);
    return res.status(500).json({ error: "Failed to generate download link" });
  }
}
