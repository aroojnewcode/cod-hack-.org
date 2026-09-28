/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        z: {
          bg: '#08060c',
          elevated: '#0c0b12',
          band: '#0e0c14',
          card: '#121018',
          hover: '#17141f',
          ink: '#f5f5f7',
          accent: '#8b5cf6',
          soft: '#a78bfa',
          deep: '#7c3aed',
          success: '#c084fc',
        },
      },
      fontFamily: {
        geist: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        silkscreen: ['Silkscreen', 'cursive'],
      },
    },
  },
  plugins: [],
}
