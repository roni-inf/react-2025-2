import Aluno from "./components/Aluno";
import Botao from "./components/Botao";
import Curso from "./components/Curso";
import Lista from "./components/Lista";
import Usuario from "./components/Usuario";
import "./App.css";
import Caixa from "./components/Caixa";

const App = () => {
  const texto = {
    fontSize: "48px",
    color: "orange",
  };

  const curso = "React";
  return (
    <div>
      <Curso style={texto} nome={curso} />
      <Botao texto="Aula" />
      <Aluno nome="Roni" email="roni@gmail.com" idade="50" />
      <Lista />

      <h2 style={{ color: "#f00919", fontSize: "32px" }}>Lista de usuários</h2>
      <Usuario />

      <h2 className="frase">Teste de CSS</h2>
      <Caixa cor="blue"/>
    </div>
  );
};

export default App;
