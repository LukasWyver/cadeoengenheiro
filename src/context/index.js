import { createContext, useState, useContext, useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from 'nookies'

// Crie um novo contexto
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  // Defina o estado que deseja compartilhar
  const [user, setUser] = useState();
  // Usado para converter o valor da variável user em um valor booleano
  const isAuthenticated = !!user; // null, undefined, 0 ou uma string vazia = false

  useEffect(() => {
    if (!isAuthenticated ) {
     // Recupere os valores dos cookies ao enviar o formulário.
     const { ['@coe.form-data-submitted']: token } = parseCookies()

     if (token) {
      const data = JSON.parse(token);
      setUser(data);
      // console.log('atualizou o user com o useEffect')
    }
   }
 }, [isAuthenticated]);

  async function saveContact(data) {
    setCookie(null, '@coe.form-data-submitted' , JSON.stringify(data), {
      maxAge: 60 * 60 * 24 * 30, // expirar em um mes
      path: "/",
    });

    setUser(data);
    // console.log('atualizou o user com a função saveContact')
    destroyCookie(null, '@coe.form-data')
  }

  return (
    // Forneça o estado e funções relacionadas como valor do contexto
    <MyContext.Provider value={{ user, saveContact, isAuthenticated }}>
      {children}
    </MyContext.Provider>
  );
};

// Crie um gancho personalizado para acessar o contexto
export const useMyContext = () => {
  return useContext(MyContext);
};
