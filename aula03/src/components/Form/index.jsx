import { useState } from "react";

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  function cadastrar(e) {
    e.preventDefault();
    console.log(`Dados de envio: ${nome} - ${email}`);
  }



  return (
    <div>
      <form>
        <h1>Dados do Formulário</h1>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Preencha o nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          placeholder="Preencha o email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={cadastrar}>
          Enviar
        </button>
        <input type="text" placeholder="Digite algo aqui" onChange={(e)=>setTexto(e.target.value)}/>
        <p>Você digitou:{texto}</p>
      </form>
    </div>
  );
};

export default Form;
