const Maiusculo = () => {
  
    const transfomar = (texto) => {
    return texto.toUpperCase();
  };

  return (
    <div>
      <h2>Texto em maiúsculo</h2>
      <p>{transfomar("aula de componentes")}</p>
    </div>
  );
};
export default Maiusculo;
