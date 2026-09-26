import React, { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      
      <div className="flex w-full max-w-md flex-col items-center px-6">

        {/* Logo */}
        <div className="mb-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#ff5a1f] shadow-lg">
            <span className="text-2xl font-bold text-[#0b1b3a]">
              JR
            </span>
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-3xl font-bold tracking-wide text-[#0b1b3a]">
          JUPITER <span className="text-[#ff5a1f]">RISE</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Ironmongery & Builders Hardware
        </p>

        {/* Loader */}
        <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-[#ff5a1f] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 flex w-full justify-between text-sm">
          <span className="text-gray-500">Loading...</span>

          <span className="font-bold text-[#ff5a1f]">
            {progress}%
          </span>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-gray-400">
          Quality • Reliability • Trust
        </p>

      </div>
    </div>
  );
};

export default Loader;