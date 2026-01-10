// 간단한 라우터 구현
export function initRouter() {
  const routes = {
    '/': () => import('./pages/portfolio.js'),
    '/payments': () => import('./pages/payments.js'),
  };

  async function handleRoute() {
    // S3 경로가 /portfolio/로 시작하는 경우 처리
    let path = window.location.pathname;
    
    // /portfolio/ 접두사 제거 (S3 서브디렉토리 경로 처리)
    if (path.startsWith('/portfolio/')) {
      path = path.replace('/portfolio', '');
    } else if (path.startsWith('/portfolio')) {
      path = path.replace('/portfolio', '');
    }
    
    // 빈 경로는 루트로 처리
    if (path === '' || path === '/') {
      path = '/';
    }
    
    // 경로 정규화 (끝에 슬래시 제거, 단 루트는 제외)
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    
    const route = routes[path] || routes['/'];
    
    try {
      const module = await route();
      const app = document.querySelector('#app');
      if (!app) {
        console.error('App element not found');
        return;
      }
      app.innerHTML = '';
      
      if (module.default) {
        module.default(app);
      }
    } catch (error) {
      console.error('Route error:', error);
      // 에러 발생 시 기본 라우트로 폴백
      const fallbackModule = await routes['/']();
      const app = document.querySelector('#app');
      if (app && fallbackModule.default) {
        app.innerHTML = '';
        fallbackModule.default(app);
      }
    }
  }

  // 초기 로드 및 popstate 이벤트 처리
  window.addEventListener('popstate', handleRoute);
  handleRoute();

  // 링크 클릭 시 라우팅 처리
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.history.pushState({}, '', href);
      handleRoute();
    }
  });
}
