import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  originalPrice: string;
  salePrice: string;
  image: string;
  onPurchase: () => void;
}

const ProductCard = ({ title, originalPrice, salePrice, image, onPurchase }: ProductCardProps) => {
  return (
    <Card className="card-gradient card-hover overflow-hidden animate-fade-in">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover-lift"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2">
          <p className="price-original">Antes: {originalPrice}</p>
          <p className="price-sale">Agora: {salePrice}</p>
        </div>
        
        <Button 
          onClick={onPurchase}
          className="w-full btn-primary text-primary-foreground hover:text-primary-foreground"
          size="lg"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Comprar Agora
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;