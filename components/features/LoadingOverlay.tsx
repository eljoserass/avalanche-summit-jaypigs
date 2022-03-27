import React from "react";

const LoadingOverlay = () => {
  return (
    <main className="relative flex min-h-[400px] items-center">
      <div className="z-50 flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
        <h2 className="text-center text-xl font-semibold text-white">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please be patient.
        </p>
      </div>
    </main>
  );
};

export default LoadingOverlay;
