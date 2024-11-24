import {Botao, Subtiulo, Section, Div, DivisaoImage, Titulo, Texto} from "./style";

export default function Novidades() 
{
  return(
  <Section>
    <Div>
    <Subtiulo>PREPARAÇÃO</Subtiulo>
    <Titulo>Níveis de torra</Titulo>
    <Texto>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</Texto>
    <a href="https://www.starbucks.com.br/" target="_blank">
    <Botao>SAIBA MAIS</Botao>
    </a>
    </Div>
    <DivisaoImage>
    <img src="https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Novidades.png?raw=true" alt="Imagem novidades" />
    </DivisaoImage>
  </Section>
  )
}