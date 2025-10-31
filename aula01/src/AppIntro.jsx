import { Aula, Aula2 } from "./components/Aula";
import Exemplo from "./components/Exemplo";
import Times from "./components/Times";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>Aula de React</h1>
       <h2>Hora:{new Date().toLocaleTimeString()}</h2>
       <Exemplo/>
       <Aula/>
       <Aula2/>
       <Times/>
    </div>
  );
};
export default App;

// function App(){

//   return(

//       <h1>Hello World!</h1>
//   )
// }
// export default App;
