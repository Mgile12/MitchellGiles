import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'filter-public-files',
      configureServer() {
        return () => {
          const publicDir = path.resolve(__dirname, 'public');
          try {
            const files = fs.readdirSync(publicDir);
            files.forEach(file => {
              if (file.toLowerCase().includes('copy')) {
                const filePath = path.join(publicDir, file);
                try {
                  fs.unlinkSync(filePath);
                } catch (e) {
                  console.log(`Could not remove ${file}`);
                }
              }
            });
          } catch (e) {
            console.log('Could not clean public directory');
          }
        };
      },
      buildStart() {
        const publicDir = path.resolve(__dirname, 'public');
        try {
          const files = fs.readdirSync(publicDir);
          files.forEach(file => {
            if (file.toLowerCase().includes('copy')) {
              const filePath = path.join(publicDir, file);
              try {
                fs.unlinkSync(filePath);
              } catch (e) {
                console.log(`Could not remove ${file}`);
              }
            }
          });
        } catch (e) {
          console.log('Could not clean public directory');
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssr: {
    noExternal: ['framer-motion', 'lucide-react'],
  },
});
