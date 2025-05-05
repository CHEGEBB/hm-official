import { Metadata } from 'next';
import ResetPasswordClient from '../components/ResetPasswordClient';

export const metadata: Metadata = {
  title: 'Reset Password | Health Master',
  description: 'Reset your Health Master account password',
};

// Use a static page and handle the search params on the client side
export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}