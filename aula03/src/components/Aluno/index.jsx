import { useContext } from "react";
import Nome from "../Nome";
import { UserContext } from "../../contexts/user";

const Aluno = () => {
  const { nome, total } = useContext(UserContext);
  return (
    <div>
      <h1>Componente de Aluno</h1>
      <h2>{nome}</h2>
      <h3>{total}</h3>
      <Nome />
    </div>
  );
};

export default Aluno;
