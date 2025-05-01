/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0066cc',  // Replace with your brand color
          secondary: '#f5f5f7',
          accent: '#ff5500',
        },
        typography: ({ theme }) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.900'),
              h1: { color: theme('colors.primary') },
              h2: { color: theme('colors.primary') },
            }
          }
        })
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }