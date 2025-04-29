import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Plus,
  Star,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

interface CandidatesPageProps {
  onLogout: () => void;
}

const CandidatesPage = ({ onLogout }: CandidatesPageProps) => {
  const [activeTab, setActiveTab] = useState('candidates');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [stageFilter, setStageFilter] = useState('all');
  
  // Mock data for candidates
  const candidates = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Senior Frontend Developer',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      applied: '3 days ago',
      stage: 'applied',
      stageName: 'Applied',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'UX/UI Designer',
      email: 'jane.doe@example.com',
      phone: '+1 (555) 234-5678',
      applied: '1 week ago',
      stage: 'screening',
      stageName: 'Screening',
      rating: 4,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      position: 'DevOps Engineer',
      email: 'robert.johnson@example.com',
      phone: '+1 (555) 345-6789',
      applied: '2 weeks ago',
      stage: 'interview',
      stageName: 'Interview',
      rating: 3,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 4,
      name: 'Emily Wilson',
      position: 'Backend Developer',
      email: 'emily.wilson@example.com',
      phone: '+1 (555) 456-7890',
      applied: '3 days ago',
      stage: 'assessment',
      stageName: 'Assessment',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 5,
      name: 'Michael Brown',
      position: 'Technical Lead',
      email: 'michael.brown@example.com',
      phone: '+1 (555) 567-8901',
      applied: '1 month ago',
      stage: 'offer',
      stageName: 'Offer',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      email: 'sarah.johnson@example.com',
      phone: '+1 (555) 678-9012',
      applied: '2 weeks ago',
      stage: 'rejected',
      stageName: 'Rejected',
      rating: 2,
      avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];
  
  // Filter candidates based on selected stage
  const filteredCandidates = stageFilter === 'all' 
    ? candidates 
    : candidates.filter(candidate => candidate.stage === stageFilter);
  
  // Stage counts for filters
  const stageCounts = {
    all: candidates.length,
    applied: candidates.filter(c => c.stage === 'applied').length,
    screening: candidates.filter(c => c.stage === 'screening').length,
    interview: candidates.filter(c => c.stage === 'interview').length,
    assessment: candidates.filter(c => c.stage === 'assessment').length,
    offer: candidates.filter(c => c.stage === 'offer').length,
    rejected: candidates.filter(c => c.stage === 'rejected').length,
  };
  
  // Stage colors for badges
  const stageColors = {
    applied: 'bg-blue-100 text-blue-800',
    screening: 'bg-purple-100 text-purple-800',
    interview: 'bg-amber-100 text-amber-800',
    assessment: 'bg-teal-100 text-teal-800',
    offer: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
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
          title="Candidate Management" 
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
                placeholder="Search candidates..."
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
                <span>Add Candidate</span>
              </button>
            </div>
          </div>
          
          {/* Stage Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'all' ? 'bg-primary-100 text-primary-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('all')}
            >
              All ({stageCounts.all})
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'applied' ? 'bg-blue-100 text-blue-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('applied')}
            >
              Applied ({stageCounts.applied})
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'screening' ? 'bg-purple-100 text-purple-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('screening')}
            >
              Screening ({stageCounts.screening})
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'interview' ? 'bg-amber-100 text-amber-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('interview')}
            >
              Interview ({stageCounts.interview})
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'assessment' ? 'bg-teal-100 text-teal-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('assessment')}
            >
              Assessment ({stageCounts.assessment})
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'offer' ? 'bg-green-100 text-green-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('offer')}
            >
              Offer ({stageCounts.offer})
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                stageFilter === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              onClick={() => setStageFilter('rejected')}
            >
              Rejected ({stageCounts.rejected})
            </button>
          </div>
          
          {/* Candidates List */}
          <div className="space-y-4">
            {filteredCandidates.map((candidate) => (
              <motion.div 
                key={candidate.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center">
                      <img 
                        src={candidate.avatar} 
                        alt={candidate.name} 
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-neutral-900">{candidate.name}</h3>
                        <p className="text-sm text-neutral-500">{candidate.position}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${stageColors[candidate.stage as keyof typeof stageColors]}`}>
                        {candidate.stageName}
                      </span>
                      
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${i < candidate.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-300'}`} 
                          />
                        ))}
                      </div>
                      
                      <button className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Mail size={16} className="text-neutral-400 mr-2" />
                      <a href={`mailto:${candidate.email}`} className="text-sm text-primary-600 hover:underline">
                        {candidate.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="text-neutral-400 mr-2" />
                      <a href={`tel:${candidate.phone}`} className="text-sm text-neutral-600">
                        {candidate.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-neutral-400 mr-2" />
                      <span className="text-sm text-neutral-600">Applied {candidate.applied}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button className="btn btn-ghost text-primary-600 hover:text-primary-700 flex items-center gap-1">
                      View Details
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CandidatesPage;