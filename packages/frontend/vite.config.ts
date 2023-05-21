import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// TODO: Change the favicons in the public folder
// https://favicon.io/favicon-converter/
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
});
