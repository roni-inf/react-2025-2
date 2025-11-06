import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <header>
      <h2>Empresa ABC Ltda.</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/empresa"}>Empresa</Link>
      <Link to={"/noticias"}>Notícias</Link>
      <Link to={"/contato"}>Contato</Link>
      <Link to={"/sobre"}>Sobre</Link>
    </header>
  );
};
export default Header;
