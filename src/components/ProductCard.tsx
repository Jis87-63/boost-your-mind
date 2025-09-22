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
    <Card className="group card-hover overflow-hidden bg-card border-card-border shadow-card animate-slide-up">
      <div className="aspect-[4/5] overflow-hidden bg-background-tertiary">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-card-foreground">
          {title}
        </h3>
        
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground line-through">
            Antes: {originalPrice}
          </p>
          <p className="text-accent-success font-bold text-base">
            Agora: {salePrice}
          </p>
        </div>
        
        <Button 
          onClick={onPurchase}
          className="w-full h-9 text-xs bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground shadow-button hover:shadow-lg transition-all duration-300"
        >
          <ExternalLink className="w-3 h-3 mr-1" />
          Comprar
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;