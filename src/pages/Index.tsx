import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { toast } from "@/hooks/use-toast";

// Import product images
import lawsOfPowerImage from "@/assets/48-laws-power.jpg";
import dietManualImage from "@/assets/diet-manual.jpg";
import socialMediaImage from "@/assets/social-media-money.jpg";
import hundredKImage from "@/assets/100k-manual.jpg";
import arteConversacaoImage from "@/assets/arte-conversacao.jpg";
import inteligenciaEmocionalImage from "@/assets/inteligencia-emocional.jpg";
import networkingEstrategicoImage from "@/assets/networking-estrategico.jpg";
import liderancaPessoalImage from "@/assets/lideranca-pessoal.jpg";
import psicologiaPersuasaoImage from "@/assets/psicologia-persuasao.jpg";

const products = [
  {
    id: "48-laws",
    title: "Manual das 48 Leis do Poder",
    originalPrice: "500.00MT",
    salePrice: "250.00MT",
    image: lawsOfPowerImage,
  },
  {
    id: "diet",
    title: "Manual de Emagrecimento Completo",
    originalPrice: "700.00MT", 
    salePrice: "300.00MT",
    image: dietManualImage,
  },
  {
    id: "social-media",
    title: "Monetização em Redes Sociais",
    originalPrice: "300.00MT",
    salePrice: "150.00MT", 
    image: socialMediaImage,
  },
  {
    id: "100k",
    title: "Primeiros 100 Mil - Guia Definitivo",
    originalPrice: "550.00MT",
    salePrice: "275.00MT",
    image: hundredKImage,
  },
  {
    id: "arte-conversacao",
    title: "Arte da Conversação e Carisma",
    originalPrice: "450.00MT",
    salePrice: "180.00MT",
    image: arteConversacaoImage,
  },
  {
    id: "inteligencia-emocional",
    title: "Inteligência Emocional Prática",
    originalPrice: "520.00MT",
    salePrice: "220.00MT",
    image: inteligenciaEmocionalImage,
  },
  {
    id: "networking-estrategico",
    title: "Networking Estratégico de Alto Nível",
    originalPrice: "480.00MT",
    salePrice: "190.00MT",
    image: networkingEstrategicoImage,
  },
  {
    id: "lideranca-pessoal",
    title: "Liderança Pessoal e Influência",
    originalPrice: "560.00MT",
    salePrice: "240.00MT",
    image: liderancaPessoalImage,
  },
  {
    id: "psicologia-persuasao",
    title: "Psicologia da Persuasão Avançada",
    originalPrice: "600.00MT",
    salePrice: "260.00MT",
    image: psicologiaPersuasaoImage,
  },
];

const Index = () => {
  const generateOrderId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const handlePurchase = (product: typeof products[0]) => {
    const greeting = getGreeting();
    const orderId = generateOrderId();
    const message = `Olá ${greeting}, gostaria de adquirir o Ebook "${product.title}". 

ID: ${orderId}
Valor do produto: ${product.salePrice}

Ainda está disponível?`;
    
    const whatsappUrl = `https://wa.me/258871009140?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp para finalizar a compra.",
    });
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-hover rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="text-lg font-semibold text-foreground">EbookStore</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Cart />
            </div>
          </div>
        </div>
      </header>
      
      <main className="py-8 bg-background">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              E-books Transformadores
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolva habilidades sociais, liderança e crescimento pessoal com nossos manuais exclusivos
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bounce-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard
                  id={product.id}
                  title={product.title}
                  originalPrice={product.originalPrice}
                  salePrice={product.salePrice}
                  image={product.image}
                  onPurchase={() => handlePurchase(product)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
