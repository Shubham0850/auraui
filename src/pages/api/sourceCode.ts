// pages/api/sourceCode.js
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const componentPath = Array.isArray(req.query.componentPath)
    ? req.query.componentPath[0]
    : req.query.componentPath;

  if (!componentPath) {
    res.status(400).json({ error: "Component path is required" });
    return;
  }

  console.log({ componentPath });

  // Construct the file path
  const filePath = path.join(process.cwd(), "src", "components", componentPath);
  console.log({ filePath });
  console.log(`process.cwd(): ${process.cwd()}`);

  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      res.status(404).json({ error: "File not found" });
      return;
    }

    const sourceCode = fs.readFileSync(filePath, "utf-8");
    res.status(200).json({ sourceCode });
    console.log({ sourceCode });
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    res.status(500).json({ error: "Error fetching source code" });
  }
}
