const Soma = () => {
  const numeros = [1, 5, 8, 10, 20];

  const calcular = (numeros) => {
    return numeros.reduce((total, numero) => total + numero, 0);
  };

  return (
    <div>
      <h2>Exemplo Soma</h2>
      <br/>
      <p>Resultado:{calcular(numeros)}</p>
    </div>
  );
};
export default Soma;
