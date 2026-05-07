import { readFileSync, writeFileSync } from "fs";

const data = JSON.parse(readFileSync("./web-whatsapp-tokens-raw.json", "utf8"));
const vars = data.cssVariables;

const wdsPrimitives = {};
const wdsSemantics = {};
const legacyColors = {};
const layoutTokens = {};

for (const [key, val] of Object.entries(vars)) {
  if (key.match(/^--x[a-z0-9]{3,}$/)) continue;

  if (key.startsWith("--WDS-") && val.match(/^#[0-9a-fA-F]/)) {
    wdsPrimitives[key] = val;
  } else if (key.startsWith("--WDS-") && val.startsWith("var(")) {
    wdsSemantics[key] = val;
  } else if (
    !key.startsWith("--WDS-") &&
    !key.match(/^--x[a-z0-9]/) &&
    (val.match(/^#/) || val.match(/^rgb/))
  ) {
    legacyColors[key] = val;
  } else if (
    !key.startsWith("--WDS-") &&
    !key.match(/^--x[a-z0-9]/) &&
    val.match(/^\d+px$/)
  ) {
    layoutTokens[key] = val;
  }
}

console.log("WDS Primitives (resolved hex):", Object.keys(wdsPrimitives).length);
console.log("WDS Semantics (var refs):", Object.keys(wdsSemantics).length);
console.log("Legacy color tokens:", Object.keys(legacyColors).length);
console.log("Layout tokens:", Object.keys(layoutTokens).length);

console.log("\n=== WDS Primitive Color Scale ===");
const sorted = Object.entries(wdsPrimitives).sort((a, b) =>
  a[0].localeCompare(b[0])
);
for (const [k, v] of sorted) console.log(k, ":", v);

console.log("\n=== Legacy Color Tokens ===");
const legacySorted = Object.entries(legacyColors).sort((a, b) =>
  a[0].localeCompare(b[0])
);
for (const [k, v] of legacySorted) console.log(k, ":", v);

console.log("\n=== Layout Tokens ===");
const layoutSorted = Object.entries(layoutTokens).sort((a, b) =>
  a[0].localeCompare(b[0])
);
for (const [k, v] of layoutSorted) console.log(k, ":", v);

// Save organized tokens
const organized = {
  wdsPrimitives,
  wdsSemantics,
  legacyColors,
  layoutTokens,
  fontInfo: {
    fontFaces: data.fontFaces,
    fontFamilies: data.fontFamilies,
    fontSizes: data.fontSizes,
  },
  breakpoints: data.breakpoints,
};

writeFileSync(
  "./whatsapp-tokens-organized.json",
  JSON.stringify(organized, null, 2)
);
console.log("\nSaved organized tokens to whatsapp-tokens-organized.json");
