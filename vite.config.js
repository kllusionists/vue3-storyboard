import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  env.VITE_APP_ENV === 'development' ? console.log('development') : console.log('production')

  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve('./src')
        }
      ]
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "./src/style/animation.scss";`
    //     }
    //   }
    // }
  }
})
