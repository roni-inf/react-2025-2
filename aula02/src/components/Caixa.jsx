const Caixa = (props) => {
  const caixa = {
    width: "100px",
    height: "80px",
    backgroundColor: props.cor,
  };

  const texto = {
    fontSize: "20px",
  };

  return (
    <div>
      <h2>Curso de React</h2>
      <div style={caixa}>
        <p style={texto}>Serratec-2025</p>
      </div>
    </div>
  );
};

export default Caixa;
