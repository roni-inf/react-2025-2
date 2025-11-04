// import AppClasse from "./AppClasse"

import { useState } from "react";
import Numero from "./components/Numero";
import Form from "./components/Form";

const App = () => {
  // let valor = 1000;
  const [valor, setValor] = useState(1000);
  const [numero, setNumero] = useState(200);
  const [nome, setNome] = useState("João");

  // function calcular() {
  //   // valor = valor * 2;
  //   setValor(valor * 2);
  //   console.log(valor);
  //   return valor;
  // }

  const alterarNome = () => {
    setNome((prevNome) => (prevNome === "João" ? "Maria" : "João"));
  };

  return (
    <div>
      {/* <AppClasse curso="React"/> */}
      <h2>Exemplo do uso do hook useState</h2>
      <p>Resultado:{valor}</p>
      {/* <button onClick={calcular}>Calcular</button> */}
      <button
        onClick={() => {
          setValor(valor * 2);
          console.log(valor);
        }}
      >
        Calcular
      </button>
      <p>Número em APP:{numero}</p>
      <Numero numero={numero} setNumero={setNumero} />

      <p>Nome Atual:{nome}</p>
      <button onClick={alterarNome}>Alterar nome</button>

      <Form/>
    </div>
  );
};

export default App;
