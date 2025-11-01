const Filho = ({ usuarios }) => {
  return (
    <div>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.nome}>
            {usuario.nome} - {usuario.idade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filho;
