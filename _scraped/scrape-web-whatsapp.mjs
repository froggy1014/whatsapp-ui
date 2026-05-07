import { chromium } from "playwright";
import { writeFileSync } from "fs";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// WhatsApp Web - 로그인 전 페이지에서도 CSS 변수 추출 가능
await page.goto("https://web.whatsapp.com", {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});

// 페이지 로드 대기 (CSS가 로드될 시간)
await page.waitForTimeout(5000);

const tokens = await page.evaluate(() => {
  const result = {
    cssVariables: {},
    fontFaces: [],
    breakpoints: {},
    colors: new Set(),
    fontSizes: new Set(),
    fontFamilies: new Set(),
    borderRadii: new Set(),
    shadows: new Set(),
  };

  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        // Grab ALL CSS variables from every rule
        if (rule.style) {
          for (const prop of rule.style) {
            if (prop.startsWith("--")) {
              const val = rule.style.getPropertyValue(prop).trim();
              result.cssVariables[prop] = val;
            }
          }
        }

        // Font faces
        if (rule instanceof CSSFontFaceRule) {
          result.fontFaces.push(rule.cssText);
        }

        // Media queries
        if (rule instanceof CSSMediaRule) {
          const match = rule.conditionText?.match(
            /\((?:min|max)-width:\s*([\d.]+(?:px|em|rem))\)/
          );
          if (match) {
            result.breakpoints[match[1]] = rule.conditionText;
          }
          // Also check nested rules for variables
          for (const nested of rule.cssRules) {
            if (nested.style) {
              for (const prop of nested.style) {
                if (prop.startsWith("--")) {
                  const val = nested.style.getPropertyValue(prop).trim();
                  result.cssVariables[prop] = val;
                }
              }
            }
          }
        }
      }
    } catch (e) {
      // CORS
    }
  }

  // Computed styles from visible elements
  for (const el of document.querySelectorAll("*")) {
    const style = getComputedStyle(el);
    if (style.color && style.color !== "rgba(0, 0, 0, 0)")
      result.colors.add(style.color);
    if (style.backgroundColor && style.backgroundColor !== "rgba(0, 0, 0, 0)")
      result.colors.add(style.backgroundColor);
    if (style.fontSize) result.fontSizes.add(style.fontSize);
    if (style.fontFamily) result.fontFamilies.add(style.fontFamily);
    if (style.borderRadius && style.borderRadius !== "0px")
      result.borderRadii.add(style.borderRadius);
    if (style.boxShadow && style.boxShadow !== "none")
      result.shadows.add(style.boxShadow);
  }

  return {
    cssVariables: result.cssVariables,
    fontFaces: result.fontFaces,
    breakpoints: result.breakpoints,
    colors: [...result.colors],
    fontSizes: [...result.fontSizes],
    fontFamilies: [...result.fontFamilies],
    borderRadii: [...result.borderRadii],
    shadows: [...result.shadows],
  };
});

await page.screenshot({
  path: "/Users/evan/Documents/froggy1014/whatsapp-ui/web-whatsapp-screenshot.png",
  fullPage: true,
});

await browser.close();

writeFileSync(
  "/Users/evan/Documents/froggy1014/whatsapp-ui/web-whatsapp-tokens-raw.json",
  JSON.stringify(tokens, null, 2)
);

console.log("=== web.whatsapp.com Scraping Complete ===");
console.log(`CSS Variables: ${Object.keys(tokens.cssVariables).length}`);
console.log(`Colors: ${tokens.colors.length}`);
console.log(`Font Sizes: ${tokens.fontSizes.length}`);
console.log(`Font Families: ${tokens.fontFamilies.length}`);
console.log(`Border Radii: ${tokens.borderRadii.length}`);
console.log(`Shadows: ${tokens.shadows.length}`);
console.log(`Font Faces: ${tokens.fontFaces.length}`);
console.log(`Breakpoints: ${Object.keys(tokens.breakpoints).length}`);
