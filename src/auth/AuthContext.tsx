// AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define user type

interface TestResult {
    id: number;
    testName: string;
    result: string;
    date: string;
}
  
interface Appointment {
    id: number;
    doctor: string;
    date: string;
    time: string;
}
interface User {
  id: string;
  username: string;
  role: string;
  appointments: Appointment[];
  testResults: TestResult[];
}

// Define context type
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Default value for the context
const defaultContextValue: AuthContextType = {
  user: null,
  login: (user: User) => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultContextValue);

// Context Provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
