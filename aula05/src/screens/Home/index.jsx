import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navegarContato() {
    navigate("/sobre");
  }

  return (
    <div>
      <h1>Página principal - Home</h1>
      <button onClick={navegarContato}>Ir para Sobre</button>
      
    </div>
  );
};

export default Home;
