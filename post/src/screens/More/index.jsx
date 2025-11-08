import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import * as styles from "./More.module.css";

const More = () => {
  const [readMore, setReadMore] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        setReadMore(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <header>
              <h2>{readMore.titulo}</h2>
            </header>
            <div className={styles.line}></div>
            <p>{readMore.conteudo}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default More;
