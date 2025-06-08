// src/pages/test.js

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

export default function TestPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({ egen: 0, teto: 0 });
  const router = useRouter();

  const handleSelect = (selectedScore) => {
    setScore((prev) => ({
      egen: prev.egen + (selectedScore.egen || 0),
      teto: prev.teto + (selectedScore.teto || 0),
    }));
    setStep((prev) => prev + 1);
  };

  // 질문 다 끝나면 결과 페이지로 이동
  if (step >= questions.length) {
    router.push(`/result?egen=${score.egen}&teto=${score.teto}`);
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 text-gray-800 px-4">
      <ProgressBar step={step} total={questions.length} />
      <QuestionCard questionData={questions[step]} onSelect={handleSelect} />
    </div>
  );
}