// 간단한 라우터 구현
export function initRouter() {
  const routes = {
    '/': () => import('./pages/portfolio.js'),
    '/payments': () => import('./pages/payments.js'),
  };

  async function handleRoute() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];
    
    const module = await route();
    const app = document.querySelector('#app');
    app.innerHTML = '';
    
    if (module.default) {
      module.default(app);
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
