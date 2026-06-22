import { createContext, useContext, useState, useEffect } from 'react';
import { USERS } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lấy user từ localStorage nếu có
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('bknect_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role) => {
    // Tìm user mẫu tương ứng với role để giả lập login
    const foundUser = USERS.find(u => u.role === role);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('bknect_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bknect_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);