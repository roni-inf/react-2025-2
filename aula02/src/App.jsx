import Button from "./components/Button";
import "./App.css";
import { BlueButton, RedButton, StyleButton } from "./components/Button.style";
import { Card } from "./components/Card.style";
import ExemploEvento from "./components/ExemploEvento";

const App = () => {
  return (
    <div>
      <Button />
      <button className="button">Clique Aqui</button>
      <hr />
      <StyleButton onClick={() => alert("Oi!")}>CSS</StyleButton>
      <RedButton>Curso de CSS</RedButton>
      <BlueButton>Aula de Styled</BlueButton>

      <Card>
        <h2>Título do Card</h2>
        <p>Conteúdo do Card</p>
      </Card>

      <ExemploEvento/>
    </div>
  );
};

export default App;
