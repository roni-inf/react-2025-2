import Filho from "./Filho";

const Usuario = () => {
 
    const usuarios = [
    { nome: "José", idade: 33 },
    { nome: "Ana", idade: 21 },
    { nome: "Pedro", idade: 32 },
  ];

  return (
      <div>
            <Filho usuarios={usuarios}/>
      </div>

  );
  
};

export default Usuario;
