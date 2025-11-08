import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const autenticar = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/feed");
    } catch (error) {
      setErro(`Usuário ou senha incorretos! - ${error}  `);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginBox} onSubmit={autenticar}>
        <h2>Login</h2>
        {erro && <p className={styles.erro}></p>}
        <input
          type="text"
          placeholder="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
