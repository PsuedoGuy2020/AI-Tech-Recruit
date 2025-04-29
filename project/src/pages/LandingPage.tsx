import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, Users, Clock, Shield, MessageSquare, Settings, CheckCircle } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.staggered-item').forEach(item => {
      observerRef.current?.observe(item);
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-400)_0,_transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary-700 text-white text-sm font-medium mb-6">
                Revolutionizing Technical Recruiting
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hire the <span className="text-primary-300">best talent</span> with AI-powered precision
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                HireAI streamlines your technical recruitment process with intelligent automation, voice-based screening, and data-driven candidate evaluation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/signup" 
                  className="btn btn-primary px-8 py-3 text-base"
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/login" 
                  className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 text-base"
                >
                  Log In
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-6 rounded-2xl shadow-xl">
                <div className="aspect-video relative bg-gradient-to-tr from-primary-900 to-primary-700 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <BrainCircuit size={64} className="mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-medium">AI-Powered Interviewing Demo</h3>
                      <p className="opacity-70 text-sm mt-2">Click to watch how HireAI works</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100 text-primary-600">
                      <CheckCircle size={16} />
                    </div>
                    <span>AI-driven technical screening interviews</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100 text-primary-600">
                      <CheckCircle size={16} />
                    </div>
                    <span>Comprehensive candidate evaluation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100 text-primary-600">
                      <CheckCircle size={16} />
                    </div>
                    <span>Automated scheduling and follow-ups</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-radial from-primary-400 to-transparent rounded-full blur-xl opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-radial from-purple-400 to-transparent rounded-full blur-xl opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 staggered-item">
            <h2 className="text-3xl font-bold mb-4">Streamline Your Entire Recruitment Workflow</h2>
            <p className="text-neutral-600 text-lg">HireAI combines powerful AI with human-centered design to transform how you recruit technical talent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="staggered-item p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <BrainCircuit className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Screening</h3>
              <p className="text-neutral-600">Conduct intelligent voice-based screening interviews to evaluate technical skills efficiently.</p>
            </div>
            
            <div className="staggered-item p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidate Tracking</h3>
              <p className="text-neutral-600">Manage candidates through customizable pipelines with automated status updates.</p>
            </div>
            
            <div className="staggered-item p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Clock className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Scheduling</h3>
              <p className="text-neutral-600">Eliminate scheduling headaches with intelligent calendar integration and reminders.</p>
            </div>
            
            <div className="staggered-item p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bias Reduction</h3>
              <p className="text-neutral-600">Use objective AI evaluation to minimize bias in your hiring process.</p>
            </div>
            
            <div className="staggered-item p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <MessageSquare className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-neutral-600">Share feedback and collaborate seamlessly with your hiring team.</p>
            </div>
            
            <div className="staggered-item p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Settings className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Workflows</h3>
              <p className="text-neutral-600">Adapt the platform to your specific recruitment process and requirements.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto staggered-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your technical hiring?</h2>
            <p className="text-xl opacity-90 mb-8">Join hundreds of companies that are saving time and finding better candidates with HireAI.</p>
            <Link 
              to="/signup" 
              className="btn bg-white text-primary-800 hover:bg-neutral-100 px-8 py-3 text-lg font-medium"
            >
              Start Your Free Trial
            </Link>
            <p className="mt-4 text-sm opacity-80">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;