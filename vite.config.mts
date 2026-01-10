import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  // 개발 환경에서는 base를 '/'로, 빌드 시에는 '/portfolio/'로 설정
  const base = command === 'build' ? '/portfolio/' : '/';
  
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


