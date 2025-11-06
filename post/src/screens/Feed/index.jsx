import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import * as styles from "./Feed.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://690a7b021a446bb9cc22a8ad.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Erro na requisição");
      });
  }, []);

  return (
    <div>
      <HeaderMain />
      <main>
        <div className={styles.cards}>
          {posts.map((post, key) => (
            <div className={styles.card} key={key}>
              <header>
                <h2>{post.titulo}</h2>
              </header>
              <div className={styles.line}></div>

              <p>{post.descricao}
              </p>

              <div className={styles.btns}>
                <div className={styles.btnEdit}>
                  <Link to={`/update/${post.id}`}>
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
          ))}
        </div>
      </main>
    </div>
  );
};

export default Feed;
