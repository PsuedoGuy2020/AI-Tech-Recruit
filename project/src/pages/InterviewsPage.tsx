import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Calendar,
  Clock,
  Video,
  Phone as PhoneIcon,
  User,
  CheckCircle2,
  XCircle,
  MessageSquare,
  MoreVertical,
  Filter
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import { format, addDays } from 'date-fns';

interface InterviewsPageProps {
  onLogout: () => void;
}

const InterviewsPage = ({ onLogout }: InterviewsPageProps) => {
  const [activeTab, setActiveTab] = useState('interviews');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('upcoming');
  
  // Get current date in ISO format for date input
  const today = new Date().toISOString().split('T')[0];
  
  // Generate dates for the date picker
  const dates = [];
  for (let i = -3; i < 10; i++) {
    const date = addDays(new Date(), i);
    dates.push({
      date,
      day: format(date, 'EEE'),
      dayNumber: format(date, 'd'),
      isToday: i === 0,
    });
  }
  
  // Mock data for interviews
  const interviews = [
    {
      id: 1,
      candidate: {
        name: 'John Smith',
        position: 'Senior Frontend Developer',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      date: format(new Date(), 'yyyy-MM-dd'),
      time: '10:00 AM - 11:00 AM',
      type: 'video',
      typeName: 'Video Call',
      status: 'scheduled',
      interviewer: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
    },
    {
      id: 2,
      candidate: {
        name: 'Jane Doe',
        position: 'UX/UI Designer',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      date: format(new Date(), 'yyyy-MM-dd'),
      time: '2:00 PM - 3:00 PM',
      type: 'phone',
      typeName: 'Phone Call',
      status: 'scheduled',
      interviewer: {
        name: 'Sarah Miller',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
    },
    {
      id: 3,
      candidate: {
        name: 'Robert Johnson',
        position: 'DevOps Engineer',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      time: '11:30 AM - 12:30 PM',
      type: 'video',
      typeName: 'Video Call',
      status: 'scheduled',
      interviewer: {
        name: 'Mike Thompson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
    },
    {
      id: 4,
      candidate: {
        name: 'Emily Wilson',
        position: 'Backend Developer',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      date: format(addDays(new Date(), 2), 'yyyy-MM-dd'),
      time: '9:00 AM - 10:30 AM',
      type: 'onsite',
      typeName: 'On-site',
      status: 'scheduled',
      interviewer: {
        name: 'David Lee',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
    },
    {
      id: 5,
      candidate: {
        name: 'Michael Brown',
        position: 'Technical Lead',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
      date: format(addDays(new Date(), -1), 'yyyy-MM-dd'),
      time: '3:00 PM - 4:00 PM',
      type: 'video',
      typeName: 'Video Call',
      status: 'completed',
      interviewer: {
        name: 'Jennifer Parker',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      },
    },
  ];
  
  // Filter interviews based on selected date and view
  const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');
  const filteredInterviews = interviews.filter(interview => {
    if (view === 'upcoming') {
      const interviewDate = new Date(interview.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return interviewDate >= today && interview.date === selectedDateStr;
    } else if (view === 'past') {
      const interviewDate = new Date(interview.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return interviewDate < today || interview.status === 'completed';
    }
    return interview.date === selectedDateStr;
  });
  
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
          title="Interview Schedule" 
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
                placeholder="Search interviews..."
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
                <span>Schedule Interview</span>
              </button>
            </div>
          </div>
          
          {/* View Toggle */}
          <div className="flex border-b border-neutral-200 mb-6">
            <button 
              className={`px-4 py-2 border-b-2 ${
                view === 'upcoming' ? 'border-primary-600 text-primary-600 font-medium' : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setView('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-4 py-2 border-b-2 ${
                view === 'past' ? 'border-primary-600 text-primary-600 font-medium' : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setView('past')}
            >
              Past Interviews
            </button>
          </div>
          
          {/* Date Picker */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {dates.map((date) => (
                <button
                  key={date.dayNumber}
                  onClick={() => setSelectedDate(date.date)}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                    format(selectedDate, 'yyyy-MM-dd') === format(date.date, 'yyyy-MM-dd')
                      ? 'bg-primary-100 text-primary-800'
                      : date.isToday
                      ? 'bg-neutral-100 text-neutral-800'
                      : 'bg-white text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <span className="text-xs font-medium">{date.day}</span>
                  <span className={`text-lg ${date.isToday ? 'font-bold' : ''}`}>{date.dayNumber}</span>
                  {date.isToday && <span className="text-xs">Today</span>}
                </button>
              ))}
            </div>
          </div>
          
          {/* Interviews List */}
          {filteredInterviews.length > 0 ? (
            <div className="space-y-4">
              {filteredInterviews.map((interview) => (
                <motion.div 
                  key={interview.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex items-start">
                        <img 
                          src={interview.candidate.avatar} 
                          alt={interview.candidate.name} 
                          className="w-12 h-12 rounded-full object-cover" 
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-neutral-900">{interview.candidate.name}</h3>
                          <p className="text-sm text-neutral-500">{interview.candidate.position}</p>
                          
                          <div className="mt-2 flex flex-wrap items-center gap-3">
                            <div className="flex items-center text-neutral-600 text-sm">
                              <Calendar size={14} className="mr-1" />
                              {format(new Date(interview.date), 'MMMM d, yyyy')}
                            </div>
                            <div className="flex items-center text-neutral-600 text-sm">
                              <Clock size={14} className="mr-1" />
                              {interview.time}
                            </div>
                            <div className="flex items-center">
                              {interview.type === 'video' && <Video size={14} className="text-primary-600 mr-1" />}
                              {interview.type === 'phone' && <PhoneIcon size={14} className="text-primary-600 mr-1" />}
                              {interview.type === 'onsite' && <User size={14} className="text-primary-600 mr-1" />}
                              <span className="text-sm font-medium text-primary-600">{interview.typeName}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:items-end">
                        <div className="flex items-center">
                          <img 
                            src={interview.interviewer.avatar} 
                            alt={interview.interviewer.name} 
                            className="w-6 h-6 rounded-full object-cover" 
                          />
                          <span className="ml-2 text-sm text-neutral-600">Interviewer: {interview.interviewer.name}</span>
                        </div>
                        
                        {interview.status === 'scheduled' && view === 'upcoming' && (
                          <div className="mt-4 flex space-x-2">
                            <button className="btn btn-primary text-sm py-1 px-3">
                              Join Interview
                            </button>
                            <button className="p-2 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100">
                              <MoreVertical size={18} />
                            </button>
                          </div>
                        )}
                        
                        {interview.status === 'completed' && (
                          <div className="mt-4 flex space-x-2">
                            <button className="btn btn-ghost text-sm py-1 px-3 flex items-center">
                              <MessageSquare size={14} className="mr-1" />
                              View Feedback
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <Calendar size={48} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-lg font-medium text-neutral-800 mb-2">No interviews scheduled</h3>
              <p className="text-neutral-500 mb-4">There are no interviews scheduled for this date.</p>
              <button className="btn btn-primary">
                Schedule an Interview
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InterviewsPage;