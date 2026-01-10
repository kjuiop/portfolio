import '../payments.css';

export default function renderPaymentSuccess(app) {
  app.innerHTML = `
    <div class="payments-container">
      <div class="payments-layout">
        <div class="payment-result">
          <!-- 성공 아이콘 -->
          <div class="result-icon success">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#22c55e"/>
              <path d="M20 32L28 40L44 24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <h1 class="result-title">결제가 완료되었습니다</h1>
          <p class="result-message">주문이 정상적으로 처리되었습니다.</p>
          
          <!-- 주문 정보 -->
          <section class="payment-section">
            <h2 class="payment-section-title">주문 정보</h2>
            <div class="order-info">
              <div class="info-row">
                <span class="info-label">주문번호</span>
                <span class="info-value">ORD-20240110-001234</span>
              </div>
              <div class="info-row">
                <span class="info-label">결제일시</span>
                <span class="info-value">2024.01.10 16:30:25</span>
              </div>
              <div class="info-row">
                <span class="info-label">결제수단</span>
                <span class="info-value">토스페이</span>
              </div>
              <div class="info-row">
                <span class="info-label">결제금액</span>
                <span class="info-value amount">19,800원</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}
