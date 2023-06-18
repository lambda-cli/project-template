import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    build: {
      sourcemap: false,
      outDir: './build',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    esbuild: {
      loader: 'tsx',
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'tsx',
        },
      },
    },
    plugins: [
      react({
        include: '**/*.{js,jsx,ts,tsx}',
      }),
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
