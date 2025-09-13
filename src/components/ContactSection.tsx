export function ContactSection() {
  return (
    <section className="section-container text-center" id="contact">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/videos/2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <h2 className="text-5xl font-extrabold mb-4">Ready to Grow?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Schedule a call to discuss how our data-driven strategies can elevate your project to the next level.
        </p>
        <a 
          className="inline-block px-10 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300" 
          href="#"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
