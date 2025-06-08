"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 to-rose-300 px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6 text-pink-700">
        에겐녀? 테토녀? 궁금하지 않아? 🤔
      </h1>

      <div className="mb-6 w-64 h-64 relative">
        <Image
          src="/test_imge.png"
          alt="테스트 이미지"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <p className="max-w-md mb-8 text-lg text-pink-900">
        15문항만 풀면 딱 나 성향이 뭔지 알려줄게!  
        솔직히 재미는 보장한다구~! 😎
      </p>

      <button
        onClick={() => router.push("/test")}
        className="bg-pink-600 text-white px-10 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        바로 테스트 하러 가기! 🚀
      </button>
    </div>
  );
}