'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import '../../sass/home.scss';

import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Heart,
  Bell,
  LogOut,
  ChevronRight,
  User,
  Bell as BellIcon,
  Shield,
  Mail,
  Building,
  Save,
  Camera,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/Card';
import Image from 'next/image';
import { useUser } from '@/contexts/doctorContext';
import appwriteDoctor from '@/appwrite/doctors';
import { UserType } from '@/appwrite/doctors';

const NavItem = ({
  icon: Icon,
  label,
  path,
  isNavOpen,
}: {
  isNavOpen: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ x: 5 }}
      onClick={() => router.push(path)}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
        ${
          path.includes('settings')
            ? 'bg-emerald-500/20 text-emerald-500'
            : 'text-slate-300 hover:bg-slate-800'
        }`}
    >
      <Icon className='w-5 h-5' />
      <span
        className={`${
          !isNavOpen ? 'hidden' : ''
        } transition-opacity duration-200`}
      >
        {label}
      </span>
    </motion.div>
  );
};

const SettingSection = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className='bg-slate-800/50 border-slate-700'>
    <CardHeader className='flex flex-row items-center space-x-4 space-y-0'>
      <div className='p-2 bg-slate-700/50 rounded-lg'>
        <Icon className='w-5 h-5 text-emerald-500' />
      </div>
      <CardTitle className='text-lg font-medium'>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const SettingsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const { user, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    bio: '',
    email: '',
    phone: '',
    specialization: '',
    licenseNumber: '',
    address: '',
    emailNotifications: true,
    smsNotifications: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [userAccount, setUserAccount] = useState<UserType['userAccount']>({
    email: '',
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({...prev, ...user.doctor}));
      setUserAccount(user.userAccount);
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    if (e.target.type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value === 'on' ? true : false,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    appwriteDoctor
      .updateSelf(formData as unknown as UserType['doctor'])
      .then(() => {
        setUser({ doctor: formData as unknown as UserType['doctor'], userAccount });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const navigation = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/doctors-portal/dashboard',
    },
    {
      icon: Calendar,
      label: 'Appointments',
      path: '/doctors-portal/appointments',
    },
    { icon: Users, label: 'My Patients', path: '/doctors-portal/patients' },
    { icon: FileText, label: 'Reports', path: '/doctors-portal/reports' },
    { icon: Settings, label: 'Settings', path: '/doctors-portal/settings' },
  ];

  return (
    <div className='min-h-screen bg-slate-900 text-white flex'>
      <motion.div
        initial={{ width: 240 }}
        animate={{ width: isNavOpen ? 240 : 80 }}
        className='hidden md:flex bg-slate-800 p-4 flex-col'
      >
        <div className='flex items-center space-x-3 mb-8'>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className='w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center'
          >
            <Heart className='w-6 h-6 text-emerald-500' />
          </motion.div>
          {isNavOpen && <span className='font-bold text-lg'>MedPortal</span>}
        </div>

        <nav className='space-y-2'>
          {navigation.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isNavOpen={isNavOpen}
            />
          ))}
        </nav>
      </motion.div>

      <div className='flex-1 overflow-auto'>
        <div className='bg-slate-800/50 p-4 sticky top-0 z-10'>
          <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <div className='flex items-center space-x-4'>
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className='p-2 hover:bg-slate-700 rounded-lg hidden md:block'
              >
                <ChevronRight
                  className={`transform transition-transform ${
                    isNavOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <h1 className='text-xl font-semibold'>Settings</h1>
            </div>
            <div className='flex items-center space-x-4'>
              <button className='p-2 hover:bg-slate-700 rounded-lg relative'>
                <Bell className='w-5 h-5' />
                <span className='absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full' />
              </button>
              <button className='p-2 hover:bg-slate-700 rounded-lg'>
                <LogOut className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>

        <div className='p-4 md:p-6 space-y-6 max-w-7xl mx-auto'>
          <SettingSection icon={User} title='Profile Settings'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-6'>
                <div className='relative'>
                  <Image
                    src={formData.avatar || '/assets/images/ab6.jpeg'}
                    width={100}
                    height={100}
                    alt='Profile'
                    className='w-24 h-24 rounded-full'
                  />
                  <button className='absolute bottom-0 right-0 p-2 bg-emerald-500 rounded-full hover:bg-emerald-600'>
                    <Camera className='w-4 h-4' />
                  </button>
                </div>
                <div className='flex-1 space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                      type='text'
                      placeholder='First Name'
                      name='firstName'
                      onChange={(e) => handleChange(e)}
                      value={formData.firstName || ''}
                      className='bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    />
                    <input
                      type='text'
                      placeholder='Last Name'
                      name='lastName'
                      value={formData.lastName || ''}
                      onChange={handleChange}
                      className='bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    />
                  </div>
                  <textarea
                    placeholder='Bio'
                    name='bio'
                    value={formData.bio || ''}
                    onChange={handleChange}
                    className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Mail} title='Contact Information'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label className='text-sm text-slate-400'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email || userAccount.email || ''}
                  onChange={handleChange}
                  className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm text-slate-400'>Phone Number</label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone || ''}
                  onChange={handleChange}
                  className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Building} title='Practice Information'>
            <div className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm text-slate-400'>
                    Specialization
                  </label>
                  <select
                    name='specialization'
                    value={formData.specialization || ''}
                    onChange={handleChange}
                    className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  >
                    <option value=''>Select specialization</option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Neurology'>Neurology</option>
                    <option value='Pediatrics'>Pediatrics</option>
                    <option value='Oncology'>Oncology</option>
                  </select>
                </div>
                <div className='space-y-2'>
                  <label className='text-sm text-slate-400'>
                    License Number
                  </label>
                  <input
                    type='text'
                    name='licenseNumber'
                    value={formData.licenseNumber || ''}
                    onChange={handleChange}
                    className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-sm text-slate-400'>Office Address</label>
                <textarea
                  name='address'
                  value={formData.address || ''}
                  onChange={handleChange}
                  className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  rows={2}
                />
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={BellIcon} title='Notification Preferences'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-2 hover:bg-slate-700/50 rounded-lg'>
                <div>
                  <h4 className='font-medium'>Email Notifications</h4>
                  <p className='text-sm text-slate-400'>
                    Receive email updates about your appointments
                  </p>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    name='emailNotifications'
                    onChange={handleChange}
                    checked={formData.emailNotifications || false}
                    className='sr-only peer'
                  />
                  <div className='w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-emerald-500'></div>
                </label>
              </div>
              <div className='flex items-center justify-between p-2 hover:bg-slate-700/50 rounded-lg'>
                <div>
                  <h4 className='font-medium'>SMS Notifications</h4>
                  <p className='text-sm text-slate-400'>
                    Get text messages for urgent updates
                  </p>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    name='smsNotifications'
                    onChange={handleChange}
                    checked={formData.smsNotifications || false}
                    className='sr-only peer'
                  />
                  <div className='w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-emerald-500'></div>
                </label>
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Shield} title='Security Settings'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <label className='text-sm text-slate-400'>
                  Current Password
                </label>
                <input
                  type='password'
                  placeholder='Enter current password'
                  className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm text-slate-400'>New Password</label>
                  <input
                    type='password'
                    placeholder='Enter new password'
                    className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm text-slate-400'>
                    Confirm New Password
                  </label>
                  <input
                    type='password'
                    placeholder='Confirm new password'
                    className='w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  />
                </div>
              </div>
            </div>
          </SettingSection>

          <div className='flex justify-end'>
            <button
              disabled={isLoading}
              onClick={handleSubmit}
              className='bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 flex items-center space-x-2'
            >
              <Save className='w-4 h-4' />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
