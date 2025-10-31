const Filtro = () => {
  const nomes = ["Mariana", "Alberto", "Rodrigo", "Flávio", "Maria", "Roberta"];

  const filtrarNomes = (vetor) => {
    return vetor.filter((nome) => nome.length > 5);
  };

  //retornar um filtro com os nomes com mais de cinco letras
  return (
    <div>
      <h2>Filtro de nomes</h2>
      <h2>Nomes originais separador por ;</h2>
      <p>{nomes.join(';')}</p>
      <h2>Nomes com mais de cinco letras</h2>
      <p>{filtrarNomes(nomes).join(', ')}</p>
    </div>
  );
};
export default Filtro;
