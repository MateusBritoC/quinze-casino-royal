import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Check, User, Phone, MessageSquare } from "lucide-react";

const ConfirmacaoPresenca = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    acompanhantes: "",
    observacoes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Presença confirmada! 🎉",
      description: "Obrigada por confirmar sua presença. Nos vemos na festa!",
    });
  };

  if (isSubmitted) {
    return (
      <section id="confirmar" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="casino-card border-secondary/20">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-gradient-casino rounded-full flex items-center justify-center mx-auto mb-6 casino-glow">
                <Check className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4 gold-accent">Presença Confirmada!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Obrigada por confirmar sua presença, {formData.nome}! 
              </p>
              <p className="text-muted-foreground">
                Prepare-se para uma noite inesquecível de casino royale! 🎰
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="confirmar" className="py-20 px-4 bg-gradient-luxury">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-accent">Confirme sua Presença</h2>
          <p className="text-xl text-muted-foreground">
            Não perca esta noite especial! Confirme sua presença e venha celebrar comigo.
          </p>
        </div>

        <Card className="casino-card border-secondary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center gold-accent">
              RSVP - Casino Royale
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Por favor, preencha os dados abaixo para confirmar sua presença
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-lg flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="text-lg p-4"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-lg flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone *
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  className="text-lg p-4"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="acompanhantes" className="text-lg">
                  Número de Acompanhantes
                </Label>
                <Input
                  id="acompanhantes"
                  name="acompanhantes"
                  value={formData.acompanhantes}
                  onChange={handleInputChange}
                  placeholder="Quantas pessoas irão com você?"
                  className="text-lg p-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes" className="text-lg flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Observações
                </Label>
                <Textarea
                  id="observacoes"
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  placeholder="Alguma observação especial? (alergias, restrições, etc.)"
                  className="text-lg p-4 resize-none h-24"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full casino-button text-xl py-6"
              >
                Confirmar Presença 🎰
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConfirmacaoPresenca;