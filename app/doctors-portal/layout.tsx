'use client'

import appwriteAuth from '@/appwrite/auth';
import { AuthProvider } from '@/contexts/authContext';
import { UserProvider } from '@/contexts/doctorContext';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [authStatus, setAuthStatus] = useState(false);
  const [user, setUser] = useState<object | null>(null);
  useEffect(() => {
    if (authStatus && user === null) {
      appwriteAuth.getCurrentUser().then((data) => {
        setUser(data)
      })
    }
      if (!authStatus && pathname != "/doctors-portal") {
        router.replace('/doctors-portal');
      }
    
}, [authStatus, pathname]);

useEffect()
  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      <UserProvider value={{ user, setUser }}>
        {children}
      </UserProvider>
    </AuthProvider>
  );
};

export default ProtectedLayout;