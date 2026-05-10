// React Theme — extracted from https://web.whatsapp.com/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '16': string;
 *   };
 *   space: {

 *   };
 *   radii: {

 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#1b8755",
    "background": "#dbd8d4",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#3b4a54",
    "neutral200": "#dbd8d4"
  },
  "fonts": {
    "body": "'Segoe UI', sans-serif"
  },
  "fontSizes": {
    "16": "16px"
  },
  "space": {},
  "radii": {},
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#1b8755",
      "light": "hsl(152, 67%, 47%)",
      "dark": "hsl(152, 67%, 17%)"
    },
    "background": {
      "default": "#dbd8d4",
      "paper": "#dbd8d4"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#3b4a54"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    }
  },
  "shape": {},
  "shadows": []
};

export default theme;
