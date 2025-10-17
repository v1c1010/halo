import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://demoqa.com",
    browserName: "chromium",
    headless: true,
    screenshot: "on",
    video: "retain-on-failure",
  },
  reporter: [["list"], ["html", { open: "never" }]],
});
