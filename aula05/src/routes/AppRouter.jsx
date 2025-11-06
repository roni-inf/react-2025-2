import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Empresa from "../screens/Empresa";
import Contato from "../screens/Contato";
import Noticias from "../screens/Noticias";
import Sobre from "../screens/Sobre";
import Error from "../screens/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/empresa" element={<Empresa />}></Route>
      <Route path="/contato/:id" element={<Contato />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route path="*" element={<Error/>}> </Route>

    </Routes>
  );
};

export default AppRouter;
