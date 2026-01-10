import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  // CloudFront가 이미 /portfolio를 붙여주므로, 빌드 시에도 base를 '/'로 설정
  const base = '/';
  
  return {
    root: ".",
    base,
    server: {
      port: 5173
    },
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          payments: './payments.html'
        }
      }
    }
  };
});


