const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "exclude-header": "calc(100vh - 72px)",
      },
      spacing: {
        18: "72px",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
      fontSize: {
        "3xs": ["8px", "12px"],
        "2xs": ["10px", "16px"],
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        md: ["18px", "26px"],
        lg: ["20px", "28px"],
        xl: ["22px", "30px"],
        "2xl": ["24px", "32px"],
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          25: "rgb(var(--color-neutral-25) / <alpha-value>)",
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
          950: "rgb(var(--color-neutral-950) / <alpha-value>)",
        },
        red: {
          50: "rgb(var(--color-red-50) / <alpha-value>)",
          100: "rgb(var(--color-red-100) / <alpha-value>)",
          200: "rgb(var(--color-red-200) / <alpha-value>)",
          300: "rgb(var(--color-red-300) / <alpha-value>)",
          400: "rgb(var(--color-red-400) / <alpha-value>)",
          500: "rgb(var(--color-red-500) / <alpha-value>)",
          600: "rgb(var(--color-red-600) / <alpha-value>)",
          700: "rgb(var(--color-red-700) / <alpha-value>)",
          800: "rgb(var(--color-red-800) / <alpha-value>)",
          900: "rgb(var(--color-red-900) / <alpha-value>)",
          950: "rgb(var(--color-red-950) / <alpha-value>)",
        },
        amber: {
          50: "rgb(var(--color-amber-50) / <alpha-value>)",
          100: "rgb(var(--color-amber-100) / <alpha-value>)",
          200: "rgb(var(--color-amber-200) / <alpha-value>)",
          300: "rgb(var(--color-amber-300) / <alpha-value>)",
          400: "rgb(var(--color-amber-400) / <alpha-value>)",
          500: "rgb(var(--color-amber-500) / <alpha-value>)",
          600: "rgb(var(--color-amber-600) / <alpha-value>)",
          700: "rgb(var(--color-amber-700) / <alpha-value>)",
          800: "rgb(var(--color-amber-800) / <alpha-value>)",
          900: "rgb(var(--color-amber-900) / <alpha-value>)",
          950: "rgb(var(--color-amber-950) / <alpha-value>)",
        },
        green: {
          50: "rgb(var(--color-green-50) / <alpha-value>)",
          100: "rgb(var(--color-green-100) / <alpha-value>)",
          200: "rgb(var(--color-green-200) / <alpha-value>)",
          300: "rgb(var(--color-green-300) / <alpha-value>)",
          400: "rgb(var(--color-green-400) / <alpha-value>)",
          500: "rgb(var(--color-green-500) / <alpha-value>)",
          600: "rgb(var(--color-green-600) / <alpha-value>)",
          700: "rgb(var(--color-green-700) / <alpha-value>)",
          800: "rgb(var(--color-green-800) / <alpha-value>)",
          900: "rgb(var(--color-green-900) / <alpha-value>)",
          950: "rgb(var(--color-green-950) / <alpha-value>)",
        },
        blue: {
          50: "rgb(var(--color-blue-50) / <alpha-value>)",
          100: "rgb(var(--color-blue-100) / <alpha-value>)",
          200: "rgb(var(--color-blue-200) / <alpha-value>)",
          300: "rgb(var(--color-blue-300) / <alpha-value>)",
          400: "rgb(var(--color-blue-400) / <alpha-value>)",
          500: "rgb(var(--color-blue-500) / <alpha-value>)",
          600: "rgb(var(--color-blue-600) / <alpha-value>)",
          700: "rgb(var(--color-blue-700) / <alpha-value>)",
          800: "rgb(var(--color-blue-800) / <alpha-value>)",
          900: "rgb(var(--color-blue-900) / <alpha-value>)",
          950: "rgb(var(--color-blue-950) / <alpha-value>)",
        },
        violet: {
          50: "rgb(var(--color-violet-50) / <alpha-value>)",
          100: "rgb(var(--color-violet-100) / <alpha-value>)",
          200: "rgb(var(--color-violet-200) / <alpha-value>)",
          300: "rgb(var(--color-violet-300) / <alpha-value>)",
          400: "rgb(var(--color-violet-400) / <alpha-value>)",
          500: "rgb(var(--color-violet-500) / <alpha-value>)",
          600: "rgb(var(--color-violet-600) / <alpha-value>)",
          700: "rgb(var(--color-violet-700) / <alpha-value>)",
          800: "rgb(var(--color-violet-800) / <alpha-value>)",
          900: "rgb(var(--color-violet-900) / <alpha-value>)",
          950: "rgb(var(--color-violet-950) / <alpha-value>)",
        },
        rose: {
          50: "rgb(var(--color-rose-50) / <alpha-value>)",
          100: "rgb(var(--color-rose-100) / <alpha-value>)",
          200: "rgb(var(--color-rose-200) / <alpha-value>)",
          300: "rgb(var(--color-rose-300) / <alpha-value>)",
          400: "rgb(var(--color-rose-400) / <alpha-value>)",
          500: "rgb(var(--color-rose-500) / <alpha-value>)",
          600: "rgb(var(--color-rose-600) / <alpha-value>)",
          700: "rgb(var(--color-rose-700) / <alpha-value>)",
          800: "rgb(var(--color-rose-800) / <alpha-value>)",
          900: "rgb(var(--color-rose-900) / <alpha-value>)",
          950: "rgb(var(--color-rose-950) / <alpha-value>)",
        },
        orange: {
          50: "rgb(var(--color-orange-50) / <alpha-value>)",
          100: "rgb(var(--color-orange-100) / <alpha-value>)",
          200: "rgb(var(--color-orange-200) / <alpha-value>)",
          300: "rgb(var(--color-orange-300) / <alpha-value>)",
          400: "rgb(var(--color-orange-400) / <alpha-value>)",
          500: "rgb(var(--color-orange-500) / <alpha-value>)",
          600: "rgb(var(--color-orange-600) / <alpha-value>)",
          700: "rgb(var(--color-orange-700) / <alpha-value>)",
          800: "rgb(var(--color-orange-800) / <alpha-value>)",
          900: "rgb(var(--color-orange-900) / <alpha-value>)",
          950: "rgb(var(--color-orange-950) / <alpha-value>)",
        },
        "sidebar-bg": {
          DEFAULT: "#171717",
          dark: "#171717",
        },
        "white-text": {
          DEFAULT: "#ffffff",
          dark: "#E8E8E8",
        },
        "white-bg": {
          DEFAULT: "#ffffff",
          dark: "#050505",
        },
        "clr-purple": {
          DEFAULT: "#9747FF",
          dark: "#9E54FF",
        },
        "clr-green": {
          DEFAULT: "#16A34A",
          dark: "#1DA34F",
        },
        paragraph: {
          DEFAULT: "#37363B",
          dark: "#D1D1D1",
        },
        heading: {
          DEFAULT: "#1D1D1D",
          dark: "#E8E8E8",
        },
        cards: {
          DEFAULT: "#EBEDEF",
          dark: "#242424",
        },
        "dark-stroke": {
          DEFAULT: "#3E4256",
          dark: "#242424",
        },
        "white-secondary": {
          DEFAULT: "#F6F7F8",
          dark: "#141414",
        },
        yellow: {
          DEFAULT: "#FEC84B",
          dark: "#FEC84B",
        },
        "paragraph-secondary": {
          DEFAULT: "#5F5D5D",
          dark: "#5F5D5D",
        },
        "sidebar-bg-secondary": {
          DEFAULT: "#212121",
          dark: "#212121",
        },
        "sidebar-border": {
          DEFAULT: "#444445",
          dark: "#444445",
        },
        "level-1": "rgb(var(--level-1) / <alpha-value>)",
        "level-2": "rgb(var(--level-2) / <alpha-value>)",
        "level-3": "rgb(var(--level-3) / <alpha-value>)",
        "level-4": "rgb(var(--level-4) / <alpha-value>)",
        "level-5": "rgb(var(--level-5) / <alpha-value>)",
        "stroke-1": "rgb(var(--stroke-1) / <alpha-value>)",
        "stroke-2": "rgb(var(--stroke-2) / <alpha-value>)",
        "stroke-3": "rgb(var(--stroke-3) / <alpha-value>)",
        "stroke-4": "rgb(var(--stroke-4) / <alpha-value>)",
        gradient: "rgb(var(--gradient) / <alpha-value>)",
        "gradient-red": "rgb(var(--gradient-red) / <alpha-value>)",
        "card-level-1": "rgb(var(--card-level-1) / <alpha-value>)",
        "card-level-2": "rgb(var(--card-level-2) / <alpha-value>)",
        "card-level-4": "rgb(var(--card-level-4) / <alpha-value>)",
        "card-level-5": "rgb(var(--card-level-5) / <alpha-value>)",
        "card-level-6": "rgb(var(--card-level-6) / <alpha-value>)",
        icon: "rgb(var(--color-icon) / <alpha-value>)",
        "custom-black": "rgb(var(--custom-black) / <alpha-value>)",
        "custom-white": "rgb(var(--custom-white) / <alpha-value>)",
        customgray: {
          200: "#F2F4F7",
          250: "#F8FAFC",
          400: "#3F4041",
          500: "#505058",
          600: "#9C9BA4",
          800: "#303030",
          850: "#333",
          900: "#1F1F1F",
          950: "#1E1E1F",
        },
        primary: {
          DEFAULT: "#DC2626", // Base color
          50: "#F5F6F7", // Very light gray
          100: "#E2E4E8",
          200: "#C4C7D1",
          300: "#A6A9BA",
          400: "#6B6F8B",
          500: "#DC2626", // Base (same as DEFAULT)
          600: "#DC2E2E",
          700: "#14151B",
          800: "#0F1014",
          900: "#0A0A0D",
        },
        gray: {
          DEFAULT: "#5F5D5D", // Updated
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#D0D5DD",
          200: "#EBEDEF", // Updated
          300: "#F6F7F8", // Updated
          400: "#4F5969",
          500: "#5F5D5D", // Updated
          600: "#545964", // Updated
          700: "#37363B", // Updated
          800: "#1D1D1D", // Updated
          900: "#344054", // Updated
        },
        "gray-custom": {
          DEFAULT: "#313135",
          100: "#4A4A50",
          200: "#9DA5B4",
          300: "#4A4A4F",
          400: "#667085", //
          500: "#313135",
          600: "#28282a",
          700: "#202022",
          900: "#19191a",
        },
        graycustom: {
          DEFAULT: "#313135",
          100: "#4A4A50",
          200: "#9DA5B4",
          300: "#4A4A4F",
          400: "#667085", //
          500: "#313135",
          600: "#28282a",
          700: "#202022",
          900: "#19191a",
        },
        error: {
          DEFAULT: "#F04438",
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEF3F2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          DEFAULT: "#F79009",
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          DEFAULT: "#12B76A",
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#01321C",
        },
        purple: {
          DEFAULT: "#F4F3FF",
          50: "#F4F3FF",
          700: "#5925DC",
        },
        pink: {
          DEFAULT: "#FDF2FA",
          50: "#FDF2FA",
          500: "#EE46BC",
        },
      },
      screens: {
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1300px",
        xxl: "1400px",
        onlyMobile: { max: "640px" },
        onlyTablet: { min: "641px", max: "992px" },
        onlyDesktop: { min: "993px" },
        upToTablet: { max: "992px" },

        // TODO delete the following breakpoint deprecated
        // ...defaultTheme.screens,
        tabUp: "993px",
        // => @media (min-width: 993px) { ... }

        xlDown: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgDown: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        tabDown: { max: "992px" },
        // => @media (max-width: 1023px) { ... }

        mdDown: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smDown: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        kpi: "linear-gradient(180deg, #2B5BB5 0%, #3F73D3 100%)",
        banner: "linear-gradient(180deg, #234585 0%, #3057A1 100%)",
        procedure:
          "linear-gradient(180deg, #FFF 0%, #FFE6C0 100%, #FFE6C0 100%)",
        "procedure-mobile":
          "linear-gradient(90deg, #FFF 0%, #FFE6C0 100%, #FFE6C0 100%)",
        reclamation: "linear-gradient(180deg, #2B5BB5 0%, #3F73D3 100%)",
        "selected-green":
          "linear-gradient( 120deg, rgb(var(--color-neutral-25)) 75%, rgb(var(--color-green-500)) 100%)",
        "selected-red":
          "linear-gradient( 120deg, rgb(var(--color-neutral-25)) 75%, rgb(var(--color-red-500)) 100%)",
      },
      boxShadow: {
        DEFAULT:
          "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
        base: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
        xl: "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)",
        espaceClientFooter: "0px 4px 16px 0px rgba(168, 177, 234, 0.40)",
        scrollIndice: "inset -7px 0px 8px -6px rgb(232 85 64 / 50%)",
        scrollIndiceLight: "inset -7px 0px 8px -6px rgb(200 200 200 / 90%)",
        "filial-card": "6px 6px 34px 0px rgba(0, 0, 0, 0.14)",
        dropdown: "6px 6px 54px 0px rgba(0, 0, 0, 0.14)",
        tooltip: "4.178px 4.178px 37.603px 0px rgba(0, 0, 0, 0.14)",
        portfolio: "3px 3px 17px 0px rgba(0, 0, 0, 0.14)",
        content: "6px 6px 34px 0px rgba(17, 38, 60, 0.10)",
        holdingcard: "0px 11.206px 19.21px 0px var(--color-neutral-50)",
        accordion: "0px -10px 22px 0px var(--color-red-100)",
        dropdown2:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInScale: "fadeInScale 300ms ease-out forwards",
        slideInLeft: "slideInLeft 300ms ease-out forwards",
        slideInRight: "slideInRight 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
