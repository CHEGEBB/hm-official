'use client'

import { createContext, useContext } from 'react';

interface User {
  userAccount: {
    email: string;
  }, doctor: {
  id: string;
  name: string;
  specialization: string;
  avatar: string;
  email: string;
}
}

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
}>({
  user: null,
  setUser: () => {},
});

export const UserProvider = UserContext.Provider;

export const useUser = () => {
    const data = useContext(UserContext);
    return data;
}

export default UserContext;