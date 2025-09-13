import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedElement } from './AnimatedElement';

export function TrustedBySection() {
  const partners = [
    {
      name: "Binance",
      logo: "/assets/images/logos/partners/binance.png"
    },
    {
      name: "Coinbase", 
      logo: "/assets/images/logos/partners/coinbase.png"
    },
    {
      name: "Polygon",
      logo: "/assets/images/logos/partners/polygon.png"
    },
    {
      name: "Arbitrum",
      logo: "/assets/images/logos/partners/arbitrum.png"
    },
    {
      name: "Optimism",
      logo: "/assets/images/logos/partners/optimism.png"
    },
    {
      name: "Chainlink",
      logo: "/assets/images/logos/partners/chainlink.png"
    },
    {
      name: "Avalanche",
      logo: "/assets/images/logos/partners/avalanche.png"
    },
    {
      name: "The Graph",
      logo: "/assets/images/logos/partners/thegraph.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="trusted-by">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h3 className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">
            TRUSTED BY THE BEST
          </h3>
        </AnimatedElement>
        
        <AnimatedElement delay={300}>
          <div className="marquee">
            <div className="marquee-content">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="logo-item">
                  <ImageWithFallback
                    alt={`${partner.name} logo`}
                    src={partner.logo}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
