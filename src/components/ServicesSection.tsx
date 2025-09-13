import { useEffect, useRef } from 'react';
import TextScramble, { TextScrambleRef } from './TextScramble';
import { AnimatedElement } from './AnimatedElement';

export function ServicesSection() {
  const titleRef = useRef<TextScrambleRef>(null);
  const subtitleRef = useRef<TextScrambleRef>(null);

  const services = [
    {
      title: "LAUNCHPAD Package",
      description: "An intensive growth sprint to maximize launch impact for new projects before TGE.",
      features: [
        "KOL Network Activation",
        "Strategic Partnerships", 
        "Community Building"
      ]
    },
    {
      title: "ECOSYSTEM GROWTH",
      description: "A continuous monthly partnership to revitalize community, increase adoption, and ensure steady growth.",
      features: [
        "Community Revival",
        "Market Analysis",
        "Growth Automation"
      ]
    },
    {
      title: "DATA & STRATEGY",
      description: "Bespoke market analysis, competitor reports, and strategic data to empower in-house teams.",
      features: [
        "Custom Market Analysis",
        "On-Chain Analytics"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              titleRef.current?.setText('Productized Solutions');
            }, 300);
            setTimeout(() => {
              subtitleRef.current?.setText('Data-driven growth packages designed for every stage of your project\'s lifecycle.');
            }, 600);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="section-container min-h-screen flex items-center" id="services">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/videos/Robot yüz.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">
            <TextScramble ref={titleRef} />
          </h2>
          <div className="text-xl text-gray-400">
            <TextScramble ref={subtitleRef} as="p" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 max-w-7xl mx-auto md:divide-x md:divide-gray-800">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={800 + (index * 200)} className="flex flex-col text-left p-8 group hover:bg-gray-900/30 transition-all duration-300 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              <div className="my-6 border-t border-gray-800 group-hover:border-blue-800/50 transition-colors duration-300"></div>
              <ul className="space-y-2 text-gray-300">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start group/item hover:text-white transition-colors duration-300">
                    <span className="text-blue-400 mr-3 mt-1 group-hover/item:text-blue-300 transition-colors duration-300">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}