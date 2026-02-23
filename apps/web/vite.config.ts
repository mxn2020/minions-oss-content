import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-oss-content/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/oss-content/, /node_modules/],
        },
    },
});
