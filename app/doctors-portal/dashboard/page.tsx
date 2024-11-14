'use client'; // This ensures the component is client-side only

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
  const pathname = typeof window !== "undefined" ? usePathname() : "";

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
        ${path.includes('dashboard') 
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
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-slate-400" />
              <LogOut className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard 
              icon={Users}
              label="Total Patients"
              value={mockStats.totalPatients}
              color="blue"
            />
            <StatCard 
              icon={Clock}
              label="Today's Appointments"
              value={mockStats.todayAppointments}
              color="emerald"
            />
            <StatCard 
              icon={Activity}
              label="Completed Today"
              value={mockStats.completedToday}
              trend="+2"
              color="violet"
            />
            <StatCard 
              icon={UserCheck}
              label="Pending Reviews"
              value={mockStats.pendingReviews}
              trend="-1"
              color="amber"
            />
            <StatCard 
              icon={TrendingUp}
              label="Weekly Growth"
              value={mockStats.weeklyGrowth}
              color="blue"
            />
            <StatCard 
              icon={Heart}
              label="Patient Satisfaction"
              value={`${mockStats.patientSatisfaction}%`}
              color="emerald"
            />
          </div>

          {/* Recent Appointments */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center space-x-3">
                      <Image 
                        src={appointment.patientAvatar || "/assets/images/default-avatar.png"}
                        width={40}
                        height={40}
                        alt={appointment.patient}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{appointment.patient}</p>
                        <p className="text-sm text-slate-400">{appointment.time} - {appointment.type}</p>
                      </div>
                      <span 
                        className={`ml-auto text-sm ${
                          appointment.status === "Confirmed" 
                            ? "text-emerald-500" 
                            : appointment.status === "Pending" 
                            ? "text-amber-500" 
                            : "text-red-500"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockActivity.map((log) => (
                    <div key={log.id} className="flex items-start space-x-3">
                      <div className="text-sm text-slate-400">{log.time}</div>
                      <div className="flex-1">
                        <p className="text-sm">{log.text}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
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
