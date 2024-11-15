'use client'

import appwriteAuth from '@/appwrite/auth';
import appwriteInfo from '@/appwrite/info';
import { AuthProvider } from '@/contexts/authContext';
import { UserProvider } from '@/contexts/doctorContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [authStatus, setAuthStatus] = useState(false);
  const [doctor, setUser] = useState<object | null>(null);
  useEffect(() => {
    appwriteAuth.isLoggedIn().then((authStatus) => {
      setAuthStatus(authStatus);
      appwriteInfo.getPersonalInfo().then((data) => {
        setUser(data);
      }
      );
      if (!authStatus) {
        router.replace('/login');
        return <></>;
      }
    });
  }, []);
  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      <UserProvider value={{ doctor, setUser }}>
        {children}
      </UserProvider>
    </AuthProvider>
  );
};

export default ProtectedLayout;