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

const filePath = path.join(process.cwd(),`/src/components/${componentPath}`);
console.log({filePath});

try {
const sourceCode = fs.readFileSync(filePath, "utf-8");
res.status(200).json({ sourceCode });
console.log({sourceCode});
} catch (error) {
console.log({error});
res.status(500).json({ error: "Error fetching source code" });
}
}