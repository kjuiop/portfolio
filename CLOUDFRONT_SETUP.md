# CloudFront SPA 라우팅 설정 가이드

S3 + CloudFront 환경에서 `/payments` 같은 경로로 직접 접근할 때 404 에러가 발생하는 문제를 해결하기 위한 설정입니다.

## CloudFront Error Pages 설정

1. AWS 콘솔에서 CloudFront Distribution 선택
2. **Error Pages** 탭으로 이동
3. **Create Custom Error Response** 클릭
4. 다음 설정 입력:
   - **HTTP Error Code**: `404: Not Found`
   - **Customize Error Response**: `Yes`
   - **Response Page Path**: `/portfolio/index.html` (또는 `/index.html` - S3 경로에 따라 다름)
   - **HTTP Response Code**: `200: OK`
5. **Create** 클릭

## 참고

- S3 버킷 경로가 `/portfolio/`로 시작한다면 Response Page Path는 `/portfolio/index.html`
- 루트 경로라면 `/index.html`
- 이 설정으로 모든 404 에러가 `index.html`로 리다이렉트되어 클라이언트 사이드 라우터가 경로를 처리합니다.
