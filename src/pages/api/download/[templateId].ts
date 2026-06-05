import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const TEMPLATE_FILES: Record<string, string> = {
  "saas-landing":
    "https://github.com/kunalkumar156/auraui-templates/releases/download/v1.0.0/saas-landing.zip",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    return res.status(401).json({ error: "Sign in required" });
  }

  const { templateId } = req.query as { templateId: string };
  const url = TEMPLATE_FILES[templateId];

  if (!url) {
    return res.status(404).json({ error: "Template not found" });
  }

  return res.status(200).json({ url });
}
