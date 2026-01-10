function a(s){s.innerHTML=`
    <div class="payments-container">
      <div class="payments-layout">
        <!-- 왼쪽 컬럼 -->
        <div class="payments-left">
          <!-- 주문서 섹션 -->
          <section class="payment-section">
            <h2 class="payment-section-title">주문서</h2>
            <div class="orderer-info">
              <div class="orderer-name">김정인</div>
              <div class="shipping-address">
                <span class="address-label">기본 배송지</span>
                <div class="address-text">서울 강남구 삼성동 115-3 401호</div>
                <div class="phone-number">010-3182-0825</div>
              </div>
            </div>
          </section>

          <!-- 주문 상품 섹션 -->
          <section class="payment-section">
            <h3 class="order-item-title">주문 상품 1개</h3>
            <div class="order-item">
              <div class="item-image">👜</div>
              <div class="item-details">
                <div class="item-brand">지오다노</div>
                <div class="item-name">베이직 레더 가방 130004 </div>
                <div class="item-price">19,800원</div>
                <div class="item-delivery">01.14(수) 도착 예정</div>
              </div>
            </div>
          </section>

          <!-- 결제 수단 섹션 -->
          <section class="payment-section">
            <h2 class="payment-section-title">결제 수단</h2>
            <div class="payment-methods">
              
              <label class="payment-method-option">
                <input type="radio" name="payment-method" checked />
                <span class="payment-logo toss">토스</span>
                <span>토스페이</span>
              </label>
              
            </div>
          </section>

          <!-- 결제 금액 섹션 -->
          <section class="payment-summary">
            <h2 class="payment-section-title">결제 금액</h2>
            <div class="price-row">
              <span>상품 금액</span>
              <span>19,800원</span>
            </div>
            <div class="price-row">
              <span>배송비</span>
              <span>무료배송</span>
            </div>
            <div class="price-row total">
              <span>총 결제 금액</span>
              <span>19,800원</span>
            </div>
          </section>

          <!-- 약관 동의 -->
          <div class="terms-agreement">
            <div class="term-item">
              <span>주문 내용을 확인했으며 결제에 동의합니다.</span>
              <a href="#" class="term-link">자세히</a>
            </div>
            <div class="term-item">
              <span>회원님의 개인정보는 안전하게 관리됩니다.</span>
              <a href="#" class="term-link">자세히</a>
            </div>
            <div class="term-item">
              <span>뭐든사는 통신판매중개자로, 업체 배송 상품의 상품/상품정보/거래 등에 대한 책임은 뭐든사가 아닌 판매자에게 있습니다.</span>
            </div>
          </div>

          <!-- 결제 버튼 -->
          <div class="payment-action">
            <div class="toss-pay-benefit">토스페이 결제 최대 1,600원 적립</div>
            <button class="btn-payment">19,800원 결제하기</button>
          </div>

        </div>
      </div>
    </div>
  `}export{a as default};
