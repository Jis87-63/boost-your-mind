import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PaymentState {
  items: Array<{
    id: string;
    title: string;
    salePrice: string;
    image: string;
    quantity: number;
  }>;
  total: number;
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData = location.state as PaymentState;
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  if (!paymentData) {
    navigate('/');
    return null;
  }

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(84|85)\d{7}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      setPhoneNumber(value);
      if (value.length === 9 && !validatePhoneNumber(value)) {
        setPhoneError('Número deve começar com 84 ou 85 e ter 9 dígitos');
      } else {
        setPhoneError('');
      }
    }
  };

  const generateRandomId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handlePayment = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Número deve começar com 84 ou 85 e ter 9 dígitos');
      return;
    }

    setIsProcessing(true);

    try {
      const itemTitles = paymentData.items.map(item => item.title).join(', ');
      
      const response = await fetch('https://gibrapay.online/v1/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': 'b3b33cba8a903626a015d592754f1dcec756e9fbb12d411516f4a79b04aba8923ebb6396da29e61c899154ab005aaf056961b819c263e1ec5d88c60b9cae6aba'
        },
        body: JSON.stringify({
          wallet_id: '50c282d1-843f-4b9c-a287-2140e9e8d94b',
          amount: paymentData.total,
          number_phone: phoneNumber,
          alert_sms: {
            api_key: 'b3b33cba8a903626a015d592754f1dcec756e9fbb12d411516f4a79b04aba8923ebb6396da29e61c899154ab005aaf056961b819c263e1ec5d88c60b9cae6aba',
            sender_id: 'Fllops',
            phone: '852154364',
            phone_customer: phoneNumber,
            message: `Pagamento de ${paymentData.total}MZN confirmado. Produto: ${itemTitles}.`,
            customer_message: 'Obrigado! Seu eBook foi processado. Em breve entraremos em contacto.'
          }
        })
      });

      const result = await response.json();

      if (result.status === 'success') {
        toast({
          title: "✅ A sua compra foi processada com sucesso",
          description: `${itemTitles}`,
          duration: 7000,
        });

        // Redirect to WhatsApp after 7 seconds
        setTimeout(() => {
          const randomId = generateRandomId();
          const titles = paymentData.items.length > 1 ? 'vários eBooks' : paymentData.items[0].title;
          const whatsappUrl = `https://wa.me/258871009140?text=${encodeURIComponent(`fiz o pagamento do Ebook ${titles} ID${randomId}`)}`;
          window.open(whatsappUrl, '_blank');
          navigate('/');
        }, 7000);
      } else {
        throw new Error(result.message || 'Erro no pagamento');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Erro no pagamento",
        description: "Não foi possível processar o pagamento. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="bg-card border-card-border">
          <CardHeader>
            <CardTitle className="text-center text-card-foreground">Finalizar Pagamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Product Summary */}
            <div className="space-y-4">
              <h3 className="font-semibold text-card-foreground">Resumo do Pedido</h3>
              {paymentData.items.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-background-secondary border border-card-border">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-card-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">Quantidade: {item.quantity}</p>
                    <p className="text-sm font-bold text-accent-success">{item.salePrice}</p>
                  </div>
                </div>
              ))}
              
              <div className="border-t border-card-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-card-foreground">Total:</span>
                  <span className="text-lg font-bold text-accent-success">
                    {paymentData.total.toFixed(2)} MZN
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="space-y-4">
              <h3 className="font-semibold text-card-foreground">Pagamento via M-Pesa</h3>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-card-foreground">Número M-Pesa</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="84xxxxxxx ou 85xxxxxxx"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`${phoneError ? 'border-red-500' : ''}`}
                  disabled={isProcessing}
                />
                {phoneError && (
                  <p className="text-sm text-red-500">{phoneError}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Digite seu número M-Pesa (9 dígitos, começando com 84 ou 85)
                </p>
              </div>

              <Button
                onClick={handlePayment}
                disabled={!phoneNumber || phoneError !== '' || isProcessing}
                className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processando...
                  </>
                ) : (
                  'Pagar com M-Pesa'
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Você receberá uma solicitação de pagamento no seu telemóvel. 
                Confirme com o seu PIN M-Pesa para concluir a compra.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;