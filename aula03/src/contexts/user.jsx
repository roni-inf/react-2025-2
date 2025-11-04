import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [nome, setNome] = useState("Adriana");
  const [total, setTotal] = useState(1000);
  return (
    <UserContext.Provider value={{ nome, setNome, total }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
