import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
import Back from "../../assets/back.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to={"/"}>
          <img src={Back} alt="Voltar" style={{ width: "50px" }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
