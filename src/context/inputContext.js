import { createContext, useContext, useState } from 'react'
const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValuesForm, setInputValuesForm] = useState({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });

    const setFieldValueForm = (fieldName, value) => {
      setInputValuesForm((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    };

  return (
    // Forneça o estado e funções relacionadas como valor do contexto
    <InputContext.Provider value={{ inputValuesForm, setFieldValueForm, setInputValuesForm }}>
      {children}
    </InputContext.Provider>
  );
};


// Crie um gancho personalizado para acessar o contexto
export const useInputContext = () => {
  return useContext(InputContext);
};
