import Logo from "./assets/react.svg";
import Filtro from "./components/Filtro";
import Maiusculo from "./components/Maiusculo";
import Soma from "./components/Soma";
const App = () => {
  const curso = () => {
    return "Curso de React";
  };

  const dados = (p)=>{
    return `${p.nome} - ${p.idade} `
  }

  const pessoa = {
    nome: "Ana",
    idade: 25,
  };

  return (
    <div>
      <img src={Logo} alt="logotipo" width="80" />
      {"Serratec:" + curso()}
      <p>Olá, {dados(pessoa)}</p>
      <Maiusculo/>
      <Soma/>
      <Filtro/>
    </div>
  );
};
export default App;
