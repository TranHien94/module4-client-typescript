import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": `${path.resolve(__dirname, "./src/")}`,
            "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
            "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
            "@slices": `${path.resolve(__dirname, "./src/stores/slices/")}`
        },
    },

    /* Config Global Scss Variable */
    css: {
        preprocessorOptions: {
            scss: {additionalData: `@import "src/assets/scss/index.scss";`},
        }
    }
})
