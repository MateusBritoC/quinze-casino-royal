import { Button } from "@/components/ui/button";
import heroImage from "@/assets/casino-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="casino-card p-8 md:p-12 border-2 border-secondary/30">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Hayde Rebeca
          </h1>
          <h2 className="text-2xl md:text-3xl font-elegant mb-2 gold-accent">
            15 Anos
          </h2>
          <h3 className="text-3xl md:text-4xl font-elegant mb-4 gold-accent">
            Las Vegas
          </h3>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Uma noite de luxo e diversão para celebrar os 15 anos da Hayde
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="casino-button text-lg px-8 py-4"
              onClick={() => scrollToSection('confirmar')}
            >
              Confirmar Presença
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4"
              onClick={() => scrollToSection('presentes')}
            >
              Escolher Presente
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4"
              onClick={() => window.open("https://www.google.com/maps/place/Dulce´s+Festas+Buffet+e+Decorações/@-3.1178252,-59.9951135,15z/data=!3m1!4b1!4m6!3m5!1s0x926c052190000001:0xd07a91b86a3a08dd!8m2!3d-3.1178467!4d-59.9848352!16s%2Fg%2F1tt8dbdt?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D", "_blank")}
            >
              Localização
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-6xl animate-pulse opacity-30">♠</div>
      <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-30 animation-delay-1000">♥</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-pulse opacity-30 animation-delay-2000">♦</div>
      <div className="absolute bottom-20 right-10 text-5xl animate-pulse opacity-30 animation-delay-500">♣</div>
    </section>
  );
};

export default Hero;