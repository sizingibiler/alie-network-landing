import { AnimatedElement } from './AnimatedElement';

export function WhitepaperSection() {
  return (
    <section 
      className="section-container relative" 
      id="whitepaper"
      style={{
        backgroundImage: `url('/assets/images/backgrounds/whitepaper-bg.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <AnimatedElement>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The S.A.G.A. Framework
          </h2>
        </AnimatedElement>
        <AnimatedElement delay={200}>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our proprietary framework for project analysis. Dive deep into our scoring methodology, case studies, and the logic behind our intelligence engine.
          </p>
        </AnimatedElement>
        <AnimatedElement delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 border border-transparent hover:border-blue-400/50" 
              href="/assets/documents/alie-network-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Whitepaper
            </a>
            <a 
              className="inline-block px-8 py-4 text-lg font-bold text-blue-400 rounded-full border border-blue-400/50 hover:bg-blue-400/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300" 
              href="#"
            >
              View Framework
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}