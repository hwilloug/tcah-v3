/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Maroon
        primary: '#5D1725', // Mississippi State Maroon (HEX #5D1725)
        
        // Support Colors
        secondary: '#777777', // Mississippi State Dark Grey (HEX #777777)
        accent: '#C1C6C8', // Mississippi State Light Grey (HEX #C1C6C8)
        
        // Additional Accent Colors
        accent1: '#A9431E', // Burnt Orange (HEX #A9431E)
        accent2: '#642F6C', // Purple (HEX #642F6C)
        accent3: '#00A3AD', // Teal (HEX #00A3AD)
        accent4: '#8F993E', // Olive Green (HEX #8F993E)
        
        // Base colors
        light: '#F5F5F5', // Light background
        dark: '#333333', // Dark text
      },
    },
  },
  plugins: [],
}