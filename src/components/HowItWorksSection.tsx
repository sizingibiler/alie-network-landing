export function HowItWorksSection() {
  const technologies = [
    {
      title: "Phoenix Engine",
      description: "Our proprietary alpha intelligence engine that scours the market to detect alpha signals, trends, and opportunities before they go mainstream."
    },
    {
      title: "S.A.G.A. Analysis", 
      description: "A filtering mechanism that rates projects with a \"confidence score\" based on Signal, Alpha, Growth, and Actionability metrics."
    },
    {
      title: "X-Analyzer",
      description: "A filtering tool for identifying high-ROI KOLs and influencers, optimizing marketing spend for maximum impact."
    }
  ];

  return (
    <section className="section-container min-h-screen flex items-center" id="technology">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/videos/3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl font-extrabold mb-4">[ HOW IT WORKS ]</h2>
        </div>
        
        <div className="space-y-8 max-w-2xl">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="border border-white/10 hover:border-indigo-600/70 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 bg-gray-900/40 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-400 flex-grow">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}