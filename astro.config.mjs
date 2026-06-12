import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://surajraj99.github.io",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { format: "directory" },
});
