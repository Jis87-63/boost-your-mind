import { ShoppingBag, Clock, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-primary-foreground py-20 animate-fade-in">
      <div className="container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforme Sua Vida com
            <span className="block text-yellow-300">E-books Profissionais</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Descubra os segredos do sucesso, saúde e prosperidade financeira 
            com nossos manuais exclusivos
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-3 animate-scale-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Entrega Instantânea</h3>
              <p className="text-primary-foreground/80 text-center">
                Receba seu e-book em até 1 minuto após o pagamento
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 animate-scale-in [animation-delay:0.2s]">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Garantia 24h</h3>
              <p className="text-primary-foreground/80 text-center">
                Reembolso total em até 24 horas se não ficar satisfeito
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 animate-scale-in [animation-delay:0.4s]">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Conteúdo Premium</h3>
              <p className="text-primary-foreground/80 text-center">
                Manuais desenvolvidos por especialistas reconhecidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;