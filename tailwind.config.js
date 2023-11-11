module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        my: {
          css: {
            "--tw-prose-body": theme("colors.neutral[400]"),
            "--tw-prose-headings": theme("colors.neutral[300]"),
            "--tw-prose-lead": theme("colors.neutral[500]"),
            "--tw-prose-links": theme("colors.neutral[300]"),
            "--tw-prose-bold": theme("colors.neutral[300]"),
            "--tw-prose-counters": theme("colors.neutral[600]"),
            "--tw-prose-bullets": theme("colors.neutral[400]"),
            "--tw-prose-hr": theme("colors.neutral[300]"),
            "--tw-prose-quotes": theme("colors.neutral[300]"),
            "--tw-prose-quote-borders": theme("colors.neutral[300]"),
            "--tw-prose-captions": theme("colors.neutral[500]"),
            "--tw-prose-code": theme("colors.neutral[800]"),
            "--tw-prose-pre-code": theme("colors.neutral[100]"),
            "--tw-prose-pre-bg": theme("colors.neutral[800]"),
            "--tw-prose-th-borders": theme("colors.neutral[300]"),
            "--tw-prose-td-borders": theme("colors.neutral[200]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
