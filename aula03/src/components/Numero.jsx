const Numero = (props) => {
  return (
    <div>
      <p>Valor do state em Número:{props.numero}</p>
      <button onClick={() => props.setNumero(props.numero + 100)}>
        Calcular Numero
      </button>
    </div>
  );
};

export default Numero;
