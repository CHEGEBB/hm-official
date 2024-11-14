'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../sass/home.scss";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Heart,
  ChevronRight,
  Search,
  Plus,
  Filter,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Mail,
  MoreHorizontal,
  Check,
  X,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/Card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Types
interface Appointment {
  id: string;
  patientName: string;
  patientAvatar: string;
  dateTime: string;
  type: 'Check-up' | 'Follow-up' | 'Consultation' | 'Emergency';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  duration: number;
  location: 'In-person' | 'Video Call';
  contact: {
    phone: string;
    email: string;
  };
  notes?: string;
}

// Mock Data
const mockAppointments: Appointment[] = [
  {
    id: "APT001",
    patientName: "Emma Thompson",
    patientAvatar: "/assets/images/36.jpg",
    dateTime: "2024-11-14T09:00:00",
    type: "Check-up",
    status: "Scheduled",
    duration: 30,
    location: "In-person",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "emma.t@email.com"
    },
    notes: "Regular cardiac check-up"
  },
  {
    id: "APT002",
    patientName: "James Wilson",
    patientAvatar: "/assets/images/54.jpg",
    dateTime: "2024-11-14T10:00:00",
    type: "Follow-up",
    status: "In Progress",
    duration: 45,
    location: "Video Call",
    contact: {
      phone: "+1 (555) 234-5678",
      email: "james.w@email.com"
    },
    notes: "Post-surgery follow-up"
  },
  {
    id: "APT003",
    patientName: "Sarah Parker",
    patientAvatar: "/assets/images/12.jpeg",
    dateTime: "2024-11-14T11:30:00",
    type: "Consultation",
    status: "Scheduled",
    duration: 60,
    location: "In-person",
    contact: {
      phone: "+1 (555) 345-6789",
      email: "sarah.p@email.com"
    }
  },
  {
    id: "APT004",
    patientName: "Mitchelle Chang",
    patientAvatar: "/assets/images/12.png",
    dateTime: "2024-11-14T14:00:00",
    type: "Emergency",
    status: "Scheduled",
    duration: 45,
    location: "In-person",
    contact: {
      phone: "+1 (555) 456-7890",
      email: "michael.c@email.com"
    },
    notes: "Urgent consultation requested"
  }
];

const AppointmentsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();


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
        ${path === '/doctors-portal/appointments' 
          ? 'bg-emerald-500/20 text-emerald-500' 
          : 'text-slate-300 hover:bg-slate-800'}`}
    >
      <Icon className="w-5 h-5" />
      <span className={`${!isNavOpen ? 'hidden' : ''}`}>
        {label}
      </span>
    </motion.div>
  );

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => {
    const statusColors = {
      Scheduled: 'bg-blue-500/20 text-blue-500',
      'In Progress': 'bg-amber-500/20 text-amber-500',
      Completed: 'bg-emerald-500/20 text-emerald-500',
      Cancelled: 'bg-red-500/20 text-red-500'
    };

    const typeColors = {
      'Check-up': 'text-emerald-500',
      'Follow-up': 'text-blue-500',
      'Consultation': 'text-violet-500',
      'Emergency': 'text-red-500'
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700/50 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Image
              src={appointment.patientAvatar}
              width={48}
              height={48}
              alt={appointment.patientName}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-medium">{appointment.patientName}</h3>
              <p className={`text-sm ${typeColors[appointment.type]}`}>
                {appointment.type}
              </p>
              <div className="flex items-center space-x-2 mt-2 text-sm text-slate-400">
                <Clock className="w-4 h-4" />
                <span>
                  {new Date(appointment.dateTime).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
                <span>({appointment.duration} mins)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs ${statusColors[appointment.status]}`}>
              {appointment.status}
            </span>
            <span className="flex items-center text-sm text-slate-400">
              <MapPin className="w-4 h-4 mr-1" />
              {appointment.location}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Phone className="w-4 h-4" />
              <span>{appointment.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>{appointment.contact.email}</span>
            </div>
          </div>
          {appointment.notes && (
            <p className="mt-3 text-sm text-slate-400">
              Note: {appointment.notes}
            </p>
          )}
        </div>
        
        <div className="mt-4 flex justify-end space-x-2">
          {appointment.status === 'Scheduled' && (
            <>
              <button className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30">
                <Check className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30">
                <X className="w-4 h-4" />
              </button>
            </>
          )}
          <button className="p-2 rounded-lg hover:bg-slate-700">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    );
  };

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
        <div className="p-4 md:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="p-2 hover:bg-slate-700 rounded-lg hidden md:block"
              >
                <ChevronRight 
                  className={`transform transition-transform ${isNavOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              <h1 className="text-2xl font-bold">Appointments</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search appointments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600">
                  <Plus className="w-4 h-4" />
                  <span>New Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  Todays Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-slate-400 mt-1">2 completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  Upcoming This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-slate-400 mt-1">5 tomorrow</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  Cancellation Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2%</div>
                <p className="text-xs text-emerald-500 mt-1">↓ 1.4% from last week</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  Average Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35m</div>
                <p className="text-xs text-slate-400 mt-1">Target: 30m</p>
              </CardContent>
            </Card>
          </div>

          {/* Appointments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mockAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;