import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config: UserConfig = {
    base: "/",
    server: {
      host: "localhost",
      port: 3000,
    },
    plugins: [react()],
  };

  if (command !== "serve") {
    config.base = "/react-forms/";
  }

  return config;
});
