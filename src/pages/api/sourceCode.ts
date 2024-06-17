// pages/api/sourceCode.ts
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
  console.log(`process.cwd(): ${process.cwd()}`);
  console.log(`Resolved file path: ${filePath}`);

  // Function to list files in the directory
  function listFilesInDirectory(directoryPath: string) {
    try {
      const files = fs.readdirSync(directoryPath);
      console.log(`Files in ${directoryPath}:`, files);
    } catch (error) {
      console.error(`Error reading directory: ${directoryPath}`, error);
    }
  }

  // Call this function to list files in the relevant directories step-by-step
  listFilesInDirectory(path.join(process.cwd(), "src"));
  listFilesInDirectory(path.join(process.cwd(), "src", "components"));
  listFilesInDirectory(
    path.join(process.cwd(), "src", "components", path.dirname(componentPath))
  );

  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      res.status(404).json({ error: "File not found" });
      return;
    }

    // Read the file content
    const sourceCode = fs.readFileSync(filePath, "utf-8");
    res.status(200).json({ sourceCode });
    console.log({ sourceCode });
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    res.status(500).json({ error: "Error fetching source code" });
  }
}
