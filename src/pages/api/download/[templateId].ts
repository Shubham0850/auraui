import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

type TemplateAsset = {
  owner: string;
  repo: string;
  tag: string;
  filename: string;
};

const TEMPLATES: Record<string, TemplateAsset> = {
  "saas-landing": {
    owner: "kunalkumar156",
    repo: "auraui-templates",
    tag: "v1.0.0",
    filename: "saas-landing.zip",
  },
  
  "restau-club": {
    owner: "kunalkumar156",
    repo: "auraui-templates",
    tag: "v1.1.0",
    filename: "restau-club.zip",
  },
  "nexlayer": {
    owner: "kunalkumar156",
    repo: "auraui-templates",
    tag: "v1.0.0-nexlayer",
    filename: "nexlayer.zip",
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).json({ error: "Sign in required" });

  const { templateId } = req.query as { templateId: string };
  const template = TEMPLATES[templateId];
  if (!template) return res.status(404).json({ error: "Template not found" });

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: "Server misconfigured" });

  try {
    // Get release metadata to find the asset ID
    const releaseRes = await fetch(
      `https://api.github.com/repos/${template.owner}/${template.repo}/releases/tags/${template.tag}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
    );
    const release = await releaseRes.json();
    const asset = release.assets?.find((a: { name: string }) => a.name === template.filename);
    if (!asset) return res.status(404).json({ error: "Asset not found in release" });

    // GitHub redirects to a temporary S3 URL — grab it without following
    const assetRes = await fetch(asset.url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/octet-stream" },
      redirect: "manual",
    });
    const cdnUrl = assetRes.headers.get("location");
    if (!cdnUrl) return res.status(500).json({ error: "Could not get download URL" });

    return res.status(200).json({ url: cdnUrl });
  } catch (err) {
    console.error("GitHub asset error:", err);
    return res.status(500).json({ error: "Download failed" });
  }
}
