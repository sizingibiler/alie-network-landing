import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedElement } from './AnimatedElement';

export function TeamSection() {
  const teamMembers = [
    {
      name: "Hamza Aktan",
      role: "Co-Founder & CEO",
      image: "/assets/images/team/hamza-aktan.jpg",
      bio: "Leading Web3 innovation with 8+ years in blockchain analytics"
    },
    {
      name: "Berkay Kaya", 
      role: "Co-Founder & CTO",
      image: "/assets/images/team/berkay-kaya.jpg",
      bio: "Engineering scalable solutions for next-gen data intelligence"
    },
    {
      name: "Ziya Eyüboğlu",
      role: "Co-Founder & COO", 
      image: "/assets/images/team/ziya-eyuboglu.jpg",
      bio: "Orchestrating operations with strategic market expertise"
    }
  ];

  return (
    <section className="section-container bg-black text-gray-200" id="team">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-5xl font-extrabold mb-4">Our Team</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Meet the visionaries behind Alie Network's revolutionary Web3 intelligence platform
          </p>
        </AnimatedElement>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {teamMembers.map((member, index) => (
            <AnimatedElement 
              key={index} 
              delay={300 + (index * 200)} 
              className="flex flex-col items-center group max-w-xs"
            >
              <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-all duration-500 ease-out mb-6 shadow-lg group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                <ImageWithFallback
                  alt={member.name}
                  src={member.image}
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border-3 border-black"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">{member.name}</h3>
              <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{member.bio}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}