import Aluno from "./components/Aluno";
import UserProvider from "./contexts/user";

const App = () => {
  
  return (
    <UserProvider>
      <div>
        <h1>Escola Serratec</h1>
        <hr />

        <Aluno/>

        <Titulo></Titulo>
      </div>
    </UserProvider>
  );
};

export default App;

function Titulo({ children }) {
  return (
    <div>
      <h1>Título de alguma coisa....</h1>
      {children}
    </div>
  );
}
