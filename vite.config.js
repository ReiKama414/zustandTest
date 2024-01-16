import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			strategies: "generateSW", // Default
			includeAssets: ["favicon.ico", "Logo.png"],
			registerType: "autoUpdate",
			manifest: {
				name: "ZustandTest",
				short_name: "ZT",
				description: ":D",
				start_url: "./",
				icons: [
					{
						src: "favicon.ico",
						sizes: "64x64 32x32 24x24 16x16",
						type: "image/x-icon",
					},
					{
						src: "Logo.png",
						type: "image/png",
						sizes: "192x192",
					},
					{
						src: "Logo.png",
						type: "image/png",
						sizes: "512x512",
					},
				],
				display: "standalone",
				theme_color: "#000000",
				background_color: "#ffffff",
			},
		}),
	],
});
