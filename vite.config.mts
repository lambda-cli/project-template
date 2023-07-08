import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import reactSwc from '@vitejs/plugin-react-swc';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    build: {
      sourcemap: false,
      outDir: './build',
      lib: {
        entry: './src/index.tsx',
        name: 'JsBunlde',
        fileName: 'index',
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(env.mode),
    },
    plugins: [
      reactSwc(),
      viteExternalsPlugin({
        react: 'React',
        'react-dom': 'ReactDOM',
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
        {
          find: /^~(.*)$/,
          replacement: '$1',
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
          changeOrigin: true,
        },
      },
    },
  };
});
