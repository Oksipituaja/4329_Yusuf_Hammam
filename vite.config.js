import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [tailwindcss()],
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    base: '/4329_Yusuf_Hammam/'
})