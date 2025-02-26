import themeConfig from './theme.config';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [...themeConfig.themes, { procyon: themeConfig.customTheme }],
  },
};
