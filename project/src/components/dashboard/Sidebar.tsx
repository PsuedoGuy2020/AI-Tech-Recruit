import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  CalendarDays, 
  Settings, 
  UserCircle,
  BrainCircuit,
  BarChart3, 
  HelpCircle,
  LogOut,
  X
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  onLogout: () => void;
}

const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  isMobileOpen, 
  setIsMobileOpen,
  onLogout
}: SidebarProps) => {
  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [activeTab, setIsMobileOpen]);

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (isMobileOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen, setIsMobileOpen]);

  // Prevent body scrolling when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileOpen]);

  const sidebarLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', value: 'overview', path: '/dashboard' },
    { icon: Briefcase, label: 'Jobs', value: 'jobs', path: '/jobs' },
    { icon: Users, label: 'Candidates', value: 'candidates', path: '/candidates' },
    { icon: CalendarDays, label: 'Interviews', value: 'interviews', path: '/interviews' },
    { icon: BrainCircuit, label: 'AI Screening', value: 'ai-screening', path: '/ai-screening' },
    { icon: BarChart3, label: 'Analytics', value: 'analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', value: 'settings', path: '/settings' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div id="sidebar" className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-neutral-200 h-screen sticky top-0">
        <div className="p-4 border-b border-neutral-200 flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="font-bold text-xl text-primary-900">HireAI</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3">
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.value}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.value
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
                onClick={() => setActiveTab(link.value)}
              >
                <link.icon size={20} className="mr-3" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" 
              alt="User Avatar" 
              className="w-10 h-10 rounded-full object-cover mr-3" 
            />
            <div>
              <p className="text-sm font-medium text-neutral-800">Demo User</p>
              <p className="text-xs text-neutral-500">demo@example.com</p>
            </div>
          </div>
          
          <div className="space-y-1">
            <Link
              to="/profile"
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
            >
              <UserCircle size={20} className="mr-3" />
              My Profile
            </Link>
            
            <Link
              to="/help"
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
            >
              <HelpCircle size={20} className="mr-3" />
              Help Center
            </Link>
            
            <button
              onClick={onLogout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
            >
              <LogOut size={20} className="mr-3" />
              Log Out
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileOpen(false)}
            />
            
            <motion.div
              id="mobile-sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl"
            >
              <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <span className="font-bold text-xl text-primary-900">HireAI</span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-3">
                <nav className="space-y-1">
                  {sidebarLinks.map((link) => (
                    <Link
                      key={link.value}
                      to={link.path}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === link.value
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                      onClick={() => setActiveTab(link.value)}
                    >
                      <link.icon size={20} className="mr-3" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="p-4 border-t border-neutral-200">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full object-cover mr-3" 
                  />
                  <div>
                    <p className="text-sm font-medium text-neutral-800">Demo User</p>
                    <p className="text-xs text-neutral-500">demo@example.com</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Link
                    to="/profile"
                    className="flex items-center w-full px-3 py-2 text-sm font-medium text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    <UserCircle size={20} className="mr-3" />
                    My Profile
                  </Link>
                  
                  <Link
                    to="/help"
                    className="flex items-center w-full px-3 py-2 text-sm font-medium text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    <HelpCircle size={20} className="mr-3" />
                    Help Center
                  </Link>
                  
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-3 py-2 text-sm font-medium text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    <LogOut size={20} className="mr-3" />
                    Log Out
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;