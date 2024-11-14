'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Heart,
  Search,
  Bell,
  LogOut,
  ChevronRight,
  Filter,
  UserPlus,
  Phone,
  Mail,
  Clock,
  Activity,
  Tablets
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import Image from 'next/image';

// Types
interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  contact: string;
  email: string;
  lastVisit: string;
  nextAppointment: string;
  condition: string;
  status: 'Active' | 'Inactive' | 'Critical';
  avatar: string;
}

// Mock data
const mockPatients: Patient[] = [
  {
    id: "P001",
    name: "Emma Thompson",
    age: 45,
    gender: "Female",
    contact: "+1 (555) 123-4567",
    email: "emma.t@email.com",
    lastVisit: "2024-03-15",
    nextAppointment: "2024-04-20",
    condition: "Hypertension",
    status: "Active",
    avatar: "/api/placeholder/50/50"
  },
  {
    id: "P002",
    name: "James Wilson",
    age: 62,
    gender: "Male",
    contact: "+1 (555) 234-5678",
    email: "j.wilson@email.com",
    lastVisit: "2024-03-10",
    nextAppointment: "2024-04-15",
    condition: "Diabetes Type 2",
    status: "Critical",
    avatar: "/api/placeholder/50/50"
  },
  {
    id: "P003",
    name: "Sophie Chen",
    age: 28,
    gender: "Female",
    contact: "+1 (555) 345-6789",
    email: "s.chen@email.com",
    lastVisit: "2024-03-20",
    nextAppointment: "2024-04-25",
    condition: "Regular Checkup",
    status: "Active",
    avatar: "/api/placeholder/50/50"
  }
];

const mockStats = {
  totalPatients: 248,
  activePatients: 180,
  criticalCases: 12,
  newThisMonth: 24
};

const PatientsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const navigation = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/doctors-portal" },
    { icon: Calendar, label: "Appointments", path: "/doctors-portal/appointments" },
    { icon: Users, label: "My Patients", path: "/doctors-portal/patients" },
    { icon: Tablets, label: "Medications", path: "/doctors-portal/medications" },
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
        ${path.includes('patients') 
          ? 'bg-emerald-500/20 text-emerald-500' 
          : 'text-slate-300 hover:bg-slate-800'}`}
    >
      <Icon className="w-5 h-5" />
      <span className={`${!isNavOpen ? 'hidden' : ''} transition-opacity duration-200`}>
        {label}
      </span>
    </motion.div>
  );

  const StatCard = ({ 
    icon: Icon, 
    label, 
    value, 
    color 
  }: { 
    icon: React.ComponentType<{ className?: string }>, 
    label: string, 
    value: number, 
    color: string 
  }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-slate-800/50 rounded-xl border border-slate-700"
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar */}
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
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Patients Content */}
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard
              icon={Users}
              label="Total Patients"
              value={mockStats.totalPatients}
              color="bg-blue-500/20 text-blue-500"
            />
            <StatCard
              icon={Activity}
              label="Active Patients"
              value={mockStats.activePatients}
              color="bg-emerald-500/20 text-emerald-500"
            />
            <StatCard
              icon={Activity}
              label="Critical Cases"
              value={mockStats.criticalCases}
              color="bg-red-500/20 text-red-500"
            />
            <StatCard
              icon={UserPlus}
              label="New This Month"
              value={mockStats.newThisMonth}
              color="bg-violet-500/20 text-violet-500"
            />
          </div>

          {/* Patients List */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Patient Records</CardTitle>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-slate-700 rounded-lg">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 flex items-center space-x-2">
                  <UserPlus className="w-4 h-4" />
                  <span>Add Patient</span>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPatients.map((patient) => (
                  <motion.div
                    key={patient.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={patient.avatar} 
                          width={60}
                          height={60}
                          quality={100}
                          alt={patient.name} 
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{patient.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              patient.status === 'Active' ? 'bg-emerald-500/20 text-emerald-500' :
                              patient.status === 'Critical' ? 'bg-red-500/20 text-red-500' :
                              'bg-slate-500/20 text-slate-500'
                            }`}>
                              {patient.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400">
                            {patient.age} years • {patient.gender} • {patient.condition}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center space-x-2 text-sm text-slate-400">
                            <Clock className="w-4 h-4" />
                            <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-emerald-500">
                            <Calendar className="w-4 h-4" />
                            <span>Next: {new Date(patient.nextAppointment).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 hover:bg-slate-600 rounded-lg" title="Call">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-slate-600 rounded-lg" title="Email">
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;