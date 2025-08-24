import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Moon, Sun, User, Lock, Mail } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError(""); // Clear error when user starts typing
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const { username, password } = credentials;

    if (username === "student@test.com" && password === "1234") {
      navigate("/student");
    } else if (username === "admin@test.com" && password === "admin123") {
      navigate("/admin");
    } else {
      setError("Invalid credentials. Please try again.");
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'} ${darkMode ? 'dark' : ''}`}>
      {/* Background with gradient */}
      <div className={`fixed inset-0 ${darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`} />
      
      {/* Floating shapes for visual appeal */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${darkMode ? 'bg-blue-700' : 'bg-blue-200'} rounded-full filter blur-3xl opacity-30 animate-pulse`} />
        <div className={`absolute top-3/4 right-1/4 w-72 h-72 ${darkMode ? 'bg-purple-700' : 'bg-purple-200'} rounded-full filter blur-3xl opacity-30 animate-pulse`} style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Illustration (Desktop Only) */}
        <div className="hidden lg:flex lg:flex-1 items-center justify-center p-12">
          <div className="max-w-lg text-center">
            <div className="w-96 h-96 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-white">
                <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <User size={64} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Welcome to EduTech</h3>
                <p className="text-blue-100">Your gateway to digital learning</p>
              </div>
            </div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
              Transform Your Learning Journey
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
              Access courses, track progress, and connect with peers in our comprehensive educational platform.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 lg:max-w-md xl:max-w-lg flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Dark Mode Toggle */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 bg-opacity-20 border-gray-700' : 'bg-white bg-opacity-20 border-white'} border border-opacity-30 hover:bg-opacity-30 transition-all duration-300`}
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>

            {/* Login Card */}
            <div className={`${darkMode ? 'bg-gray-800 bg-opacity-70 border-gray-700' : 'bg-white bg-opacity-70 border-white'} border border-opacity-20 rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl`}>
              {/* Logo and Title */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">ET</span>
                </div>
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>EduTech</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>MKSSS Cummins College of Engineering for Women, Nagpur</p>
              </div>

              {/* Error Message */}
              {error && (
                <div className={`mb-6 p-4 ${darkMode ? 'bg-red-900 bg-opacity-20 border-red-800' : 'bg-red-50 border-red-200'} border rounded-xl`}>
                  <p className={`${darkMode ? 'text-red-400' : 'text-red-600'} text-sm text-center`}>{error}</p>
                </div>
              )}

              {/* Test Credentials Info */}
              <div className={`mb-6 p-4 ${darkMode ? 'bg-blue-900 bg-opacity-20 border-blue-800' : 'bg-blue-50 border-blue-200'} border rounded-xl`}>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-xs text-center font-medium mb-2`}>Test Credentials:</p>
                <div className={`${darkMode ? 'text-blue-300' : 'text-blue-700'} text-xs space-y-1`}>
                  <div>Student: student@test.com / 1234</div>
                  <div>Admin: admin@test.com / admin123</div>
                </div>
              </div>

              {/* Login Form */}
              <div className="space-y-6">
                {/* Username Input */}
                <div>
                  <label htmlFor="username" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Username / Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="username"
                      name="username"
                      type="email"
                      value={credentials.username}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className={`w-full pl-12 pr-4 py-3 ${darkMode ? 'bg-gray-700 bg-opacity-50 border-gray-600 text-white placeholder-gray-400' : 'bg-white bg-opacity-50 border-gray-200 text-gray-800 placeholder-gray-500'} border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={credentials.password}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className={`w-full pl-12 pr-12 py-3 ${darkMode ? 'bg-gray-700 bg-opacity-50 border-gray-600 text-white placeholder-gray-400' : 'bg-white bg-opacity-50 border-gray-200 text-gray-800 placeholder-gray-500'} border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Remember me</span>
                  </label>
                  <button className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline transition-colors`}>
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  disabled={isLoading || !credentials.username || !credentials.password}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Logging in...
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}