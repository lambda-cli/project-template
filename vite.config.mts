import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import reactSwc from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    build: {
      sourcemap: false,
      outDir: './build',
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(env.mode),
    },
    plugins: [reactSwc()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
        {
          find: 'root',
          replacement: path.resolve(__dirname),
        },
      ],
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: false,
          secure: false,
        },
      },
    },
  };
});
