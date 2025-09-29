import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Define each HTML file as an entry point
        main: "./index.html", // Main page
        about: "./About.html", // About page
        contact: "./Services.html", // Contact page
      },
    },
  },
});
