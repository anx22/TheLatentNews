import { readFile } from "node:fs/promises";

const checks = [
  {
    file: "app/layout.tsx",
    label: "Root document declares a language",
    pattern: /<html\s+[^>]*lang=/,
  },
  {
    file: "app/page.tsx",
    label: "Page exposes a main landmark",
    pattern: /<main\b/,
  },
  {
    file: "app/page.tsx",
    label: "Page renders a single primary heading",
    pattern: /<h1\b/,
  },
  {
    file: "app/page.tsx",
    label: "Content sections use accessible names",
    pattern: /aria-(label|labelledby)=/,
  },
  {
    file: "app/page.tsx",
    label: "Decorative visual has an image role with an accessible label",
    pattern: /role="img"[^>]*aria-label=/,
  },
];

const failures = [];

for (const check of checks) {
  const source = await readFile(
    new URL(`../${check.file}`, import.meta.url),
    "utf8",
  );

  if (!check.pattern.test(source)) {
    failures.push(`${check.file}: ${check.label}`);
  }
}

if (failures.length > 0) {
  console.error("Accessibility smoke test failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Accessibility smoke test passed.");
