import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Moon, Sun, User, Lock, Mail } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  // Form state
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // UI state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // If already logged in, redirect based on role
 /* useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        const userData = JSON.parse(user);

        if (userData.role === "student") {
          navigate("/student", { replace: true });
        } else if (userData.role === "admin") {
          navigate("/admin", { replace: true });
        }
      } catch {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, [navigate]);*/

  // Update form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
    if (success) setSuccess("");
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login function triggered");  // <---- Added console log here
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        setSuccess("Login successful! Redirecting...");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }

        // Redirect after 1 second
        setTimeout(() => {
          if (data.user.role === "student") {
            navigate("/student", { replace: true });
          } else if (data.user.role === "admin") {
            navigate("/admin", { replace: true });
          } else {
            setError("Unknown user role.");
          }
        }, 1000);
      } else {
        setError(data.message || "Login failed.");
      }
    } catch {
      setError(
        "Unable to connect to server. Please check your connection and ensure backend is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press to submit form
  const handleKeyPress = (e) => {
    if (
      e.key === "Enter" &&
      credentials.email.trim() !== "" &&
      credentials.password.trim() !== ""
    ) {
      handleLogin(e);
    }
  };

  return (
    <div
      className={`min-h-screen transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      } ${darkMode ? "dark" : ""}`}
    >
      {/* Background */}
      <div
        className={`fixed inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        }`}
      />

      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 ${
            darkMode ? "bg-blue-700" : "bg-blue-200"
          } rounded-full filter blur-3xl opacity-30 animate-pulse`}
        />
        <div
          className={`absolute top-3/4 right-1/4 w-72 h-72 ${
            darkMode ? "bg-purple-700" : "bg-purple-200"
          } rounded-full filter blur-3xl opacity-30 animate-pulse`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left side illustration */}
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
            <h2
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              } mb-4`}
            >
              Transform Your Learning Journey
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-lg`}
            >
              Access courses, track progress, and connect with peers in our
              comprehensive educational platform.
            </p>
          </div>
        </div>

        {/* Right side login form */}
        <div className="flex-1 lg:max-w-md xl:max-w-lg flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Dark mode toggle */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-800 bg-opacity-20 border-gray-700"
                    : "bg-white bg-opacity-20 border-white"
                } border border-opacity-30 hover:bg-opacity-30 transition-all duration-300`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Login Card */}
            <div
              className={`${
                darkMode
                  ? "bg-gray-800 bg-opacity-70 border-gray-700"
                  : "bg-white bg-opacity-70 border-white"
              } border border-opacity-20 rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl`}
            >
              {/* Logo and Title */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">ET</span>
                </div>
                <h1
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  } mb-2`}
                >
                  EduTech
                </h1>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  MKSSS Cummins College of Engineering for Women, Nagpur
                </p>
              </div>

              {/* Success Message */}
              {success && (
                <div
                  className={`mb-6 p-4 ${
                    darkMode
                      ? "bg-green-900 bg-opacity-20 border-green-800"
                      : "bg-green-50 border-green-200"
                  } border rounded-xl`}
                >
                  <p
                    className={`${
                      darkMode ? "text-green-400" : "text-green-600"
                    } text-sm text-center`}
                  >
                    {success}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div
                  className={`mb-6 p-4 ${
                    darkMode
                      ? "bg-red-900 bg-opacity-20 border-red-800"
                      : "bg-red-50 border-red-200"
                  } border rounded-xl`}
                >
                  <p
                    className={`${
                      darkMode ? "text-red-400" : "text-red-600"
                    } text-sm text-center`}
                  >
                    {error}
                  </p>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={credentials.email}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                      className={`block w-full pr-10 sm:text-sm rounded-md border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Mail
                        className={`w-5 h-5 ${
                          darkMode ? "text-gray-400" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      value={credentials.password}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                      className={`block w-full pr-10 sm:text-sm rounded-md border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isLoading
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150`}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}