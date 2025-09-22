import { ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Refund = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto container-padding max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Loja
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Política de Reembolso
          </h1>
          <p className="text-muted-foreground">
            Sua satisfação é nossa prioridade
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="card-gradient p-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-accent-success mr-3" />
              <div>
                <h2 className="text-2xl font-semibold">Garantia de 24 Horas</h2>
                <p className="text-muted-foreground">Reembolso total garantido</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Oferecemos uma garantia incondicional de 24 horas em todos os nossos e-books. 
              Se por qualquer motivo você não estiver satisfeito com sua compra, 
              pode solicitar reembolso total dentro deste prazo.
            </p>

            <div className="bg-accent-success/10 border border-accent-success/20 rounded-lg p-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-success mr-2" />
                <span className="font-semibold text-accent-success">100% do valor pago será devolvido</span>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-gradient p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-accent-success mr-2" />
                <h3 className="text-xl font-semibold">Casos Elegíveis</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-success rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Insatisfação com o conteúdo
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-success rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Problemas técnicos na entrega
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-success rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Conteúdo não corresponde à descrição
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-success rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Qualquer motivo dentro de 24h
                </li>
              </ul>
            </Card>

            <Card className="card-gradient p-6">
              <div className="flex items-center mb-4">
                <XCircle className="w-6 h-6 text-accent-error mr-2" />
                <h3 className="text-xl font-semibold">Após 24 Horas</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-error rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Reembolso não disponível
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-error rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Suporte técnico disponível
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-error rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Atendimento para dúvidas
                </li>
              </ul>
            </Card>
          </div>

          <Card className="card-gradient p-8">
            <h2 className="text-2xl font-semibold mb-6">Como Solicitar Reembolso</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Entre em Contato</h3>
                <p className="text-sm text-muted-foreground">
                  Envie mensagem via WhatsApp ou email dentro de 24h
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Forneça Dados</h3>
                <p className="text-sm text-muted-foreground">
                  Informe dados da compra e motivo do reembolso
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Receba o Reembolso</h3>
                <p className="text-sm text-muted-foreground">
                  Processamos em até 2 horas úteis
                </p>
              </div>
            </div>
          </Card>

          <Card className="card-gradient p-6 bg-accent/50">
            <h3 className="text-xl font-semibold mb-4">Informações de Contato para Reembolso</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium mr-2">📱 WhatsApp:</span>
                <a href="https://wa.me/258865157729" className="text-primary hover:underline">
                  +258 86 515 7729
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">📧 Email:</span>
                <a href="mailto:scorp742@gmail.com" className="text-primary hover:underline">
                  scorp742@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">💬 Telegram:</span>
                <a href="https://t.me/EllonMuskDev" className="text-primary hover:underline">
                  @EllonMuskDev
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Refund;