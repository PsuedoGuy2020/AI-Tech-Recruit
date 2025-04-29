import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  User
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Mock data for charts
  const pieData = [
    { name: 'Applied', value: 54 },
    { name: 'Screened', value: 32 },
    { name: 'Interviewed', value: 18 },
    { name: 'Offered', value: 6 },
  ];
  
  const areaData = [
    { date: 'Jan', applications: 20, interviews: 10 },
    { date: 'Feb', applications: 35, interviews: 15 },
    { date: 'Mar', applications: 30, interviews: 20 },
    { date: 'Apr', applications: 45, interviews: 25 },
    { date: 'May', applications: 50, interviews: 30 },
    { date: 'Jun', applications: 65, interviews: 35 },
  ];
  
  const COLORS = ['#8b5cf6', '#6d28d9', '#4c1d95', '#2e1065'];
  
  // Mock data for recent activities
  const recentActivities = [
    { 
      id: 1, 
      type: 'application', 
      name: 'John Smith', 
      position: 'Frontend Developer', 
      time: '2 hours ago', 
      status: 'new',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 2, 
      type: 'interview', 
      name: 'Jane Doe', 
      position: 'UX Designer', 
      time: '3 hours ago', 
      status: 'completed',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 3, 
      type: 'offer', 
      name: 'Robert Johnson', 
      position: 'DevOps Engineer', 
      time: '5 hours ago', 
      status: 'accepted',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 4, 
      type: 'application', 
      name: 'Emily Wilson', 
      position: 'Backend Developer', 
      time: '1 day ago', 
      status: 'new',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
  ];
  
  // Mock data for upcoming interviews
  const upcomingInterviews = [
    { 
      id: 1, 
      name: 'Michael Brown', 
      position: 'Backend Developer', 
      time: 'Today, 3:00 PM', 
      type: 'Technical',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      position: 'Product Manager', 
      time: 'Tomorrow, 11:00 AM', 
      type: 'Cultural',
      avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 3, 
      name: 'David Lee', 
      position: 'Frontend Developer', 
      time: 'Tomorrow, 2:30 PM', 
      type: 'Technical',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
  ];
  
  return (
    <div className="min-h-screen bg-neutral-50 flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
        onLogout={onLogout}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Dashboard" 
          toggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-neutral-800 mb-2">Welcome back, Demo User</h1>
            <p className="text-neutral-600">Here's what's happening with your recruitment today.</p>
          </div>
          
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="dashboard-card flex items-center"
            >
              <div className="rounded-full p-2 bg-blue-100 text-blue-600 mr-4">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-medium">Open Positions</p>
                <p className="text-2xl font-bold text-neutral-800">12</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="dashboard-card flex items-center"
            >
              <div className="rounded-full p-2 bg-purple-100 text-primary-600 mr-4">
                <Users size={24} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-medium">Total Candidates</p>
                <p className="text-2xl font-bold text-neutral-800">254</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="dashboard-card flex items-center"
            >
              <div className="rounded-full p-2 bg-green-100 text-green-600 mr-4">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-medium">Interviews This Week</p>
                <p className="text-2xl font-bold text-neutral-800">18</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="dashboard-card flex items-center"
            >
              <div className="rounded-full p-2 bg-amber-100 text-amber-600 mr-4">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-medium">Time-to-Hire (Avg)</p>
                <p className="text-2xl font-bold text-neutral-800">14 days</p>
              </div>
            </motion.div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="dashboard-card"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-800">Recruitment Funnel</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="dashboard-card"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-800">Recruitment Activity</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="applications" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
                    <Area type="monotone" dataKey="interviews" stackId="2" stroke="#6d28d9" fill="#6d28d9" fillOpacity={0.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
          
          {/* Recent Activity and Upcoming Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="dashboard-card"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-800">Recent Activity</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                    <div className="mr-3">
                      <img 
                        src={activity.avatar} 
                        alt={activity.name} 
                        className="w-10 h-10 rounded-full object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-neutral-800">{activity.name}</p>
                      <p className="text-sm text-neutral-500">{activity.position}</p>
                      <div className="flex items-center mt-1">
                        {activity.type === 'application' && (
                          <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">New Application</span>
                        )}
                        {activity.type === 'interview' && (
                          <span className="text-xs font-medium bg-purple-100 text-primary-700 px-2 py-0.5 rounded-full">Interview Completed</span>
                        )}
                        {activity.type === 'offer' && (
                          <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Offer Accepted</span>
                        )}
                        <span className="text-xs text-neutral-400 ml-2">{activity.time}</span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 text-neutral-400 hover:text-neutral-600">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="dashboard-card"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-800">Upcoming Interviews</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  View Calendar <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div key={interview.id} className="flex items-start p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                    <div className="mr-3">
                      <img 
                        src={interview.avatar} 
                        alt={interview.name} 
                        className="w-10 h-10 rounded-full object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-neutral-800">{interview.name}</p>
                      <p className="text-sm text-neutral-500">{interview.position}</p>
                      <div className="flex items-center mt-1">
                        <Calendar size={14} className="text-neutral-400 mr-1" />
                        <span className="text-xs text-neutral-500">{interview.time}</span>
                        <span className="mx-2 text-neutral-300">•</span>
                        <span className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                          {interview.type} Interview
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex space-x-2">
                      <button className="p-1.5 rounded-md text-neutral-500 hover:text-green-600 hover:bg-green-50">
                        <CheckCircle2 size={18} />
                      </button>
                      <button className="p-1.5 rounded-md text-neutral-500 hover:text-red-600 hover:bg-red-50">
                        <XCircle size={18} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="pt-2 text-center">
                  <button className="btn btn-ghost text-sm">+ Schedule New Interview</button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;