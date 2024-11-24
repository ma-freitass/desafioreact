import {MainStyle, Copo, Section, Elipse, Titulo, Subtitulo, Span, Texto, Botao, Div} from "./style";
import { useState, useEffect } from "react";


export default function Home() 
{
  const estadoInicial = [
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/laranja4.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/vermelho2.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amarelo2.png?raw=true",
  ];

  const [imagens, setImagens] = useState(estadoInicial);

  // URLs alternativas para troca
  const imagensAlternativas = [
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/laranjaclique.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/vermelhoclick.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amareloclique.png?raw=true"
    
  ];
  const tempoDeRestauracao = 1000;
  // Função para trocar a imagem clicada
  const trocarImagem = (indice) => {
    setImagens((prevImagens) =>
      prevImagens.map((imagem, i) =>
        i === indice ? imagensAlternativas[i] : imagem
      )
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagens(estadoInicial);
    }, tempoDeRestauracao);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente ou antes de reiniciar
  }, [imagens]);

  return(
  <MainStyle>
    <section>
      <Titulo>Mais que Café</Titulo>
      <Subtitulo>Isso é <Span>Starbucks</Span></Subtitulo>
      <Texto>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</Texto>
      <a href="https://www.starbucks.com.br/" target="_blank">
    <Botao>SAIBA MAIS</Botao>
    </a>
      <Div>
      {imagens.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagem ${index + 1}`}
          onClick={() => trocarImagem(index)} // Chama a função ao clicar
          style={{ cursor: "pointer" }} // Adiciona um cursor de "mãozinha"
        />
      ))}
      </Div>
    </section>
    <Section>
      <Copo src="https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amarelo2x%201.png?raw=true" alt="" />
      <Elipse src="https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Ellipse1.png?raw=true" alt="" />
    </Section>
  </MainStyle>
  )
}