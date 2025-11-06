import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import * as styles from "./Feed.module.css";

const Feed = () => {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <header>
              <h2>Consumindo API</h2>
            </header>
            <div className={styles.line}></div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              ipsam explicabo consectetur sed modi doloremque maiores,
              laboriosam a in repellat provident? Ipsum veritatis distinctio
              quibusdam autem possimus tempora voluptates optio.
            </p>

            <div className={styles.btns}>
              <div className={styles.btnEdit}>
                <Link to={"/update"}>
                  <button>Editar</button>
                </Link>
              </div>

              <div className={styles.btnReadMore}>
                <Link to={"/more"}>
                  <button>Leia Mais</button>
                </Link>
              </div>

              <div className={styles.btnDelete}>
                <button>Apagar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
