import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  title: string;
  originalPrice: string;
  salePrice: string;
  image: string;
  onPurchase: () => void;
}

const ProductCard = ({ id, title, originalPrice, salePrice, image, onPurchase }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ id, title, salePrice, image });
    toast({
      title: "Adicionado ao carrinho!",
      description: `${title} foi adicionado ao seu carrinho.`,
    });
  };

  const handleBuyNow = () => {
    const priceValue = parseFloat(salePrice.replace('MT', '').replace(',', '.'));
    const paymentData = {
      items: [{ id, title, salePrice, image, quantity: 1 }],
      total: priceValue
    };
    navigate('/pagamento', { state: paymentData });
  };

  return (
    <Card className="group card-hover overflow-hidden bg-card border-card-border shadow-card bounce-in">
      <div className="aspect-[3/4] overflow-hidden bg-background-tertiary relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-3 space-y-2">
        <h3 className="font-semibold text-xs leading-tight line-clamp-2 text-card-foreground">
          {title}
        </h3>
        
        <div className="space-y-1">
          <p className="text-[10px] text-muted-foreground line-through">
            Antes: {originalPrice}
          </p>
          <p className="text-accent-success font-bold text-sm">
            {salePrice}
          </p>
        </div>
        
        <div className="flex gap-1">
          <Button 
            onClick={handleAddToCart}
            variant="outline"
            size="sm"
            className="flex-1 h-7 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingCart className="w-3 h-3 mr-1" />
            +
          </Button>
          <Button 
            onClick={handleBuyNow}
            size="sm"
            className="flex-[2] h-7 text-[10px] bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground pulse-glow"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Comprar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;