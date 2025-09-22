import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
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
];

const Index = () => {
  const handlePurchase = (productTitle: string) => {
    const message = `Olá, gostaria de fazer a compra do e-book "${productTitle}". Ainda está disponível?`;
    const whatsappUrl = `https://wa.me/258865157729?text=${encodeURIComponent(message)}`;
    
    // Show success toast
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp para finalizar a compra.",
    });
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="py-16 bg-background-secondary">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Nossos E-books Exclusivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o manual perfeito para transformar sua vida
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  title={product.title}
                  originalPrice={product.originalPrice}
                  salePrice={product.salePrice}
                  image={product.image}
                  onPurchase={() => handlePurchase(product.title)}
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
