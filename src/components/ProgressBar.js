// src/components/ProgressBar.js

export default function ProgressBar({ step, total }) {
  const percent = Math.round((step / total) * 100);

  return (
    <div className="w-full max-w-md mb-6">
      <div className="w-full bg-gray-300 h-2 rounded-full">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm text-right text-gray-400 mt-1">
        {percent}% 완료
      </p>
    </div>
  );
}