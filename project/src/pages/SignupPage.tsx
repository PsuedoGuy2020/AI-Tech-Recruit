import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, AtSign, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  const features = [
    'AI-powered screening interviews',
    'Candidate tracking system',
    'Automated scheduling',
    'Team collaboration tools',
    'Detailed analytics & reporting',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex flex-col justify-center p-4">
      <div className="absolute top-6 left-6">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mr-2">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="font-bold text-lg text-primary-900">HireAI</span>
        </Link>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 p-8"
          >
            <div className="max-w-md mx-auto">
              <div className="text-center md:text-left mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Create your account</h1>
                <p className="text-neutral-600 mt-2">Start streamlining your recruitment process today</p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input pl-10 w-full"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AtSign size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input pl-10 w-full"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input pl-10 w-full"
                      placeholder="Minimum 8 characters"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary w-full py-2.5"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </div>
                    ) : (
                      "Create account"
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center md:text-left">
                <p className="text-sm text-neutral-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-primary-600 hover:text-primary-700">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-900 p-8 text-white flex items-center"
          >
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-6">Transform your recruitment process with HireAI</h2>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-300 mt-0.5 mr-3 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="glass-card bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-300 text-primary-900 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-white/80">CTO, TechRecruit Inc.</p>
                    <p className="mt-2 text-sm">"HireAI has cut our time-to-hire by 40% and improved our quality of hires. The AI screening is incredibly accurate!"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;