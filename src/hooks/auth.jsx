import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toastUtils } from "../components/Toast";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  async function signIn({ email, password }) {
    setShowLoading(true);
    try {
      const response = await api.post("/sessions", { email, password })
      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });

      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      if (error.response) {
        toastUtils.handleError(error.response.data.message);
      } else {
        toastUtils.handleError("Erro ao entrar, tente novamente mais tarde");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, showLoading, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };