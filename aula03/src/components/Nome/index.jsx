import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";

const Nome = () => {
  const [novoNome, setNovoNome] = useState("");
  const { nome, setNome } = useContext(UserContext);

  return (
    <div>
      <h1>Bem vindo:{nome}</h1>

      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite o novo nome"
      />
      <button onClick={() => setNome(novoNome)}>Alterar Nome</button>
    </div>
  );
};

export default Nome;
