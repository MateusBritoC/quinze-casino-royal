import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Check, User, Plus, ArrowLeft } from "lucide-react";
import ListaPresentes from "./ListaPresentes"; 

const WHATSAPP_NUMBER = "+5592984122741";

const ConfirmacaoPresenca = () => {
  const [nomes, setNomes] = useState<string[]>([""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNomeChange = (index: number, value: string) => {
    setNomes((prev) => {
      const novos = [...prev];
      novos[index] = value;
      return novos;
    });
  };

  const adicionarCampo = () => {
    setNomes((prev) => [...prev, ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nomesValidos = nomes.filter((nome) => nome.trim() !== "");
    if (nomesValidos.length === 0) {
      toast({
        title: "Campo obrigatório",
        description: "Preencha pelo menos um nome.",
        variant: "destructive"
      });
      return;
    }

    const mensagem =
      `Confirmação de Presença!\n` +
      `Convidados:\n` +
      nomesValidos.map((nome, i) => `${i + 1}. ${nome}`).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    setIsSubmitted(true);
    toast({
      title: "Presença confirmada! 🎉",
      description: "Obrigada por confirmar sua presença. Nos vemos na festa!",
    });
  };

  const [showForm, setShowForm] = useState(true);

  if (isSubmitted && !showForm) {
    // Exibe a área de presentes após confirmação
    return <ListaPresentes />;
  }

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
                Obrigada por confirmar sua presença! A Hayde Rebeca ficará muito feliz em vê-los na festa.
              </p>
              <p className="text-muted-foreground">
                Prepare-se para uma noite inesquecível de casino royale! 🎰
              </p>
              <Button
                type="button"
                size="lg"
                className="mt-8 w-full casino-button text-xl py-6"
                onClick={() => setShowForm(false)}
              >
                Ir para a área de presentes
              </Button>
              <Button
                type="button"
                variant="outline"
                className="mt-4 w-full flex items-center justify-center gap-2"
                onClick={() => {
                  setIsSubmitted(false);
                  setShowForm(true);
                }}
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </Button>
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
            Informe o nome completo dos convidados que irão à festa.
          </p>
        </div>

        <Card className="casino-card border-secondary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center gold-accent">
              RSVP - Casino Royale
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Adicione todos os nomes dos convidados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {nomes.map((nome, idx) => (
                <div className="space-y-2" key={idx}>
                  <Label htmlFor={`nome-${idx}`} className="text-lg flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo {idx + 1}
                  </Label>
                  <Input
                    id={`nome-${idx}`}
                    name={`nome-${idx}`}
                    value={nome}
                    onChange={e => handleNomeChange(idx, e.target.value)}
                    placeholder="Nome completo"
                    className="text-lg p-4"
                    required={idx === 0}
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                className="w-full casino-button text-lg py-4 flex items-center justify-center gap-2"
                onClick={adicionarCampo}
              >
                <Plus className="w-5 h-5" />
                Adicionar outro convidado
              </Button>
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