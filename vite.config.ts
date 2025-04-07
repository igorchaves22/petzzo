import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000
    },
    preview: {
        port: 5000
    },
    resolve: {
        alias: {
            "~assets": path.resolve(__dirname, "./src/assets"),
            "~components": path.resolve(__dirname, "./src/components"),
            "~contexts": path.resolve(__dirname, "./src/contexts"),
            "~hooks": path.resolve(__dirname, "./src/hooks"),
            "~styles": path.resolve(__dirname, "./src/styles"),
            "~types": path.resolve(__dirname, "./src/types"),
            "~utils": path.resolve(__dirname, "./src/utils")
        }
    }
});
