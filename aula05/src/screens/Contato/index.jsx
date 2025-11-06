import { useParams } from "react-router-dom";

const Contato = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Página de Contato:{id}</h1>
    </div>
  );
};

export default Contato;
