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
  Download,
  Share2,
  PieChart,
  TrendingUp,
  FileBarChart,
  ClipboardCheck,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Types
interface Report {
  id: string;
  title: string;
  type: string;
  date: string;
  department: string;
  status: 'Published' | 'Draft' | 'Under Review';
  author: string;
}

// Mock data
const mockReports: Report[] = [
  {
    id: "R001",
    title: "Monthly Patient Satisfaction Survey",
    type: "Survey Analysis",
    date: "2024-03-20",
    department: "Patient Relations",
    status: "Published",
    author: "Dr. Sarah Johnson"
  },
  {
    id: "R002",
    title: "Q1 Treatment Outcomes Report",
    type: "Clinical Analysis",
    date: "2024-03-15",
    department: "Clinical Operations",
    status: "Under Review",
    author: "Dr. Michael Chen"
  },
  {
    id: "R003",
    title: "Department Performance Metrics",
    type: "Performance Report",
    date: "2024-03-10",
    department: "Administration",
    status: "Published",
    author: "Dr. Emily Williams"
  }
];

const trendData = [
  { month: 'Jan', patients: 65, satisfaction: 85 },
  { month: 'Feb', patients: 75, satisfaction: 88 },
  { month: 'Mar', patients: 90, satisfaction: 92 },
  { month: 'Apr', patients: 85, satisfaction: 90 }
];

const ReportsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const navigation = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/doctors-portal" },
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
        ${path.includes('reports') 
          ? 'bg-emerald-500/20 text-emerald-500' 
          : 'text-slate-300 hover:bg-slate-800'}`}
    >
      <Icon className="w-5 h-5" />
      <span className={`${!isNavOpen ? 'hidden' : ''} transition-opacity duration-200`}>
        {label}
      </span>
    </motion.div>
  );

  const MetricCard = ({ 
    icon: Icon, 
    label, 
    value, 
    trend 
  }: { 
    icon: React.ComponentType<{ className?: string }>, 
    label: string, 
    value: string, 
    trend: string 
  }) => (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-slate-700/50 rounded-lg">
            <Icon className="w-6 h-6 text-emerald-500" />
          </div>
          <span className="text-emerald-500 text-sm">{trend}</span>
        </div>
        <div className="mt-4">
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm text-slate-400 mt-1">{label}</p>
        </div>
      </CardContent>
    </Card>
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
                  placeholder="Search reports..."
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

        {/* Reports Content */}
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              icon={FileBarChart}
              label="Total Reports"
              value="248"
              trend="+12% this month"
            />
            <MetricCard
              icon={ClipboardCheck}
              label="Completed Reports"
              value="185"
              trend="+8% this month"
            />
            <MetricCard
              icon={TrendingUp}
              label="Success Rate"
              value="92%"
              trend="+5% this month"
            />
            <MetricCard
              icon={PieChart}
              label="Data Coverage"
              value="95%"
              trend="+3% this month"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Patient Satisfaction Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip />
                      <Line type="monotone" dataKey="satisfaction" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Patient Volume Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip />
                      <Line type="monotone" dataKey="patients" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reports List */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Recent Reports</CardTitle>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-slate-700 rounded-lg">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>New Report</span>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockReports.map((report) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{report.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            report.status === 'Published' ? 'bg-emerald-500/20 text-emerald-500' :
                            report.status === 'Under Review' ? 'bg-yellow-500/20 text-yellow-500' :
                            'bg-slate-500/20 text-slate-500'
                          }`}>
                            {report.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">
                          {report.type} • {report.department} • By {report.author}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-slate-600 rounded-lg" title="View">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-600 rounded-lg" title="Download">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-600 rounded-lg" title="Share">
                          <Share2 className="w-4 h-4" />
                        </button>
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

export default ReportsPage;