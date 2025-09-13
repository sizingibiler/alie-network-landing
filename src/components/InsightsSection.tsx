export function InsightsSection() {
  const insights = [
    {
      category: "CASE STUDY",
      title: "The Future of Web3 Intelligence",
      description: "A deep dive into our Phoenix Engine and how it works."
    },
    {
      category: "STRATEGY",
      title: "From Noise to Signal: Data-Driven Growth", 
      description: "How to leverage data to create effective growth strategies."
    },
    {
      category: "ANALYSIS",
      title: "Project Spotlight: Aethir Review",
      description: "Our S.A.G.A. analysis of the Aethir ecosystem and growth potential."
    }
  ];

  return (
    <section className="section-container flex justify-end" id="blog">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/videos/morlu.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-md ml-auto text-right">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Latest Insights</h2>
            <p className="text-lg text-gray-400 mt-2">From our research and analysis desk.</p>
          </div>
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="border border-white/10 hover:border-indigo-600/70 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 bg-gray-900/40 p-6 rounded-2xl text-left cursor-pointer"
              >
                <p className="text-xs font-semibold text-indigo-400 mb-2">{insight.category}</p>
                <h3 className="text-xl font-bold mb-2 text-white">{insight.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{insight.description}...</p>
                <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition text-sm">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}