import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Building,
  Lock,
  Bell,
  Smartphone,
  Briefcase,
  Palette,
  Users as UsersIcon,
  Save,
  ChevronRight
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

interface SettingsPageProps {
  onLogout: () => void;
}

const SettingsPage = ({ onLogout }: SettingsPageProps) => {
  const [activeTab, setActiveTab] = useState('settings');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
  
  const renderSettingsContent = () => {
    switch (activeSettingsTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
            
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="User Avatar" 
                  className="w-20 h-20 rounded-full object-cover" 
                />
                <div className="ml-4">
                  <button className="btn btn-secondary text-sm">Change Photo</button>
                  <button className="btn btn-ghost text-sm ml-2">Remove</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input"
                    placeholder="Enter your first name"
                    defaultValue="Demo"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="input"
                    placeholder="Enter your last name"
                    defaultValue="User"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="Enter your email"
                    defaultValue="demo@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input"
                    placeholder="Enter your phone number"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-neutral-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="input"
                  placeholder="Enter your job title"
                  defaultValue="Recruitment Manager"
                />
              </div>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-neutral-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="input"
                  placeholder="Tell us about yourself"
                  defaultValue="Experienced recruitment professional with 5+ years in tech recruiting. Passionate about finding the right talent for the right roles."
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary flex items-center gap-2">
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'company':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Company Settings</h2>
            
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <div className="ml-4">
                  <button className="btn btn-secondary text-sm">Change Logo</button>
                  <button className="btn btn-ghost text-sm ml-2">Remove</button>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="input"
                  placeholder="Enter company name"
                  defaultValue="HireAI Corporation"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-neutral-700 mb-1">
                    Industry
                  </label>
                  <select id="industry" className="input">
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-neutral-700 mb-1">
                    Company Size
                  </label>
                  <select id="companySize" className="input">
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1001+">1001+ employees</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="input"
                  placeholder="Enter company website"
                  defaultValue="https://www.hireai.example.com"
                />
              </div>
              
              <div>
                <label htmlFor="companyDescription" className="block text-sm font-medium text-neutral-700 mb-1">
                  Company Description
                </label>
                <textarea
                  id="companyDescription"
                  rows={4}
                  className="input"
                  placeholder="Describe your company"
                  defaultValue="HireAI is a cutting-edge recruitment platform leveraging artificial intelligence to streamline the hiring process and connect the best talent with the right opportunities."
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn btn-primary flex items-center gap-2">
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        );
        
      case 'security':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Change Password</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="input"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="input"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="input"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              
              <div className="flex mb-8">
                <button className="btn btn-primary">Update Password</button>
              </div>
              
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
              
              <div className="mb-6">
                <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                  <div>
                    <h4 className="font-medium text-neutral-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-neutral-500">Add an extra layer of security to your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b border-neutral-200">
                  <div>
                    <h4 className="font-medium text-neutral-900">Login Notifications</h4>
                    <p className="text-sm text-neutral-500">Receive email alerts when your account is accessed</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h4 className="font-medium text-neutral-900">Session Management</h4>
                    <p className="text-sm text-neutral-500">Manage active sessions on your account</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                    Manage Sessions
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
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
          title="Settings" 
          toggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Settings Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <nav className="p-2">
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'profile' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('profile')}
                  >
                    <User size={18} className="mr-3" />
                    Profile
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'company' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('company')}
                  >
                    <Building size={18} className="mr-3" />
                    Company
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'security' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('security')}
                  >
                    <Lock size={18} className="mr-3" />
                    Security
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'notifications' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('notifications')}
                  >
                    <Bell size={18} className="mr-3" />
                    Notifications
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'integrations' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('integrations')}
                  >
                    <Smartphone size={18} className="mr-3" />
                    Integrations
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'jobSettings' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('jobSettings')}
                  >
                    <Briefcase size={18} className="mr-3" />
                    Job Settings
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'branding' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('branding')}
                  >
                    <Palette size={18} className="mr-3" />
                    Branding
                  </button>
                  
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeSettingsTab === 'teams' ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                    onClick={() => setActiveSettingsTab('teams')}
                  >
                    <UsersIcon size={18} className="mr-3" />
                    Teams
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Settings Content */}
            <motion.div 
              key={activeSettingsTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 bg-white rounded-xl shadow-sm p-6"
            >
              {renderSettingsContent()}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;