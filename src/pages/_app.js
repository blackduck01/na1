// src/pages/_app.js

import "@/styles/globals.css"; // 기존 스타일 임포트
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 구글 애드센스 광고 스크립트 */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      {/* 기존 페이지 컴포넌트 렌더링 */}
      <Component {...pageProps} />
    </>
  );
}