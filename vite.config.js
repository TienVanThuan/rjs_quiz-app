import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // dùng cho ubuntu
  server: {
    host: "localhost", // Đảm bảo Vite bind đúng hostname
    hmr: {
      host: "localhost", // Cấu hình cho Hot Module Replacement
    },
    watch: {
      usePolling: true, // Hỗ trợ theo dõi thay đổi file
    },
  },
});
