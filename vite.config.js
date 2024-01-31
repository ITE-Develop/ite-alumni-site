import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const src = 'src';
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  const config = {
    plugins: [
      vue(),
    ],
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    build: {
      chunkSizeWarningLimit: 2000,
      emptyOutDir: true,
      sourcemap: "hidden",
      minify: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          entryFileNames: `${process.env.VITE_PREFIX}-[name].min.js`,
          chunkFileNames: `${process.env.VITE_PREFIX}-[hash].chunk.js`,
          assetFileNames: `${process.env.VITE_PREFIX}-[hash].min.[ext]`,
        }
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, src),
        "@views": resolve(__dirname, `./${src}/views`),
        "@composables": resolve(__dirname, `./${src}/composables`),
        "@router": resolve(__dirname, `./${src}/router`),
        "@assets": resolve(__dirname, `./${src}/assets`),
        "@fonts": resolve(__dirname, `./${src}/assets/fonts`),
        "@images": resolve(__dirname, `./${src}/assets/images`),
        "@middlewares": resolve(__dirname, `./${src}/router/middlewares`),
      },
      extensions: [".js", ".vue", ".json", ".env"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $prefix: ${process.env.VITE_PREFIX}-;
            @import "${src}/assets/scss/global.scss";
          `
        }
      }
    },
  }

  config.server = {
    host: true,
    port: process.env.VITE_DEV_SERVER_PORT || 8080,
    strictPort: true
  }

  // Configration for Virtual Host
  if (process.env.VITE_DEV_SERVER_HMR_CLIENT_PORT) {
    config.server = {
      ...config.server,
      hmr: {
        clientPort: process.env.VITE_DEV_SERVER_HMR_CLIENT_PORT || 80,
      },
      watch: {
        usePolling: true
      }
    }
  }

  return config;
})
