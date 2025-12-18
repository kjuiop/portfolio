import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="page">
    <header class="page-header">
      <div>
        <h1 class="page-title">My Portfolio</h1>
        <p class="page-subtitle">Vanilla JS + Vite 기반 포트폴리오</p>
      </div>
      <nav class="page-nav">
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#career">Career</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="about" class="page-section">
      <h2>👋 About</h2>
      <p>
        간단한 자기 소개를 적는 영역입니다. 어떤 일을 하고 있고,
        무엇에 관심이 있는지, 어떤 가치를 중요하게 생각하는지 적어보세요.
      </p>
    </section>

    <section id="skill" class="page-section">
      <h2>🛠 Skill</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Language / Runtime</h3>
          <p>JavaScript (ES6+), TypeScript, Node.js</p>
        </div>
        <div class="skill-card">
          <h3>Frontend</h3>
          <p>HTML5, CSS3, Web APIs, 성능 최적화</p>
        </div>
        <div class="skill-card">
          <h3>Tools</h3>
          <p>Git, Vite, npm, 테스트/빌드 도구 등</p>
        </div>
      </div>
    </section>

    <section id="career" class="page-section">
      <h2>📌 Career</h2>
      <ul class="timeline">
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-period">2023 - 현재</span>
            <h3>회사명 / 포지션</h3>
            <p>주요 업무와 성과를 간단히 적어주세요.</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-period">2021 - 2023</span>
            <h3>이전 회사 / 포지션</h3>
            <p>담당했던 프로젝트나 기술 스택을 정리해보세요.</p>
          </div>
        </li>
      </ul>
    </section>
  </main>
`;

