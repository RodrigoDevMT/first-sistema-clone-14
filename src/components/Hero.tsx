import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Transformando Ideias em Soluções Digitais
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up">
              Desenvolvimento de sistemas personalizados, aplicativos web e mobile para impulsionar seu negócio ao próximo nível.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 animate-fade-up"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Images Container */}
          <div className="bg-black/30 p-6 rounded-xl backdrop-blur-sm animate-fade-up">
            <div className="flex gap-4">
              <img
                src="/lovable-uploads/3cd42689-d953-409e-be7c-a086e97c130a.png"
                alt="Terminal First Tickets 1"
                className="w-48 h-auto rounded-lg"
              />
              <img
                src="/lovable-uploads/a3f58c81-bfde-49f0-ae94-43f5762c2acb.png"
                alt="Terminal First Tickets 2"
                className="w-48 h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;