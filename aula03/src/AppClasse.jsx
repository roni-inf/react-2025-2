import React from "react";
class AppClasse extends React.Component {
  constructor(props) {
    super(props);
    console.log("Construtor executado");
    this.state = {
      dia: "Segunda-Feira",
      hora: "00:00:00",
    };
  }

  componentDidMount() {
    console.log("Criação do componente de classe");
    this.setState({ dia: "Terça-Feira" });

    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Atualização de componente efetuada....");
  }

  componentWillUnmount() {
    console.log("Componente removido da DOM");
  }

  render() {
    return (
      <div>
        <h1>Componente de Classe</h1>
        <h2>{this.props.curso}</h2>
        <h2>{this.state.dia}</h2>
        <h2>{this.state.hora}</h2>
      </div>
    );
  }
}

export default AppClasse;
