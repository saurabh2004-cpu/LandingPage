import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#003344] z-50">
      <div className="relative flex items-center justify-center">
        {/* Center Logo */}
        <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
        <div className="absolute flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 2L15 8H9L12 2ZM15 8H21L18 14L15 8ZM9 8H3L6 14L9 8ZM6 14L9 20H3L6 14ZM18 14L21 20H15L18 14ZM9 20L12 17L15 20H9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
