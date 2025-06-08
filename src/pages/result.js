"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [showFamous, setShowFamous] = useState(false);

  const egen = parseInt(searchParams.get("egen") || "0", 10);
  const teto = parseInt(searchParams.get("teto") || "0", 10);

  const total = egen + teto;
  const egenPercent = total === 0 ? 0 : Math.round((egen / total) * 100);
  const tetoPercent = 100 - egenPercent;

  const dominantType = egenPercent >= tetoPercent ? "egen" : "teto";
  const dominantPercent = dominantType === "egen" ? egenPercent : tetoPercent;

  let label = "";
  if (dominantPercent >= 80) {
    label = dominantType === "egen" ? "완벽 에겐녀" : "완벽 테토녀";
  } else if (dominantPercent >= 51) {
    label = dominantType === "egen" ? "세미 에겐녀" : "세미 테토녀";
  } else {
    label = "반반 혼종";
  }

  const resultImage = dominantType === "egen" ? "/egen.png" : "/teto.png";

  const fullDescription = dominantType === "egen"
    ? "에겐녀는 목소리가 작고, 무리지어서 생활하며 관계 지향적인 성향입니다. 다정하고 따뜻하며, 무리를 위해 자신을 맞추고 어울리는 타입이에요. 조용하지만 깊은 내면을 가졌으며, 신중한 판단력이 특징입니다. 친구와 연인을 고를 때 본인을 보호해줄 대상을 찾으며, 자신을 맞추고 어울리려는 성향이 강합니다."
    : "테토녀는 목소리가 크고, 우악스러우며 리더 재질입니다. 감정 표현이 솔직하고 쿨하며, 개인 생활을 선호하는 성향이에요. 다소 직설적이고 강한 개성을 가지며, 주변 사람들을 이끄는 힘이 있습니다. 연인 관계에서는 리더 역할을 선호하고, 자기 할 말에 바빠 분위기를 잘 못 읽는 편입니다.";

  const shortDescription = fullDescription.slice(0, 100) + "...";

  const jobHobbyRecommendations = {
    egen: [
      "카페", "소품샵", "옷가게", "PC방", "예술직종",
      "나레이터", "모델", "레이싱걸", "골프 캐디",
      "공무원", "은행원", "유치원 선생님", "학교 선생님",
      "디자인 직종 프리랜서", "우체국", "사무직", "교내 근로 알바"
    ],
    teto: [
      "고깃집 서빙", "기합이 들어간 알바", "물류센터", "공장",
      "개인사업", "혼자서 독립적으로 일하는 형태", "스마트스토어 사장",
      "슈퍼바이저", "전문직 (사원부터 시작X)", "디자인 직종(필드)",
      "여행 사진작가"
    ],
  };

  const famousPeople = {
    egen: [
      "아이유", "수지", "청하", "태연", "백예린", "정은지", "윤아", "아이린", "설현", "강민경",
      "소녀시대 태연", "이유비", "박신혜", "전지현", "한지민", "김태희", "손예진", "송혜교", "문근영", "고아라"
    ],
    teto: [
      "제니 (BLACKPINK)", "로제 (BLACKPINK)", "김태리", "화사 (마마무)", "선미", "CL", "효린", "제시", "현아", "이하이",
      "수영", "손나은", "박보영", "이성경", "김지원", "신세경", "문가영", "한효주", "아이린 (레드벨벳)", "청하"
    ],
  };

  // 링크 복사 함수
  const copyLinkToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("링크가 복사되었습니다!"))
        .catch(() => alert("복사 실패!"));
    }
  };

  // 저장 안내 함수
  const saveGuide = () => {
    alert("결과 화면을 마우스로 드래그한 후, 우클릭하여 '이미지로 저장' 하거나,\n모바일/PC의 스크린샷 기능을 사용하세요.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{label} 스타일!</h1>

      <Image
        src={resultImage}
        alt="Result Image"
        width={280}
        height={280}
        className="rounded-xl mb-4 shadow-lg"
      />

      <p className="text-lg font-medium mb-2">
        에겐녀 {egenPercent}% / 테토녀 {tetoPercent}%
      </p>

      <div className="w-full max-w-sm h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-pink-400"
          style={{ width: `${egenPercent}%` }}
          title={`에겐녀 ${egenPercent}%`}
        />
      </div>

      {/* 설명 접기/펼치기 */}
      <p className="max-w-md text-sm text-gray-700 mb-2 px-4">
        {showFullDesc ? fullDescription : shortDescription}
      </p>
      <button
        onClick={() => setShowFullDesc(!showFullDesc)}
        className="text-sm text-blue-500 underline mb-6"
      >
        {showFullDesc ? "접기" : "더보기"}
      </button>

      {/* 추천 직업·취미 접기/펼치기 */}
      <div className="max-w-md bg-pink-50 rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2 flex justify-between items-center">
          추천 직업·취미
          <button
            onClick={() => setShowJobs(!showJobs)}
            className="text-sm text-blue-500 underline"
          >
            {showJobs ? "접기" : "펼치기"}
          </button>
        </h2>
        {showJobs && (
          <ul className="list-disc list-inside text-sm text-pink-700">
            {(dominantType === "egen" ? jobHobbyRecommendations.egen : jobHobbyRecommendations.teto).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 유명 인물/캐릭터 접기/펼치기 */}
      <div className="max-w-md bg-pink-50 rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2 flex justify-between items-center">
          성향별 유명 인물/캐릭터
          <button
            onClick={() => setShowFamous(!showFamous)}
            className="text-sm text-blue-500 underline"
          >
            {showFamous ? "접기" : "펼치기"}
          </button>
        </h2>
        {showFamous && (
          <ul className="list-disc list-inside text-sm text-pink-700 max-h-60 overflow-auto">
            {(dominantType === "egen" ? famousPeople.egen : famousPeople.teto).map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 링크 복사 및 저장 안내 버튼 */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={copyLinkToClipboard}
          className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 transition"
        >
          🔗 링크 복사
        </button>

        <button
          onClick={saveGuide}
          className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700 transition"
        >
          결과 이미지 저장 안내
        </button>
      </div>

      <button
        onClick={() => router.push("/test")}
        className="mt-4 bg-black text-white px-5 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        다시하기
      </button>
    </div>
  );
}