import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import fichahayde from "../assets/ficha-hayde.png"; 

import centauro from "../assets/centauro.png";
import comepi from "../assets/comepi.png"
import renner from "../assets/renner.png";
import riachuelo from "../assets/riachuelo.png";
import farm from "../assets/farm.png";
import live from "../assets/live.png";
import loccitane from "../assets/loccitane.png";
import lupo from "../assets/lupo.png";
import makeforyou from "../assets/makeforyou.png";
import morana from "../assets/morana.png";
import mudi from "../assets/mudi.png";
import oboticario from "../assets/oboticario.png";
import pandora from "../assets/pandora.png";
import topperfume from "../assets/topperfume.png";
import youcom from "../assets/youcom.png";

interface Presente {
  id: number;
  nome: React.ReactNode;
  icon: React.ReactNode;
}

const presentes: Presente[] = [
  {
    id: 1,
    nome: "TOP Perfumes",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-28 h-28 object-cover block"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
          margin: 0,
          padding: 0,
        }}
      />
    )
  },
  {
    id: 2,
    nome: "Riachuelo",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-28 h-28 object-cover block"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
          margin: 0,
          padding: 0,
        }}
      />
    )
  },
  {
    id: 3,
    nome: "Renner",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-24 h-24 object-contain"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
        }}
      />
    )
  },
  {
    id: 4,
    nome: "Morana",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-24 h-24 object-contain"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
        }}
      />
    )
  },
  {
    id: 5,
    nome: "Centauro",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-24 h-24 object-contain"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
        }}
      />
    )
  },
  {
    id: 6,
    nome: "Lupo",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-24 h-24 object-contain"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
        }}
      />
    )
  },
  {
    id: 7,
    nome: "Oboticário",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-24 h-24 object-contain"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
        }}
      />
    )
  },
  {
    id: 8,
    nome: "YouCom",
    icon: (
      <img
        src={fichahayde}
        alt="Ficha Hayde"
        className="w-24 h-24 object-contain"
        style={{
          boxShadow: "0 0 32px 8px #FFD700",
          borderRadius: "50%",
          background: "none",
        }}
      />
    )
  },
  {
  id: 9,
  nome: (
    <div className="text-center">
      <div className="text-xl font-bold gold-accent">Pix</div>
      <div className="text-sm text-muted-foreground mt-2 leading-tight">
        Chave: <strong>05847336233</strong><br />
        Banco: <strong>Nubank</strong><br />
        Nome: <strong>Hayde Rebeca da Costa Tomé</strong>
      </div>
    </div>
  ),
  icon: (
    <img
      src={fichahayde}
      alt="Pix"
      className="w-24 h-24 object-contain"
      style={{
        boxShadow: "0 0 32px 8px #FFD700",
        borderRadius: "50%",
        background: "none",
      }}
      />
    )
  }
];

const ListaPresentes = () => {
  return (
    <section id="presentes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-accent">Lista de Presentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja algumas sugestões de presentes especiais para Hayde Rebeca!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentes.map((presente) => (
            <Card key={presente.id} className="casino-card border-secondary/20 text-center py-8">
              <CardHeader className="flex flex-col items-center">
                {presente.icon}
                <CardTitle className="text-xl font-bold gold-accent mt-4">
                  {presente.nome}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Observação de tamanhos */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-secondary/10 rounded-xl px-6 py-4">
          <span className="text-lg font-semibold gold-accent">Observação:</span>
          <span className="block text-base text-muted-foreground mt-2">
            Tamanho de Blusas: <span className="font-bold">M</span> &nbsp;|&nbsp;
            Calça: <span className="font-bold">38/40</span> &nbsp;|&nbsp;
            Calçados: <span className="font-bold">36/37</span> 
          </span>
        </div>
      </div>
  
    </section>
  );
};

export default ListaPresentes;