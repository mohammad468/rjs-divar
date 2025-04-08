import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paths } from "./src/constants/paths";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  resolve: {
    alias: {
      ...paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        ""
      ),
    },
  },
  server: {
    host: "localhost",
    port: "3000"
  }
});