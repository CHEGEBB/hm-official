'use client';

import appwriteAuth from '@/appwrite/auth';
import { AuthProvider } from '@/contexts/authContext';
import { UserProvider } from '@/contexts/doctorContext';
import { UserType } from '@/appwrite/doctors';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [authStatus, setAuthStatus] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    const getAuthStatus = async () => {
      const status = await appwriteAuth.isLoggedIn();
      setAuthStatus(status);

      if (status && user === null) {
        const data = await appwriteAuth.getCurrentUser();
        setUser(data);
      }

      if (!status && pathname != 'doctor-portal') {
        router.push('doctors-portal')
      }
    }

    getAuthStatus();
  }, [pathname]);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      <UserProvider value={{ user, setUser }}>{children}</UserProvider>
    </AuthProvider>
  );
};

export default ProtectedLayout;
