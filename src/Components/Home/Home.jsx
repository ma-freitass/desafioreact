import {MainStyle, Copo, Section, Elipse, Titulo, Subtitulo, Span, Texto, Botao, Div} from "./style";
import { useState, useEffect } from "react";


export default function Home() 
{
  const estadoInicialImagens = [
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/laranja4.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/vermelho2.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amarelo2.png?raw=true",
  ];

  const [imagens, setImagens] = useState(estadoInicialImagens);

  const imagensAlternativas = [
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/laranjaclique.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/vermelhoclick.png?raw=true",
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amareloclique.png?raw=true"
    
  ];
  const estadoInicialCores = {
    copo: "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amarelo2x%201.png?raw=true", 
    elipse: "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Ellipse1.png?raw=true", 
  };

  const [cores, setCores] = useState(estadoInicialCores);


  const coposCores = [
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/laranja2x%201.png?raw=true", 
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/vermelho2x%201.png?raw=true", 
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/amarelo2x%201.png?raw=true", 
  ];
  const elipsesCores = [
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Ellipse1.png?raw=true", 
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Ellipse3.png?raw=true", 
    "https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Ellipse2.png?raw=true", 
  ];
  const tempoDeRestauracao = 1000; 

  const [clicado, setClicado] = useState([false, false, false]);

 
  const trocarImagem = (indice) => {

    if (clicado[indice]) return;
    const novoClicado = [...clicado];
    novoClicado[indice] = true;
    setClicado(novoClicado);
    setImagens((prevImagens) =>
      prevImagens.map((imagem, i) =>
        i === indice ? imagensAlternativas[i] : imagem
      )
    );

    setCores( {
      copo: coposCores[indice],
        elipse: elipsesCores[indice],
      });
    
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagens([estadoInicialImagens[0], estadoInicialImagens[1], estadoInicialImagens[2]]);
    }, tempoDeRestauracao);

    return () => clearTimeout(timer); 
  }, []); 

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
          onClick={() => trocarImagem(index)}
        />
      ))}
      </Div>
    </section>
    <Section>
    <Copo src={cores.copo} alt="Copo de café" />
    <Elipse src={cores.elipse} alt="Elipse de fundo" />
    </Section>
  </MainStyle>
  )
}