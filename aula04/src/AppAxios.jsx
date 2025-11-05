import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsuarios(response.data))
      .catch(() => console.log("Erro na requisição"));
  }, []);

  return (
    <div>
        <h1>Lista de Usuários - Jsonplaceholder</h1>
        <ul>
            {usuarios.map((usuario)=>(
                <li key={usuario.id}>{usuario.name}</li>
            ))}
        </ul>
    </div>
  )
  
  
};

export default App;
