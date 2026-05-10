/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(152, 67%, 97%)',
            '100': 'hsl(152, 67%, 94%)',
            '200': 'hsl(152, 67%, 86%)',
            '300': 'hsl(152, 67%, 76%)',
            '400': 'hsl(152, 67%, 64%)',
            '500': 'hsl(152, 67%, 50%)',
            '600': 'hsl(152, 67%, 40%)',
            '700': 'hsl(152, 67%, 32%)',
            '800': 'hsl(152, 67%, 24%)',
            '900': 'hsl(152, 67%, 16%)',
            '950': 'hsl(152, 67%, 10%)',
            DEFAULT: '#1b8755'
        },
        'neutral-50': '#000000',
        'neutral-100': '#3b4a54',
        'neutral-200': '#dbd8d4',
        background: '#dbd8d4',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Times',
            'sans-serif'
        ],
        heading: [
            'Segoe UI',
            'sans-serif'
        ]
    },
    fontSize: {
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ]
    },
    screens: {
        md: '800px',
        '901px': '901px',
        lg: '1025px',
        '1441px': '1441px',
        '1921px': '1921px'
    }
},
  },
};
