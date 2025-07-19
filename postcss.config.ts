import type { Plugin } from 'postcss'

const config = {
  plugins: [
    require('@tailwindcss/postcss') as Plugin,
    require('autoprefixer') as Plugin,
  ],
}

export default config
