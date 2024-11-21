'use client';

import { createContext, useContext } from 'react';
import { UserType } from '@/appwrite/doctors';

const UserContext = createContext<{
  user: UserType | null;
  setUser: (user: UserType) => void;
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
