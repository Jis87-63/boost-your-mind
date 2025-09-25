import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">EbookStore</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/loja">
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  Produtos
                </Button>
              </Link>
              <Link to="/loja">
                <Button size="sm" className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary">
                  Explorar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Title */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Transforme Sua{' '}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Vida
              </span>
              {' '}Digital
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubra os e-books mais poderosos para desenvolvimento pessoal, 
              sucesso financeiro e crescimento profissional. Conhecimento que transforma.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/loja">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Explorar E-books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>Conteúdo Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Entrega Instantânea</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-500" />
                <span>+1000 Clientes</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-card-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Conteúdo Exclusivo</h3>
              <p className="text-sm text-muted-foreground">
                E-books únicos e estratégicos para seu crescimento pessoal e profissional
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-card-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Acesso Imediato</h3>
              <p className="text-sm text-muted-foreground">
                Receba seus e-books em até 1 minuto após a confirmação do pagamento
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-card-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Garantia Total</h3>
              <p className="text-sm text-muted-foreground">
                Reembolso de 100% em até 24 horas se não ficar satisfeito
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto px-6">
          <p>© 2024 EbookStore. Transformando vidas através do conhecimento.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;