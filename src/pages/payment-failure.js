import '../payments.css';

export default function renderPaymentFailure(app) {
  app.innerHTML = `
    <div class="payments-container">
      <div class="payments-layout">
        <div class="payment-result">
          <!-- 실패 아이콘 -->
          <div class="result-icon failure">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#ef4444"/>
              <path d="M20 20L44 44M44 20L20 44" stroke="white" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </div>
          
          <h1 class="result-title">결제에 실패했습니다</h1>
          <p class="result-message">결제 처리 중 오류가 발생했습니다. 다시 시도해주세요.</p>
          
          <!-- 오류 정보 -->
          <section class="payment-section">
            <h2 class="payment-section-title">오류 정보</h2>
            <div class="error-info">
              <div class="error-message-box">
                <p class="error-message">카드 한도 초과 또는 잔액 부족</p>
                <p class="error-detail">결제 수단을 확인하고 다시 시도해주세요.</p>
              </div>
            </div>
          </section>

          <!-- 주문 정보 (실패한 주문) -->
          <section class="payment-section">
            <h2 class="payment-section-title">주문 정보</h2>
            <div class="order-info">
              <div class="info-row">
                <span class="info-label">주문번호</span>
                <span class="info-value">ORD-20240110-001234</span>
              </div>
              <div class="info-row">
                <span class="info-label">시도일시</span>
                <span class="info-value">2024.01.10 16:30:25</span>
              </div>
              <div class="info-row">
                <span class="info-label">결제수단</span>
                <span class="info-value">토스페이</span>
              </div>
              <div class="info-row">
                <span class="info-label">주문금액</span>
                <span class="info-value amount">19,800원</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}
