import { Menu, Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title: string;
  toggleSidebar: () => void;
}

const Header = ({ title, toggleSidebar }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-neutral-200 py-3 px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden mr-3 text-neutral-500 hover:text-neutral-700"
            aria-label="Toggle Sidebar"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-neutral-800">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="input py-1.5 pr-8"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search size={18} className="text-neutral-400" />
            </div>
          </div>
          
          <div className="relative">
            <button className="relative p-1.5 rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary-600 rounded-full"></span>
            </button>
          </div>
          
          <div className="flex items-center">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" 
              alt="User Avatar" 
              className="w-8 h-8 rounded-full object-cover" 
            />
            <div className="hidden md:flex items-center ml-2">
              <span className="text-sm font-medium text-neutral-800">Demo User</span>
              <ChevronDown size={16} className="ml-1 text-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;