import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-primary">E-books Store</h3>
            <p className="text-muted-foreground">
              Transformando vidas através do conhecimento digital.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Suporte</h4>
            <div className="space-y-2">
              <a 
                href="mailto:scorp742@gmail.com" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>scorp742@gmail.com</span>
              </a>
              <a 
                href="https://t.me/EllonMuskDev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>@EllonMuskDev</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Políticas</h4>
            <div className="space-y-2">
              <a href="/termos" className="block text-muted-foreground hover:text-primary transition-colors">
                Termos e Condições
              </a>
              <a href="/reembolso" className="block text-muted-foreground hover:text-primary transition-colors">
                Política de Reembolso
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 E-books Store. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;