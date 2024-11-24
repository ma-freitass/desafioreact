import {Botao, Subtiulo, Section, Div, DivisaoImage, Titulo} from "./style";

export default function Novidades() 
{
  return(
  <Section>
    <Div>
    <Subtiulo>PREPARAÇÃO</Subtiulo>
    <Titulo>Níveis de torra</Titulo>
    <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
    <Botao>SAIBA MAIS</Botao>
    </Div>
    <DivisaoImage>
    <img src="https://github.com/ma-freitass/desafioreact/blob/main/src/assets/images/Novidades.png?raw=true" alt="Imagem novidades" />
    </DivisaoImage>
  </Section>
  )
}