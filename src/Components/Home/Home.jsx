import { MainStyle, Copo, Section, Elipse, Titulo, Subtitulo, Span, Texto, Botao, Div,} from "./style";
import { useState } from "react";


import laranja1 from "../../assets/images/laranja1.png";
import vermelho2 from "../../assets/images/vermelho2.png";
import amarelo2 from "../../assets/images/amarelo2.png";

import laranjaclique from "../../assets/images/laranjaclique.png";
import vermelhoclick from "../../assets/images/vermelhoclick.png";
import amareloclique from "../../assets/images/amareloclique.png";

import laranja2x from "../../assets/images/laranja2x.png";
import vermelho2x from "../../assets/images/vermelho2x.png";
import amarelo2x from "../../assets/images/amarelo2x.png";

import Ellipse1 from "../../assets/images/Ellipse1.png";
import Ellipse3 from "../../assets/images/Ellipse3.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";

export default function Home() {
 
  const [corSelecionada, setCorSelecionada] = useState("laranja");

  const [estadoCoposPequenos, setEstadoCoposPequenos] = useState({
    laranja: "inicial",
    vermelho: "inicial",
    amarelo: "inicial",
  });


  const coposPequenos1 = {
    laranja: laranja1,
    vermelho: vermelho2,
    amarelo: amarelo2,
  };

  const coposPequenos = {
    laranja: laranjaclique,
    vermelho: vermelhoclick,
    amarelo: amareloclique,
  };

  const coposGrandes = {
    laranja: laranja2x,
    vermelho: vermelho2x,
    amarelo: amarelo2x,
  };

  const elipses = {
    laranja: Ellipse1,
    vermelho: Ellipse3,
    amarelo: Ellipse2,
  };

  const handleCopoPequenoClick = (cor) => {
    setCorSelecionada(cor); 

    
    setEstadoCoposPequenos((prevState) => ({
      ...prevState,
      [cor]: "clicado",
    }));

    
    setTimeout(() => {
      setEstadoCoposPequenos({
        laranja: "inicial",
        vermelho: "inicial",
        amarelo: "inicial",
      });
    }, 1000); 
  };

  return (
    <MainStyle>
      <section>
        <Titulo>Mais que Café</Titulo>
        <Subtitulo>
          Isso é <Span>Starbucks</Span>
        </Subtitulo>
        <Texto>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </Texto>
        <a href="https://www.starbucks.com.br/" target="_blank" rel="noopener noreferrer">
          <Botao>SAIBA MAIS</Botao>
        </a>
        <Div>
          {Object.keys(coposPequenos1).map((cor) => (
            <img
              key={cor}
              src={
                estadoCoposPequenos[cor] === "inicial"
                  ? coposPequenos1[cor]
                  : coposPequenos[cor]
              }
              alt={`Copo pequeno ${cor}`}
              onClick={() => handleCopoPequenoClick(cor)}
              style={{ cursor: "pointer", margin: "10px" }}
            />
          ))}
        </Div>
      </section>
      <Section>
        <Copo
          src={coposGrandes[corSelecionada]}
          alt={`Copo grande ${corSelecionada}`}
        />
        <Elipse
          src={elipses[corSelecionada]}
          alt={`Elipse ${corSelecionada}`}
        />
      </Section>
    </MainStyle>
  );
}
