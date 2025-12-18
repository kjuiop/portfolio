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
        <a href="#side-project">Side Project</a>
        <a href="#tech-blog">Tech Blog</a>
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
    
    <section id="side-project" class="page-section">
      <h2>📂 Side Project</h2>
      <p>
        개인적으로 진행한 사이드 프로젝트들을 간단한 카드 형식으로 소개하는 영역입니다.
      </p>
      <div class="skills-grid" style="margin-top: 1.2rem;">
        <div class="skill-card">
          <h3>프로젝트 이름 1</h3>
          <p>무엇을 해결하기 위한 프로젝트인지, 어떤 기술을 사용했는지 적어보세요.</p>
        </div>
        <div class="skill-card">
          <h3>프로젝트 이름 2</h3>
          <p>간단한 링크(GitHub, 배포 URL 등)도 여기에 같이 표시할 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section id="tech-blog" class="page-section">
      <h2>✏️ Tech Blog</h2>
      <p>
        기술 블로그 글 중에서 대표적인 글 몇 개를 리스트로 보여주는 영역입니다.
      </p>
      <ul class="timeline" style="margin-top: 1rem;">
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-period">YYYY.MM.DD</span>
            <h3>블로그 글 제목 1</h3>
            <p>글의 핵심 주제/키워드를 한 줄로 요약해 보세요.</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-period">YYYY.MM.DD</span>
            <h3>블로그 글 제목 2</h3>
            <p>관련 링크를 나중에 a 태그로 연결해 두면 좋습니다.</p>
          </div>
        </li>
      </ul>
    </section>
  </main>
`;

