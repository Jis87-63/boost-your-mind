import { ShoppingBag, Clock, Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-16 shadow-hero animate-fade-in overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      
      {/* Theme toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      <div className="container mx-auto container-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Transforme Sua Vida com
            <span className="block text-yellow-200 bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              E-books Profissionais
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Descubra os segredos do sucesso, saúde e prosperidade financeira 
            com nossos manuais exclusivos
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center space-y-2 animate-scale-in">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-base">Entrega Instantânea</h3>
              <p className="text-primary-foreground/80 text-center text-sm">
                Receba em até 1 minuto
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 animate-scale-in [animation-delay:0.2s]">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-base">Garantia 24h</h3>
              <p className="text-primary-foreground/80 text-center text-sm">
                Reembolso garantido
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 animate-scale-in [animation-delay:0.4s]">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-base">Conteúdo Premium</h3>
              <p className="text-primary-foreground/80 text-center text-sm">
                Por especialistas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;