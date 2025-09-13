export function TopTicker() {
  const tickerText = "STOP GUESSING , START GROWING";
  
  return (
    <div className="fixed top-0 left-0 w-full z-[100] py-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 overflow-hidden whitespace-nowrap shadow-lg">
      <div className="inline-block animate-scroll">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="font-montserrat text-xs font-bold uppercase text-white/90 px-2 tracking-wider">
            {tickerText} <span className="opacity-50 ml-2">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}