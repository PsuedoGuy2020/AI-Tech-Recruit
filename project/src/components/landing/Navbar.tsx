import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
              HireAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#features" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/#testimonials" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/#about" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
              }`}
            >
              Log In
            </Link>
            <Link 
              to="/signup" 
              className="btn btn-primary text-sm px-5"
            >
              Sign Up Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-neutral-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-neutral-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-4 p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/#features" 
                className="text-neutral-800 hover:text-primary-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/#pricing" 
                className="text-neutral-800 hover:text-primary-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-neutral-800 hover:text-primary-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/#about" 
                className="text-neutral-800 hover:text-primary-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 border-t border-neutral-200 flex flex-col space-y-3">
                <Link 
                  to="/login" 
                  className="btn btn-ghost justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link 
                  to="/signup" 
                  className="btn btn-primary justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up Free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;