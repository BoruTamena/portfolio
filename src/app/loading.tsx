import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0a0f0a] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Logo with pulse animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#22c55e]/20 rounded-full blur-xl animate-pulse"></div>
          <Image
            src="/logo.webp"
            alt="Loading..."
            width={120}
            height={120}
            className="rounded-full border-2 border-[#22c55e]/30 shadow-lg shadow-[#22c55e]/20 animate-pulse relative z-10"
            unoptimized
          />
        </div>
        
        {/* Loading text */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce"></div>
        </div>
        
        <p className="text-[#9db89d] text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

