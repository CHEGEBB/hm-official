'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import "../../sass/home.scss";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Bell,
  Search,
  LogOut,
  ChevronRight,
  Clock,
  Activity,
  UserCheck,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import Image from 'next/image';
// import Image from 'next/image';

// TypeScript interfaces
interface Doctor {
  id: string;
  name: string;
  specialization: string;
  avatar: string;
  email: string;
}

interface Appointment {
  id: number;
  patient: string;
  time: string;
  type: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  patientAvatar?: string;
}

interface ActivityLog {
  id: number;
  time: string;
  text: string;
  type: 'update' | 'prescription' | 'consultation' | 'review';
}

interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  completedToday: number;
  pendingReviews: number;
  weeklyGrowth: string;
  patientSatisfaction: number;
}

// Mock data
const mockDoctor: Doctor = {
  id: "DOC123",
  name: "Dr. Sarah Smith",
  specialization: "Cardiologist",
  avatar: "/assets/images/ab6.jpeg",
  email: "dr.smith@medical.com"
};

const mockAppointments: Appointment[] = [
  { id: 1, patient: "Jane Cooper", time: "09:00 AM", type: "Check-up", status: "Confirmed", patientAvatar: "/assets/images/13.png" },
  { id: 2, patient: "Mitchelle Chang", time: "10:30 AM", type: "Follow-up", status: "Pending", patientAvatar: "/assets/images/12.png" },
  { id: 3, patient: "Esther Howard", time: "02:00 PM", type: "Consultation", status: "Confirmed", patientAvatar: "/assets/images/54.jpg" },
  { id: 4, patient: "Robert Fox", time: "03:30 PM", type: "Emergency", status: "Confirmed", patientAvatar: "/assets/images/14.png" }
];

const mockStats: DashboardStats = {
  totalPatients: 1524,
  todayAppointments: 8,
  completedToday: 3,
  pendingReviews: 5,
  weeklyGrowth: "+12.5%",
  patientSatisfaction: 94
};

const mockActivity: ActivityLog[] = [
  { id: 1, time: "10:30 AM", text: "Updated patient records for Jane Cooper", type: "update" },
  { id: 2, time: "09:15 AM", text: "Prescribed medication for Wade Warren", type: "prescription" },
  { id: 3, time: "08:00 AM", text: "Started morning consultations", type: "consultation" },
  { id: 4, time: "Yesterday", text: "Completed weekly patient reviews", type: "review" }
];

const DoctorDashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/doctors-portal/dashboard" },
    { icon: Calendar, label: "Appointments", path: "/doctors-portal/appointments" },
    { icon: Users, label: "My Patients", path: "/doctors-portal/patients" },
    { icon: FileText, label: "Reports", path: "/doctors-portal/reports" },
    { icon: Settings, label: "Settings", path: "/doctors-portal/settings" }
  ];

  const NavItem = ({ 
    icon: Icon, 
    label, 
    path 
  }: { 
    icon: React.ComponentType<{ className?: string }>, 
    label: string, 
    path: string 
  }) => (
    <motion.div
      whileHover={{ x: 5 }}
      onClick={() => router.push(path)}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
        ${pathname === path 
          ? 'bg-emerald-500/20 text-emerald-500' 
          : 'text-slate-300 hover:bg-slate-800'}`}
    >
      <Icon className="w-5 h-5" />
      <span className={`${!isNavOpen ? 'hidden' : ''} transition-opacity duration-200`}>
        {label}
      </span>
    </motion.div>
  );

  const colors = {
    blue: "bg-blue-500/20 text-blue-500",
    emerald: "bg-emerald-500/20 text-emerald-500",
    violet: "bg-violet-500/20 text-violet-500",
    amber: "bg-amber-500/20 text-amber-500"
  };
  
  const StatCard = ({ 
      icon: Icon, 
      label, 
      value, 
      trend, 
      color 
    }: { 
      icon: React.ComponentType<{ className?: string }>, 
      label: string, 
      value: number | string, 
      trend?: string, 
      color: keyof typeof colors 
    }) => {

    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="p-6 bg-slate-800/50 rounded-xl border border-slate-700"
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${colors[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-400">{label}</p>
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-semibold">{value}</p>
              {trend && (
                <span className={`text-sm ${
                  trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'
                }`}>
                  {trend}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Responsive Sidebar */}
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

        <div className="mt-auto">
          <div className="border-t border-slate-700 pt-4">
            <div className="flex items-center space-x-3 p-3">
              <Image 
                src={mockDoctor.avatar} 
                width={40}
                height={40}
                alt={mockDoctor.name} 
                className="w-10 h-10 rounded-full"
              />
              {isNavOpen && (
                <div>
                  <p className="font-medium">{mockDoctor.name}</p>
                  <p className="text-sm text-slate-400">{mockDoctor.specialization}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search patients, appointments..."
                  className="pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-64"
                />
              </div>
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

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard
              icon={Users}
              label="Total Patients"
              value={mockStats.totalPatients}
              trend={mockStats.weeklyGrowth}
              color="blue"
            />
            <StatCard
              icon={Calendar}
              label="Today's Appointments"
              value={mockStats.todayAppointments}
              color="emerald"
            />
            <StatCard
              icon={UserCheck}
              label="Completed Today"
              value={mockStats.completedToday}
              color="violet"
            />
            <StatCard
              icon={TrendingUp}
              label="Patient Satisfaction"
              value={`${mockStats.patientSatisfaction}%`}
              color="amber"
            />
          </div>

          {/* Appointments and Activity Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Appointments */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Todays Appointments</CardTitle>
                <Clock className="w-4 h-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAppointments.map((apt) => (
                    <motion.div
                      key={apt.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                        src={apt.patientAvatar || '/assets/images/default-avatar.png'}
                          width={40}
                          height={40}
                          alt={apt.patient} 
                          className="w-10 h-10 rounded-full bg-slate-600"
                        />
                        <div>
                          <p className="font-medium">{apt.patient}</p>
                          <p className="text-sm text-slate-400">{apt.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{apt.time}</p>
                        <p className={`text-sm ${
                          apt.status === 'Confirmed' ? 'text-emerald-500' : 
                          apt.status === 'Pending' ? 'text-amber-500' : 
                          'text-red-500'
                        }`}>{apt.status}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Timeline */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                <Activity className="w-4 h-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 space-y-6">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700" />
                  {mockActivity.map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="relative"
                    >
                      <div className={`absolute -left-[23px] w-4 h-4 rounded-full ${
                        activity.type === 'update' ? 'bg-blue-500' :
                        activity.type === 'prescription' ? 'bg-emerald-500' :
                        activity.type === 'consultation' ? 'bg-violet-500' :
                        'bg-amber-500'
                      }`} />
                      <p className="text-sm text-slate-400">{activity.time}</p>
                      <p className="mt-1">{activity.text}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;