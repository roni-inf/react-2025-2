import React from "react";

const Aluno = ({nome, idade, profissao, email}) => {
  return (
    <div>
      <p>Nome:{nome}</p>
      <p>Idade:{idade}</p>
      <p>Profissão:{profissao}</p>
      <p>Email:{email}</p>
    </div>
  );
};

export default Aluno;
