import React, { useEffect, useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("Ana");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (contador != 0) {
      alert("useEffect executado!");
    }
  }, [contador]);

  useEffect(() => {
    fetch("https://api.github.com/users/roni-inf")
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch(() => console.log("Problemas na requisição"));
  }, []);

  return (
    <div>
      <h1>Contador:{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setNome("Rodrigo")}>Alterar Nome</button>
      <h2>Dados do usuário do Github</h2>
      <p>Nome:{user.login}</p>
      <p>Email:{user.email}</p>
      <img src={user.avatar_url} alt="Imagem" />
    </div>
  );
};

export default App;
