'use client';

import { createContext, useContext } from 'react';

export interface User {
  userAccount: {
    email: string;
  };
  doctor: {
    $id: string;
    firstName: string;
    lastName: string;
    specialization: string;
    avatar: string;
    email?: string;
    bio?: string;
    phone?: string;
    licenseNumber?: string;
    address?: string;
    smsNotifications?: boolean;
    emailNotifications?: boolean;
  };
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
};

export default UserContext;
