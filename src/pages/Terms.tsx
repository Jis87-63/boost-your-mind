import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto container-padding max-w-4xl">
        <div className="flex justify-between items-start mb-8">
          <div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à Loja
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Termos e Condições
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
          
          <ThemeToggle />
        </div>

        <Card className="bg-card border-card-border shadow-card p-8">
          <div className="space-y-8 prose prose-gray max-w-none">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar nosso site para compra de e-books, você concorda em estar 
                legalmente vinculado a estes termos e condições. Se você não concorda com 
                qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Produtos e Serviços</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Oferecemos e-books digitais sobre diversos temas. Todos os produtos são:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Entregues digitalmente em formato PDF</li>
                <li>Enviados em até 1 minuto após confirmação do pagamento</li>
                <li>Protegidos por direitos autorais</li>
                <li>Destinados apenas ao uso pessoal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Pagamento e Preços</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os preços são exibidos em Meticais (MT) e podem sofrer alterações sem aviso prévio. 
                O pagamento é processado através do WhatsApp e confirmado manualmente. 
                Após a confirmação, o produto será enviado automaticamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Entrega</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os e-books são entregues digitalmente via email ou WhatsApp em até 1 minuto 
                após a confirmação do pagamento. É responsabilidade do cliente fornecer 
                informações de contato corretas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Política de Reembolso</h2>
              <p className="text-muted-foreground leading-relaxed">
                Oferecemos reembolso total em até 24 horas após a compra, caso o cliente 
                não esteja satisfeito com o produto. Após este período, não será possível 
                solicitar reembolso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo dos e-books é protegido por direitos autorais. É proibido 
                reproduzir, distribuir, modificar ou revender o conteúdo sem autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não nos responsabilizamos por danos indiretos ou consequenciais decorrentes 
                do uso de nossos produtos. Nossa responsabilidade está limitada ao valor pago pelo produto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>📧 Email: scorp742@gmail.com</li>
                <li>💬 Telegram: @EllonMuskDev</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terms;