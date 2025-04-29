import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Plus, 
  Filter,
  Trash2,
  Users,
  Clock,
  MoreVertical,
  Edit,
  Eye,
  Copy,
  Archive
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

interface JobsPageProps {
  onLogout: () => void;
}

const JobsPage = ({ onLogout }: JobsPageProps) => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  
  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote (US)',
      type: 'Full-time',
      applicants: 24,
      status: 'active',
      published: '2 weeks ago',
      color: 'bg-green-500',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      applicants: 18,
      status: 'active',
      published: '1 week ago',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      applicants: 12,
      status: 'active',
      published: '3 days ago',
      color: 'bg-green-500',
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      applicants: 30,
      status: 'active',
      published: '1 month ago',
      color: 'bg-green-500',
    },
    {
      id: 5,
      title: 'Backend Developer (Node.js)',
      department: 'Engineering',
      location: 'Remote (US)',
      type: 'Contract',
      applicants: 16,
      status: 'draft',
      published: 'Not published',
      color: 'bg-neutral-400',
    },
    {
      id: 6,
      title: 'Technical Support Specialist',
      department: 'Customer Success',
      location: 'Austin, TX',
      type: 'Full-time',
      applicants: 8,
      status: 'closed',
      published: 'Closed yesterday',
      color: 'bg-red-500',
    },
  ];
  
  const handleDropdownToggle = (jobId: number) => {
    if (dropdownOpen === jobId) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(jobId);
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
          title="Job Positions" 
          toggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                className="input pl-10 w-full"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="btn btn-secondary flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="btn btn-primary flex items-center gap-2">
                <Plus size={16} />
                <span>Create New Job</span>
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-neutral-200 mb-6">
            <button className="px-4 py-2 border-b-2 border-primary-600 text-primary-600 font-medium">
              All Jobs (6)
            </button>
            <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
              Active (4)
            </button>
            <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
              Drafts (1)
            </button>
            <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
              Closed (1)
            </button>
          </div>
          
          {/* Jobs List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Job Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Applicants
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {jobs.map((job) => (
                    <motion.tr 
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-neutral-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full ${job.color} flex items-center justify-center`}>
                            <Briefcase className="text-white" size={18} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-neutral-900">{job.title}</div>
                            <div className="text-sm text-neutral-500">{job.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-neutral-900">{job.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-neutral-900">{job.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-neutral-900">
                          <Users size={16} className="mr-2 text-neutral-400" />
                          {job.applicants}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          job.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : job.status === 'draft' 
                            ? 'bg-neutral-100 text-neutral-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-neutral-500">
                          <Clock size={16} className="mr-2 text-neutral-400" />
                          {job.published}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                        <button 
                          onClick={() => handleDropdownToggle(job.id)}
                          className="text-neutral-500 hover:text-neutral-700 p-1 rounded-full hover:bg-neutral-100"
                        >
                          <MoreVertical size={18} />
                        </button>
                        
                        {dropdownOpen === job.id && (
                          <div className="absolute right-6 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div className="py-1">
                              <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex items-center">
                                <Eye size={16} className="mr-2" />
                                View Details
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex items-center">
                                <Edit size={16} className="mr-2" />
                                Edit Job
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex items-center">
                                <Copy size={16} className="mr-2" />
                                Duplicate
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex items-center">
                                <Archive size={16} className="mr-2" />
                                Archive
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-neutral-100 flex items-center">
                                <Trash2 size={16} className="mr-2" />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobsPage;