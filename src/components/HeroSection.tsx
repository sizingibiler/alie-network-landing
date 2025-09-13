import { useEffect, useRef } from 'react';
import TextScramble, { TextScrambleRef } from './TextScramble';
import { AnimatedElement } from './AnimatedElement';

export function HeroSection() {
  const line1Ref = useRef<TextScrambleRef>(null);
  const line2Ref = useRef<TextScrambleRef>(null);
  const paragraphRef = useRef<TextScrambleRef>(null);

  useEffect(() => {
    const animateText = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (line1Ref.current) {
        await line1Ref.current.setText('Stop Guessing.');
      }
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (line2Ref.current) {
        await line2Ref.current.setText('Start Growing.');
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (paragraphRef.current) {
        await paragraphRef.current.setText('We are the intelligence partner for Web3, turning data into dominance with our proprietary analytical engine.');
      }
    };

    animateText();
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-start text-left overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/assets/videos/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-radial from-black/30 via-black/80 to-black z-10"></div>
      </div>

      <div className="relative z-20 p-8 md:p-16 lg:ml-20 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
          <div className="block">
            <TextScramble ref={line1Ref} className="block" />
          </div>
          <br />
          <div className="block">
            <TextScramble ref={line2Ref} className="block" />
          </div>
        </h1>
        
        <div className="text-lg md:text-xl text-gray-300 mb-8">
          <TextScramble ref={paragraphRef} as="p" />
        </div>
        
        <AnimatedElement delay={2000}>
          <a 
            className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300" 
            href="#services"
          >
            Discover Our Solutions
          </a>
        </AnimatedElement>
      </div>
    </main>
  );
}