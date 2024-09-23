import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#F7F2FF',
          100: '#F1E9FF',
          200: '#E0D1FF',
          300: '#CCB2FF',
          400: '#A77DFF',
          500: '#7A44FF',
          600: '#5F1AFF',
          700: '#5717E6',
          800: '#4914BF',
          900: '#391095'
        }
      }
    }
  },
  plugins: [flowbitePlugin]
} 
