import { HeaderStyle, StyleLink, Ul } from "./style";
import logo from "../../assets/images/logo.png";


export default function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logomarca" />
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