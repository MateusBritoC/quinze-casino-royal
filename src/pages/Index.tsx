import Hero from "@/components/Hero";
import ConfirmacaoPresenca from "@/components/ConfirmacaoPresenca";
import ListaPresentes from "@/components/ListaPresentes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ConfirmacaoPresenca />
      <ListaPresentes />
    </div>
  );
};

export default Index;
