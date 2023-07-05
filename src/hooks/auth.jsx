import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toastUtils } from "../components/Toast";
import { AES, enc } from 'crypto-js';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  function encryptData(data, key) {
    const encryptedData = AES.encrypt(JSON.stringify(data), key).toString();
    return encryptedData;
  }

  function decryptData(encryptedData, key) {
    const decryptedData = AES.decrypt(encryptedData, key).toString(enc.Utf8);
    return decryptedData;
  }

  const encryptionKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZDg5MjMxMjc5OTkxYjJhNGMwMjdjMGIiLCJoc2giOiIkMmEkMTMkWk53Y0cubjdRZFIybDA3S1RHd2RoLlN0QksudW5GSFVGLkZnZ0tQTGlUV2pOVEFqVy9SMm0iLCJncmFudCI6ImFjY2VzcyIsImlhdCI6MTU2OTI2ODUwMiwiZXhwIjoxNjAwODI2MTAyfQ.PQcCoF9d25bBqr1U4IhJbylpnKTYiad3NjCh_LvMfLE~3~null~undefined~434ce0149ce42606d8746bd9";

  const key = new Uint32Array(10)
  console.log(crypto.getRandomValues(key))

  async function signIn({ email, password }) {
    setShowLoading(true);
    try {
      const response = await api.post("/sessions", { email, password })
      const { token, user } = response.data;

      const encryptedUserData = encryptData(user, encryptionKey);
      const encryptedToken = encryptData(token, encryptionKey);

      localStorage.setItem("@foodexplorer:user", encryptedUserData);
      localStorage.setItem("@foodexplorer:token", encryptedToken);


      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token: encryptedToken, user: encryptedUserData });

      setShowLoading(false);

      const greetingMessage = () => {
        const isAdmin = user && user.admin ? 1 : 0;
        let hour = new Date().getHours();
        switch (true) {
          case hour <= 5: return !isAdmin ? '👋 Boa madrugada!' : '👋 Boa madrugada! Bom trabalho';
          case hour < 12: return !isAdmin ? '👋 Bom dia!' : '👋 Bom dia! Bom trabalho';
          case hour < 18: return !isAdmin ? '👋 Boa tarde!' : '👋 Boa tarde! Bom trabalho';
          default: return !isAdmin ? '👋 Boa noite!' : '👋 Boa noite! Bom trabalho';
        }
      }

      toastUtils.handleDefault(greetingMessage);
    } catch (error) {
      setShowLoading(false);
      if (error.response) {
        toastUtils.handleError(error.response.data.message);
      } else {
        toastUtils.handleError("Erro ao entrar, tente novamente mais tarde");
      }
    }
  }

  useEffect(() => {
    const encryptedUserData = localStorage.getItem("@foodexplorer:user");
    const encryptedTokenData = localStorage.getItem("@foodexplorer:token");
    console.log(encryptedUserData, encryptedTokenData);

    if (encryptedUserData && encryptedTokenData) {
      const user = decryptData(encryptedUserData, encryptionKey);
      const token = decryptData(encryptedTokenData, encryptionKey);
      console.log(user, token);

      if (user && token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({
          token,
          user: JSON.parse(user)
        })
      }
    }
  }, []);

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