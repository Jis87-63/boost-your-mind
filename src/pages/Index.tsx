import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { toast } from "@/hooks/use-toast";

// Import product images
import lawsOfPowerImage from "@/assets/48-laws-power.jpg";
import dietManualImage from "@/assets/diet-manual.jpg";
import socialMediaImage from "@/assets/social-media-money.jpg";
import hundredKImage from "@/assets/100k-manual.jpg";

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
    title: "Manual de Emagrecimento",
    originalPrice: "700.00MT", 
    salePrice: "300.00MT",
    image: dietManualImage,
  },
  {
    id: "social-media",
    title: "Como Ganhar Dinheiro com Redes Sociais em 1 Semana",
    originalPrice: "300.00MT",
    salePrice: "150.00MT", 
    image: socialMediaImage,
  },
  {
    id: "100k",
    title: "Manual de Como Fazer os Primeiros 100Mil",
    originalPrice: "550.00MT",
    salePrice: "275.00MT",
    image: hundredKImage,
  },
  {
    id: "crypto",
    title: "Manual de Investimento em Criptomoedas",
    originalPrice: "600.00MT",
    salePrice: "200.00MT",
    image: lawsOfPowerImage, // Temporary image
  },
  {
    id: "forex",
    title: "Guia Completo de Trading Forex",
    originalPrice: "800.00MT",
    salePrice: "350.00MT",
    image: dietManualImage, // Temporary image
  },
  {
    id: "dropshipping",
    title: "Manual de Dropshipping do Zero ao Lucro",
    originalPrice: "450.00MT",
    salePrice: "180.00MT",
    image: socialMediaImage, // Temporary image
  },
  {
    id: "affiliate",
    title: "Marketing de Afiliados - Estratégias Avançadas",
    originalPrice: "400.00MT",
    salePrice: "160.00MT",
    image: hundredKImage, // Temporary image
  },
  {
    id: "instagram",
    title: "Instagram para Negócios - Monetização Total",
    originalPrice: "350.00MT",
    salePrice: "140.00MT",
    image: lawsOfPowerImage, // Temporary image
  },
  {
    id: "youtube",
    title: "YouTube Creator - Do Zero aos Primeiros Mil Euros",
    originalPrice: "500.00MT",
    salePrice: "220.00MT",
    image: dietManualImage, // Temporary image
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
      <Hero />
      
      {/* Floating Cart */}
      <div className="fixed top-4 right-4 z-50">
        <Cart />
      </div>
      
      <main className="py-8 bg-background-secondary">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              E-books Exclusivos
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Transforme sua vida com nossos manuais
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
