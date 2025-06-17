
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';

type AuthMode = 'signup' | 'login' | 'forgot-password';

interface AuthContainerProps {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ mode, onModeChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { mode, formData });
    // Handle authentication logic here
  };

  if (mode === 'signup') {
    return (
      <Card className="w-full max-w-md mx-auto p-8 bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
            <div className="text-white text-2xl">🌱</div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Let's Get You Started</h1>
          <p className="text-gray-600">Create your account to begin sharing your impact.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="fullName" className="sr-only">Full Name</Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="email" className="sr-only">Work Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="password" className="sr-only">Create Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pl-12 pr-12 h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Sign Up
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => onModeChange('login')}
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              Log in here
            </button>
          </p>
        </div>
      </Card>
    );
  }

  if (mode === 'login') {
    return (
      <Card className="w-full max-w-md mx-auto p-8 bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
            <div className="text-white text-2xl">👋</div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue tracking your performance contributions.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="email" className="sr-only">Work Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="password" className="sr-only">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pl-12 pr-12 h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Login
          </Button>
        </form>

        <div className="text-center mt-6 space-y-2">
          <p className="text-gray-600">
            <button
              onClick={() => onModeChange('forgot-password')}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Forgot your password? Reset it here
            </button>
          </p>
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => onModeChange('signup')}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </Card>
    );
  }

  if (mode === 'forgot-password') {
    return (
      <Card className="w-full max-w-md mx-auto p-8 bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
            <div className="text-white text-2xl">🔄</div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Forgot Password?</h1>
          <p className="text-gray-600">No worries. Enter your email, and we'll send you a reset link.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Label htmlFor="email" className="sr-only">Work Email</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="email"
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-12 h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-2xl text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Send Reset Link
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Remembered your password?{' '}
            <button
              onClick={() => onModeChange('login')}
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Log in
            </button>
          </p>
        </div>
      </Card>
    );
  }

  return null;
};

export default AuthContainer;
