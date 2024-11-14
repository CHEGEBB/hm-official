'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Bell,
  Search,
  User,
  LogOut,
  ChevronRight,
  Clock,
  Activity,
  UserCheck,
  BadgeAlert,
  Tablets,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';

// Mock data - replace with API calls later
const mockAppointments = [
  { id: 1, patient: "Jane Cooper", time: "09:00 AM", type: "Check-up", status: "Confirmed" },
  { id: 2, patient: "Wade Warren", time: "10:30 AM", type: "Follow-up", status: "Pending" },
  { id: 3, patient: "Esther Howard", time: "02:00 PM", type: "Consultation", status: "Confirmed" },
];

const mockStats = {
  totalPatients: 1524,
  todayAppointments: 8,
  completedToday: 3,
  pendingReviews: 5
};

const DoctorDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Mock doctor data - replace with actual auth data
  const doctor = {
    name: "Dr. Smith",
    specialization: "Cardiologist",
    id: "DOC123",
    avatar: "/api/placeholder/100/100"
  };

  const NavItem = ({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string }) => (
    <motion.div
      whileHover={{ x: 5 }}
      onClick={() => setActivePage(value)}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
        activePage === value ? 'bg-emerald-500/20 text-emerald-500' : 'text-slate-300 hover:bg-slate-800'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className={`${!isNavOpen && 'hidden'}`}>{label}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar */}
      <motion.div 
        initial={{ width: 240 }}
        animate={{ width: isNavOpen ? 240 : 80 }}
        className="bg-slate-800 p-4 flex flex-col"
      >
        <div className="flex items-center space-x-3 mb-8">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center"
          >
            <LayoutDashboard className="w-6 h-6 text-emerald-500" />
          </motion.div>
          {isNavOpen && <span className="font-bold text-lg">DocPortal</span>}
        </div>

        <nav className="space-y-2">
          <NavItem icon={LayoutDashboard} label="Dashboard" value="dashboard" />
          <NavItem icon={Calendar} label="Appointments" value="appointments" />
          <NavItem icon={Users} label="My Patients" value="patients" />
          <NavItem icon={Tablets} label="Medications" value="medications" />
          <NavItem icon={FileText} label="Reports" value="reports" />
          <NavItem icon={Settings} label="Settings" value="settings" />
        </nav>

        <div className="mt-auto">
          <div className="border-t border-slate-700 pt-4">
            <div className="flex items-center space-x-3 p-3">
              <img src={doctor.avatar} alt="Doctor" className="w-10 h-10 rounded-full" />
              {isNavOpen && (
                <div>
                  <p className="font-medium">{doctor.name}</p>
                  <p className="text-sm text-slate-400">{doctor.specialization}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-slate-800/50 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="p-2 hover:bg-slate-700 rounded-lg"
            >
              <ChevronRight className={`transform transition-transform ${isNavOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search patients, appointments..."
                className="pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
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

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Users}
              label="Total Patients"
              value={mockStats.totalPatients}
              trend="+12%"
              color="blue"
            />
            <StatCard
              icon={Calendar}
              label="Today's Appointments"
              value={mockStats.todayAppointments}
              trend="+3"
              color="emerald"
            />
            <StatCard
              icon={UserCheck}
              label="Completed Today"
              value={mockStats.completedToday}
              trend="-2"
              color="violet"
            />
            <StatCard
              icon={BadgeAlert}
              label="Pending Reviews"
              value={mockStats.pendingReviews}
              trend="+1"
              color="amber"
            />
          </div>

          {/* Appointments and Activity */}
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
                      className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{apt.patient}</p>
                          <p className="text-sm text-slate-400">{apt.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{apt.time}</p>
                        <p className={`text-sm ${
                          apt.status === 'Confirmed' ? 'text-emerald-500' : 'text-amber-500'
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
                  {[
                    { time: "10:30 AM", text: "Updated patient records for Jane Cooper" },
                    { time: "09:15 AM", text: "Prescribed medication for Wade Warren" },
                    { time: "08:00 AM", text: "Started morning consultations" },
                  ].map((activity, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="relative"
                    >
                      <div className="absolute -left-[23px] w-4 h-4 rounded-full bg-emerald-500" />
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

const StatCard = ({ icon: Icon, label, value, trend, color }) => {
  const colors = {
    blue: "bg-blue-500/20 text-blue-500",
    emerald: "bg-emerald-500/20 text-emerald-500",
    violet: "bg-violet-500/20 text-violet-500",
    amber: "bg-amber-500/20 text-amber-500"
  };

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
            <span className={`text-sm ${trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
              {trend}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorDashboard;