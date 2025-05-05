import React from 'react';
import ResetPasswordClient from '../components/ResetPasswordClient';

// This is a server component that safely gets the search params
export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extract userId and secret from searchParams
  const userId = typeof searchParams.userId === 'string' ? searchParams.userId : null;
  const secret = typeof searchParams.secret === 'string' ? searchParams.secret : null;
  
  // Pass the params to the client component
  return <ResetPasswordClient userId={userId} secret={secret} />;
}