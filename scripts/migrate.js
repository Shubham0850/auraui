#!/usr/bin/env node
/**
 * Run once to set up the Supabase database.
 * Usage: node scripts/migrate.js
 *
 * Requires SUPABASE_ACCESS_TOKEN in .env
 * Get it at: https://supabase.com/dashboard/account/tokens
 */

require("dotenv").config({ path: ".env" });
const fs = require("fs");
const path = require("path");

const PROJECT_REF = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname.split(".")[0];
const ACCESS_TOKEN = process.env.SUPABASE_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  console.error(
    "\n❌  SUPABASE_ACCESS_TOKEN not found in .env\n" +
    "   Get one at: https://supabase.com/dashboard/account/tokens\n" +
    "   Then add to .env:  SUPABASE_ACCESS_TOKEN=<your_token>\n"
  );
  process.exit(1);
}

const migrationsDir = path.join(__dirname, "..", "supabase", "migrations");
const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith(".sql")).sort();

async function runMigration(sql, filename) {
  const res = await fetch(
    `https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: sql }),
    }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`${filename}: ${data.message || JSON.stringify(data)}`);
  }
  return data;
}

(async () => {
  console.log(`\n🔗  Project: ${PROJECT_REF}`);
  console.log(`📂  Migrations: ${files.length} file(s)\n`);

  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
    process.stdout.write(`  Running ${file} ... `);
    try {
      await runMigration(sql, file);
      console.log("✓");
    } catch (err) {
      console.log("✗");
      console.error(`\n  Error: ${err.message}\n`);
      process.exit(1);
    }
  }

  console.log("\n✅  All migrations complete.\n");
})();
