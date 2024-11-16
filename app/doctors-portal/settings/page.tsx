'use client'
import React, { ChangeEventHandler, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import "../../sass/home.scss";

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
  Camera
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import Image from 'next/image';
import { useUser } from '@/contexts/doctorContext';

const SettingsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const router = useRouter();
  const {user, setUser} = useUser()
  const doctor = user?.doctor
  const userAccount = user?.userAccount
  const [data, setData] = useState( doctor|| {})


  const handleSubmit = () => {
    console.log(data)
  }

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setData((prev) => {
    // if (!prev) return prev;
    return { ...prev, [e.target.id]: e.target.value };
  });
}
const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setData((prev) => {
    if (!prev) return prev;
    return { ...prev, [e.target.id]: e.target.value };
  });
}

  const navigation = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/doctors-portal/dashboard" },
    { icon: Calendar, label: "Appointments", path: "/doctors-portal/appointments" },
    { icon: Users, label: "My Patients", path: "/doctors-portal/patients" },
    { icon: FileText, label: "Reports", path: "/doctors-portal/reports" },
    { icon: Settings, label: "Settings", path: "/doctors-portal/settings" }
  ];
  
  const NavItem = ({ icon: Icon, label, path }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, label: string, path: string }) => (
    <motion.div
      whileHover={{ x: 5 }}
      onClick={() => router.push(path)}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
        ${path.includes('settings') 
          ? 'bg-emerald-500/20 text-emerald-500' 
          : 'text-slate-300 hover:bg-slate-800'}`}
    >
      <Icon className="w-5 h-5" />
      <span className={`${!isNavOpen ? 'hidden' : ''} transition-opacity duration-200`}>
        {label}
      </span>
    </motion.div>
  );

  const SettingSection = ({ icon: Icon, title, children }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, title: string, children: React.ReactNode }) => (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
        <div className="p-2 bg-slate-700/50 rounded-lg">
          <Icon className="w-5 h-5 text-emerald-500" />
        </div>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <motion.div 
        initial={{ width: 240 }}
        animate={{ width: isNavOpen ? 240 : 80 }}
        className="hidden md:flex bg-slate-800 p-4 flex-col"
      >
        <div className="flex items-center space-x-3 mb-8">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-emerald-500" />
          </motion.div>
          {isNavOpen && <span className="font-bold text-lg">MedPortal</span>}
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <NavItem 
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
        </nav>
      </motion.div>

      <div className="flex-1 overflow-auto">
        <div className="bg-slate-800/50 p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="p-2 hover:bg-slate-700 rounded-lg hidden md:block"
              >
                <ChevronRight 
                  className={`transform transition-transform ${isNavOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              <h1 className="text-xl font-semibold">Settings</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-700 rounded-lg relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full" />
              </button>
              <button className="p-2 hover:bg-slate-700 rounded-lg">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
          <SettingSection icon={User} title="Profile Settings">
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Image
                    src={doctor?.avatar || '/assets/images/ab6.jpeg'} 
                    width={100}
                    height={100}
                    alt="Profile" 
                    className="w-24 h-24 rounded-full"
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-emerald-500 rounded-full hover:bg-emerald-600">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      value={data?.name || ''}
                      id='name'
                      className="bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      onChange={handleChange}
                    />
                   {/* <input 
                      type="text" 
                      placeholder="Last Name" 
                      value={data?.name || ''}
                      id='names'
                      className="bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      onChange={handleChange}
                    /> */}
                  </div>
                  <textarea 
                    placeholder="Bio"
                    value={data?.bio || ''}
                    id='bio'
                    className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={3}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Mail} title="Contact Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  value={data?.email || userAccount?.email}
                  id='email'
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Phone Number</label>
                <input 
                  type="tel" 
                  value={data?.phone || ''}
                  id='phone'
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Building} title="Practice Information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Specialization</label>
                  <select id='specialization' value={doctor?.specialization || ''} className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onChange={handleSelect}>
                    <option>Select specialization</option>
                    <option value={'Cardiology'}>Cardiology</option>
                    <option value={'Neurology'}>Neurology</option>
                    <option value={'Pediatrics'}>Pediatrics</option>
                    <option value={'Oncology'}>Oncology</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">License Number</label>
                  <input 
                    type="text" 
                    value={data?.licenseNumber || ''}
                    id='licenseNumber'
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Office Address</label>
                <textarea 
                  value={data?.address || ''}
                  id='address'
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  rows={2}
                />
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={BellIcon} title="Notification Preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 hover:bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-slate-400">Receive email updates about your appointments</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-emerald-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="font-medium">SMS Notifications</h4>
                  <p className="text-sm text-slate-400">Get text messages for urgent updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>
          </SettingSection>

          <SettingSection icon={Shield} title="Security Settings">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Current Password</label>
                <input 
                  type="password" 
                  placeholder="Enter current password"
                  className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">New Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter new password"
                    className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Confirm New Password</label>
                  <input 
                    type="password" 
                    placeholder="Confirm new password"
                    className="w-full bg-slate-700/50 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>
          </SettingSection>

          <div className="flex justify-end">
            <button onClick={handleSubmit} className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;