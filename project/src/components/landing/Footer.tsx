import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl text-white">HireAI</span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-xs">
              HireAI is revolutionizing technical recruitment with AI-powered screening, intelligent automation, and data-driven hiring decisions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Legal</Link></li>
              <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} HireAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link to="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;