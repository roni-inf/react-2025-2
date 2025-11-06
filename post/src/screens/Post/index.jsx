import Header from "../../components/Header";
import * as styles from "./Post.module.css";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Digite o título")
    .max(40, "tamanho máx. 40 carac."),
  descricao: yup
    .string()
    .required("Digite a descrição")
    .max(60, "tamanho máx. 60 carac."),
  conteudo: yup
    .string()
    .required("Digite o conteúdo")
    .max(255, "tamanho máx. 255 carac."),
});

const Post = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => {
    axios
      .post("https://690a7b021a446bb9cc22a8ad.mockapi.io/posts", data)
      .then(() => {
        console.log("deu tudo certo");
        navigate("/")
      })
      .catch("Erro na requisição");
  };

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Criar Postagem</h1>
          <hr />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  {...register("titulo")}
                />
                <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  {...register("descricao")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="conteudo">Conteúdo</label>
                <textarea
                  id="conteudo"
                  name="conteudo"
                  rows="10"
                  cols="30"
                  {...register("conteudo")}
                />
                <p className={styles.errorMessage}>
                  {errors.conteudo?.message}
                </p>
              </div>

              <div className={styles.btnPost}>
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
