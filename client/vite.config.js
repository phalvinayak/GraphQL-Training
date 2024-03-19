/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@src', replacement: path.resolve(__dirname, './src') },
            {
                find: '@graphQuery',
                replacement: path.resolve(
                    __dirname,
                    './src/application/graph-query'
                ),
            },
            {
                find: '@pages',
                replacement: path.resolve(
                    __dirname,
                    './src/presentation/pages'
                ),
            },
            {
                find: '@library',
                replacement: path.resolve(
                    __dirname,
                    './src/presentation/common/library'
                ),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, './src/assets'),
            },
            {
                find: '@components',
                replacement: path.resolve(
                    __dirname,
                    './src/presentation/common/components'
                ),
            },
        ],
    },
});
