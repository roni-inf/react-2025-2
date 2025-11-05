import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [createPost, setCreatePost] = useState(null);

  const handleSubmit = (e) => {
    console.log(e);
    
    e.preventDefault();

    const newPost = {
      nome,
      email,
    };

    axios
      .post("https://690a7b021a446bb9cc22a8ad.mockapi.io/clientes", newPost)
      .then((response) => setCreatePost(response.data))
      .catch(() => console.log("Problemas na requisição"));
    setEnviado(true);
  };

  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>
      {enviado ? (
        <div className="alert alert-success">Cliente enviado com sucesso</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                className="my-3 form-control"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="my-3 form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Cadastrar{" "}
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
