export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a1628]">
      {/* Spinner */}
      <div className="relative w-16 h-16 mb-6">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#D4A843]/20" />
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D4A843] animate-spin" />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#D4A843] animate-pulse" />
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-400 text-sm font-medium animate-pulse">
        جاري التحميل...
      </p>
    </div>
  );
}
