import { chromium } from "playwright";
import { writeFileSync } from "fs";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// WhatsApp 웹 페이지 로드
await page.goto("https://www.whatsapp.com", {
  waitUntil: "networkidle",
  timeout: 30000,
});

const tokens = await page.evaluate(() => {
  const result = {
    cssVariables: {},
    colors: new Set(),
    fontFamilies: new Set(),
    fontSizes: new Set(),
    fontWeights: new Set(),
    lineHeights: new Set(),
    letterSpacings: new Set(),
    borderRadii: new Set(),
    shadows: new Set(),
    spacings: new Set(),
    transitions: new Set(),
    gradients: new Set(),
    zIndices: new Set(),
    breakpoints: {},
  };

  // 1. CSS Custom Properties (variables) from all stylesheets
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        // :root and html variables
        if (
          rule.selectorText &&
          (rule.selectorText.includes(":root") ||
            rule.selectorText === "html" ||
            rule.selectorText === "body" ||
            rule.selectorText.includes("[data-theme") ||
            rule.selectorText.includes("[data-mode"))
        ) {
          for (const prop of rule.style) {
            if (prop.startsWith("--")) {
              result.cssVariables[prop] = rule.style.getPropertyValue(prop).trim();
            }
          }
        }

        // Collect all CSS variable declarations from any rule
        if (rule.style) {
          for (const prop of rule.style) {
            if (prop.startsWith("--")) {
              if (!result.cssVariables[prop]) {
                result.cssVariables[prop] = rule.style.getPropertyValue(prop).trim();
              }
            }
          }
        }

        // Media queries for breakpoints
        if (rule instanceof CSSMediaRule) {
          const match = rule.conditionText?.match(
            /\((?:min|max)-width:\s*([\d.]+(?:px|em|rem))\)/
          );
          if (match) {
            result.breakpoints[match[1]] = rule.conditionText;
          }
        }
      }
    } catch (e) {
      // CORS blocked stylesheet - skip
    }
  }

  // 2. Computed styles from all visible elements
  const elements = document.querySelectorAll("*");
  const colorRegex =
    /^(rgb|rgba|hsl|hsla|#[0-9a-fA-F]{3,8}|transparent|currentColor)/;

  for (const el of elements) {
    const style = getComputedStyle(el);

    // Colors
    const colorProps = [
      "color",
      "backgroundColor",
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
      "outlineColor",
    ];
    for (const prop of colorProps) {
      const val = style[prop];
      if (val && val !== "rgba(0, 0, 0, 0)" && val !== "transparent") {
        result.colors.add(val);
      }
    }

    // Fonts
    if (style.fontFamily) result.fontFamilies.add(style.fontFamily);
    if (style.fontSize) result.fontSizes.add(style.fontSize);
    if (style.fontWeight && style.fontWeight !== "400")
      result.fontWeights.add(style.fontWeight);
    if (style.lineHeight && style.lineHeight !== "normal")
      result.lineHeights.add(style.lineHeight);
    if (style.letterSpacing && style.letterSpacing !== "normal")
      result.letterSpacings.add(style.letterSpacing);

    // Border radius
    if (style.borderRadius && style.borderRadius !== "0px")
      result.borderRadii.add(style.borderRadius);

    // Shadows
    if (style.boxShadow && style.boxShadow !== "none")
      result.shadows.add(style.boxShadow);
    if (style.textShadow && style.textShadow !== "none")
      result.shadows.add(style.textShadow);

    // Transitions
    if (style.transition && style.transition !== "all 0s ease 0s")
      result.transitions.add(style.transition);

    // Background gradients
    if (style.backgroundImage && style.backgroundImage.includes("gradient"))
      result.gradients.add(style.backgroundImage);

    // Z-index
    if (style.zIndex && style.zIndex !== "auto")
      result.zIndices.add(style.zIndex);
  }

  // Convert Sets to Arrays
  return {
    cssVariables: result.cssVariables,
    colors: [...result.colors],
    fontFamilies: [...result.fontFamilies],
    fontSizes: [...result.fontSizes],
    fontWeights: [...result.fontWeights],
    lineHeights: [...result.lineHeights],
    letterSpacings: [...result.letterSpacings],
    borderRadii: [...result.borderRadii],
    shadows: [...result.shadows],
    spacings: [...result.spacings],
    transitions: [...result.transitions],
    gradients: [...result.gradients],
    zIndices: [...result.zIndices],
    breakpoints: result.breakpoints,
  };
});

// Also grab all inline style and class patterns
const classNames = await page.evaluate(() => {
  const classes = new Set();
  document.querySelectorAll("[class]").forEach((el) => {
    el.classList.forEach((cls) => classes.add(cls));
  });
  return [...classes].sort();
});

// Get all loaded font-face declarations
const fontFaces = await page.evaluate(() => {
  const fonts = [];
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule instanceof CSSFontFaceRule) {
          fonts.push(rule.cssText);
        }
      }
    } catch (e) {}
  }
  return fonts;
});

// Take a screenshot for reference
await page.screenshot({
  path: "/Users/evan/Documents/froggy1014/whatsapp-ui/whatsapp-screenshot.png",
  fullPage: true,
});

await browser.close();

// Write results
const output = {
  ...tokens,
  classNames,
  fontFaces,
  scrapedAt: new Date().toISOString(),
  source: "https://www.whatsapp.com",
};

writeFileSync(
  "/Users/evan/Documents/froggy1014/whatsapp-ui/whatsapp-tokens-raw.json",
  JSON.stringify(output, null, 2)
);

console.log("=== Scraping Complete ===");
console.log(`CSS Variables: ${Object.keys(tokens.cssVariables).length}`);
console.log(`Colors: ${tokens.colors.length}`);
console.log(`Font Families: ${tokens.fontFamilies.length}`);
console.log(`Font Sizes: ${tokens.fontSizes.length}`);
console.log(`Font Weights: ${tokens.fontWeights.length}`);
console.log(`Border Radii: ${tokens.borderRadii.length}`);
console.log(`Shadows: ${tokens.shadows.length}`);
console.log(`Transitions: ${tokens.transitions.length}`);
console.log(`Gradients: ${tokens.gradients.length}`);
console.log(`Z-Indices: ${tokens.zIndices.length}`);
console.log(`Breakpoints: ${Object.keys(tokens.breakpoints).length}`);
console.log(`Class Names: ${classNames.length}`);
console.log(`Font Faces: ${fontFaces.length}`);
