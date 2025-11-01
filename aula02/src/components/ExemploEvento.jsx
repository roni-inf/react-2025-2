const ExemploEvento = () => {
  let nome = "Ana";

  const handleClick = () => {
    alert("Clicou no botão");
  };

  const handleChangeName = () => {
    nome = "Maria";
    alert("Clicou no botão nome" + nome)
  };

  return (
    <div>
      <p>Exemplo Evento</p>
      <button onClick={handleClick}>Evento de Click</button>

      <p>Segundo Botão</p>
      <button onClick={() => alert("clicou no segundo botão")}>
        Evento de Click 2
      </button>

    <button onClick={handleChangeName}>Alterar Nome</button>

    </div>
  );
};

export default ExemploEvento;
