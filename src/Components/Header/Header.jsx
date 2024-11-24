import { HeaderStyle, StyleLink, Ul } from "./style";
import logo from "../../assets/images/logo.png";


export default function Header() {
  return (
    <HeaderStyle>
      <StyleLink to="/">
        <img src={logo} alt="Logomarca" />
      </StyleLink>
      <nav>
        <Ul>
          <li>
            <StyleLink to="/">Home</StyleLink>
          </li>
          <li>
            <StyleLink to="/novidades">Novidades</StyleLink>
          </li>
          <li>
            <StyleLink to="/sobre">Sobre</StyleLink>
          </li>
        </Ul>
      </nav>
    </HeaderStyle>
  )
}