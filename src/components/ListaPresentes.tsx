import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Gift, Check, Heart, Sparkles, Crown, Gem } from "lucide-react";

interface Presente {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  preco: string;
  escolhido: boolean;
  icon: React.ReactNode;
}

const ListaPresentes = () => {
  const [presentes, setPresentes] = useState<Presente[]>([
    {
      id: 1,
      nome: "Joia Elegante",
      descricao: "Colar ou brincos dourados para a aniversariante",
      categoria: "Acessórios",
      preco: "R$ 150 - R$ 300",
      escolhido: false,
      icon: <Gem className="w-6 h-6 text-secondary" />
    },
    {
      id: 2,
      nome: "Perfume Importado",
      descricao: "Fragrância sofisticada e marcante",
      categoria: "Beleza",
      preco: "R$ 200 - R$ 400",
      escolhido: false,
      icon: <Sparkles className="w-6 h-6 text-secondary" />
    },
    {
      id: 3,
      nome: "Bolsa de Grife",
      descricao: "Bolsa elegante para ocasiões especiais",
      categoria: "Acessórios",
      preco: "R$ 300 - R$ 600",
      escolhido: false,
      icon: <Crown className="w-6 h-6 text-secondary" />
    },
    {
      id: 4,
      nome: "Kit Maquiagem Premium",
      descricao: "Set completo de maquiagem profissional",
      categoria: "Beleza",
      preco: "R$ 250 - R$ 500",
      escolhido: false,
      icon: <Heart className="w-6 h-6 text-secondary" />
    },
    {
      id: 5,
      nome: "Experiência Spa",
      descricao: "Day spa com massagem e tratamentos",
      categoria: "Experiência",
      preco: "R$ 200 - R$ 400",
      escolhido: false,
      icon: <Sparkles className="w-6 h-6 text-secondary" />
    },
    {
      id: 6,
      nome: "Smartphone/Acessórios",
      descricao: "Celular novo ou acessórios tecnológicos",
      categoria: "Tecnologia",
      preco: "R$ 400 - R$ 1000",
      escolhido: false,
      icon: <Gift className="w-6 h-6 text-secondary" />
    },
    {
      id: 7,
      nome: "Roupas Fashion",
      descricao: "Peças de vestuário da moda jovem",
      categoria: "Moda",
      preco: "R$ 100 - R$ 300",
      escolhido: false,
      icon: <Crown className="w-6 h-6 text-secondary" />
    },
    {
      id: 8,
      nome: "Livros/Cursos",
      descricao: "Material educativo ou cursos online",
      categoria: "Educação",
      preco: "R$ 50 - R$ 200",
      escolhido: false,
      icon: <Heart className="w-6 h-6 text-secondary" />
    }
  ]);

  const handleEscolherPresente = (id: number) => {
    setPresentes(prev => 
      prev.map(presente => 
        presente.id === id 
          ? { ...presente, escolhido: true }
          : presente
      )
    );
    
    const presente = presentes.find(p => p.id === id);
    toast({
      title: "Presente escolhido! 🎁",
      description: `Obrigada por escolher: ${presente?.nome}. A aniversariante ficará muito feliz!`,
    });
  };

  const categorias = [...new Set(presentes.map(p => p.categoria))];

  return (
    <section id="presentes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-accent">Lista de Presentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha um presente especial para tornar esta celebração ainda mais memorável. 
            Cada presente escolhido será uma surpresa maravilhosa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentes.map((presente) => (
            <Card 
              key={presente.id} 
              className={`casino-card border-secondary/20 transition-casino hover:shadow-gold ${
                presente.escolhido ? 'border-secondary border-2' : ''
              }`}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-casino rounded-full flex items-center justify-center casino-glow">
                    {presente.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold gold-accent">
                  {presente.nome}
                </CardTitle>
                <CardDescription className="text-base">
                  {presente.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="border-secondary text-secondary">
                    {presente.categoria}
                  </Badge>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {presente.preco}
                  </span>
                </div>
                
                {presente.escolhido ? (
                  <Button 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                    disabled
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Presente Escolhido
                  </Button>
                ) : (
                  <Button 
                    className="w-full casino-button" 
                    onClick={() => handleEscolherPresente(presente.id)}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Escolher Este Presente
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="casino-card border-secondary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Gift className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 gold-accent">Dica Especial</h3>
              <p className="text-muted-foreground">
                Não encontrou algo especial na lista? Você pode contribuir com um presente surpresa 
                ou um mimo especial que você sabe que ela vai adorar! O importante é celebrarmos juntos 
                este momento único.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ListaPresentes;