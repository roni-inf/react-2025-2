import PropTypes from "prop-types";

const Carro = ({ modelo, ano, data_lancamento }) => {
  return (
    <div>
      <li>
        {modelo} - {ano} - {data_lancamento}
      </li>
    </div>
  );
};

Carro.propTypes = {
  modelo: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
  data_lancamento: PropTypes.instanceOf(Date),
};

Carro.defaultProps = {
  modelo: "Modelo não digitado",
  ano: 0,
  data_lancamento: new Date(),
};

export default Carro;
