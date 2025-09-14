import React, { useState, useEffect } from 'react';
import { 
  Calendar, Users, TrendingUp, Eye, Heart, Share2, MapPin, Trophy, Phone, Mail, 
  Filter, Plus, Upload, Bell, Settings, Activity, BarChart3, Award, Star,
  Download, FileText, Zap, Brain, MessageCircle, Target, Clock, CheckCircle,
  X, Edit, Trash2, Send, UserCheck, AlertCircle, PieChart, LineChart,
  Medal, Crown, Gift, Sparkles, Shield, BookOpen, Megaphone
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [events, setEvents] = useState([]);
  const [students, setStudents] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [notifications, setNotifications] = useState([]);
  
  const [stats, setStats] = useState({
    totalEvents: 45,
    activeStudents: 2847,
    certificatesIssued: 1250,
    totalPoints: 45670,
    engagement: 78.5,
    pendingApprovals: 23
  });

  // Mock data initialization
  useEffect(() => {
    setEvents([
      {
        id: 1,
        title: 'TechHack 2025',
        category: 'Technical',
        level: 'National',
        status: 'ongoing',
        registrations: 245,
        maxRegistrations: 300,
        views: 1250,
        likes: 89,
        engagement: 85.2,
        prize: 50000,
        venue: 'Main Auditorium',
        coordinator: { name: 'Dr. Smith', phone: '+91-9876543210', email: 'smith@college.edu' },
        poster: '/api/placeholder/300/200',
        deadline: '2025-09-15',
        points: { winner: 25, runnerup: 15, participation: 10 }
      },
      {
        id: 2,
        title: 'Cultural Fest',
        category: 'Cultural',
        level: 'Inter',
        status: 'completed',
        registrations: 180,
        maxRegistrations: 200,
        views: 890,
        likes: 67,
        engagement: 72.1,
        prize: 25000,
        venue: 'Cultural Center',
        coordinator: { name: 'Prof. Johnson', phone: '+91-9876543211', email: 'johnson@college.edu' },
        poster: '/api/placeholder/300/200',
        deadline: '2025-08-20',
        points: { winner: 20, runnerup: 12, participation: 8 },
        resultsPublished: true
      }
    ]);

    setStudents([
      {
        id: 1,
        name: 'Arjun Patel',
        email: 'arjun@student.edu',
        totalPoints: 145,
        eventsParticipated: 8,
        certificates: 5,
        rank: 1,
        achievements: ['Tech Champion', 'Active Participant'],
        avatar: '/api/placeholder/40/40'
      },
      {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya@student.edu',
        totalPoints: 132,
        eventsParticipated: 6,
        certificates: 4,
        rank: 2,
        achievements: ['Cultural Star', 'Team Player'],
        avatar: '/api/placeholder/40/40'
      },
      {
        id: 3,
        name: 'Rahul Singh',
        email: 'rahul@student.edu',
        totalPoints: 118,
        eventsParticipated: 7,
        certificates: 3,
        rank: 3,
        achievements: ['Sports Excellence'],
        avatar: '/api/placeholder/40/40'
      }
    ]);

    setCertificates([
      {
        id: 1,
        studentId: 1,
        eventId: 2,
        type: 'Winner',
        uploadedAt: '2025-08-25',
        status: 'issued',
        downloadUrl: '#'
      },
      {
        id: 2,
        studentId: 2,
        eventId: 2,
        type: 'Participation',
        uploadedAt: '2025-08-25',
        status: 'pending',
        downloadUrl: '#'
      }
    ]);

    setNotifications([
      {
        id: 1,
        title: 'New Event Registration Open',
        message: 'TechHack 2025 registration is now open!',
        type: 'event',
        scheduled: false,
        sent: true,
        sentAt: '2025-08-24T10:00:00Z'
      },
      {
        id: 2,
        title: 'Certificate Upload Reminder',
        message: 'Don\'t forget to upload certificates for Cultural Fest',
        type: 'reminder',
        scheduled: true,
        sent: false,
        scheduleFor: '2025-08-26T09:00:00Z'
      }
    ]);
  }, []);

  const categories = ['all', 'Technical', 'Cultural', 'Sports', 'Social'];
  const categoryColors = {
    Technical: 'from-blue-500 to-cyan-500',
    Cultural: 'from-pink-500 to-rose-500',
    Sports: 'from-green-500 to-emerald-500',
    Social: 'from-orange-500 to-amber-500',
    all: 'from-purple-500 to-indigo-500'
  };

  // Glassmorphism card component
  const GlassCard = ({ children, className = '', blur = 'backdrop-blur-lg' }) => (
    <div className={`bg-white/10 ${blur} border border-white/20 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );

  const StatCard = ({ icon: Icon, title, value, trend, color, subtitle = '' }) => (
    <GlassCard className="p-6 hover:bg-white/15 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
          {subtitle && <p className="text-white/60 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      {trend && (
        <div className="flex items-center mt-4">
          <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
          <span className="text-green-400 text-sm font-medium">{trend}% vs last month</span>
        </div>
      )}
    </GlassCard>
  );

  const EventManagementTab = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Event Management</h2>
          <p className="text-white/70">Create, manage and monitor all college events</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
          <Plus className="h-5 w-5 mr-2" />
          New Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <GlassCard key={event.id} className="p-6 hover:bg-white/15 transition-all duration-300">
            <div className="relative mb-4">
              <img 
                src={event.poster} 
                alt={event.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[event.category]}`}>
                  {event.level}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  event.status === 'completed' ? 'bg-green-500/80' :
                  event.status === 'ongoing' ? 'bg-blue-500/80' :
                  'bg-yellow-500/80'
                } text-white`}>
                  {event.status}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-white/70 text-sm mb-4">{event.category} • {event.venue}</p>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Registrations</span>
                <span className="text-white font-semibold">{event.registrations}/{event.maxRegistrations}</span>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(event.registrations / event.maxRegistrations) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                {event.status === 'completed' && !event.resultsPublished && (
                  <button className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
                    Publish Results
                  </button>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );

  const CertificateManagementTab = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Certificate Management</h2>
          <p className="text-white/70">Upload, manage and track student certificates</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
            <Upload className="h-5 w-5 mr-2" />
            Bulk Upload
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
            <Award className="h-5 w-5 mr-2" />
            Individual Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Upload className="h-6 w-6 mr-2 text-blue-400" />
            Quick Upload
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Select Event</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Choose Event</option>
                {events.map(event => (
                  <option key={event.id} value={event.id} className="bg-gray-800">{event.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Certificate Type</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="winner" className="bg-gray-800">Winner</option>
                <option value="runnerup" className="bg-gray-800">Runner-up</option>
                <option value="participation" className="bg-gray-800">Participation</option>
                <option value="volunteer" className="bg-gray-800">Volunteer</option>
              </select>
            </div>
            <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <Upload className="h-8 w-8 text-white/50 mx-auto mb-2" />
              <p className="text-white/70 text-sm">Drop files here or click to browse</p>
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all">
              Upload Certificates
            </button>
          </div>
        </GlassCard>

        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-purple-400" />
              Recent Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((cert) => {
                const student = students.find(s => s.id === cert.studentId);
                const event = events.find(e => e.id === cert.eventId);
                return (
                  <div key={cert.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3">
                      <img src={student?.avatar} alt={student?.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="text-white font-semibold">{student?.name}</p>
                        <p className="text-white/60 text-sm">{event?.title} • {cert.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cert.status === 'issued' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {cert.status}
                      </span>
                      <button className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors">
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );

  const GamificationTab = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Gamification Controls</h2>
          <p className="text-white/70">Manage point system, leaderboards and achievements</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
          <Sparkles className="h-5 w-5 mr-2" />
          Create Achievement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Target className="h-6 w-6 mr-2 text-yellow-400" />
            Point System Configuration
          </h3>
          <div className="space-y-4">
            {['Winner', 'Runner-up', 'Participation', 'Volunteer'].map((type) => (
              <div key={type} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white font-medium">{type}</span>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    className="w-16 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-center focus:ring-2 focus:ring-yellow-500"
                    defaultValue={type === 'Winner' ? 25 : type === 'Runner-up' ? 15 : type === 'Participation' ? 10 : 5}
                  />
                  <span className="text-white/70 text-sm">pts</span>
                </div>
              </div>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all">
              Update Point System
            </button>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Crown className="h-6 w-6 mr-2 text-purple-400" />
            Top Performers
          </h3>
          <div className="space-y-3">
            {students.slice(0, 5).map((student, index) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                    index === 2 ? 'bg-gradient-to-r from-amber-400 to-amber-600' :
                    'bg-gradient-to-r from-blue-400 to-blue-600'
                  } text-white`}>
                    {index + 1}
                  </div>
                  <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-white font-medium text-sm">{student.name}</p>
                    <p className="text-white/60 text-xs">{student.eventsParticipated} events</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{student.totalPoints}</p>
                  <p className="text-white/60 text-xs">points</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Medal className="h-6 w-6 mr-2 text-green-400" />
          Achievement Badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tech Champion', 'Cultural Star', 'Sports Excellence', 'Team Player', 'Active Participant', 'Volunteer Hero'].map((achievement) => (
            <div key={achievement} className="p-4 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="h-6 w-6 text-white" />
              </div>
              <p className="text-white text-sm font-medium">{achievement}</p>
              <p className="text-white/60 text-xs">12 earned</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );

  const NotificationsTab = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Notifications System</h2>
          <p className="text-white/70">Send announcements, reminders and updates to students</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
          <Megaphone className="h-5 w-5 mr-2" />
          New Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <MessageCircle className="h-6 w-6 mr-2 text-blue-400" />
            Quick Send
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Notification Type</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="event" className="bg-gray-800">Event Announcement</option>
                <option value="reminder" className="bg-gray-800">Registration Reminder</option>
                <option value="result" className="bg-gray-800">Result Published</option>
                <option value="certificate" className="bg-gray-800">Certificate Available</option>
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Target Audience</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all" className="bg-gray-800">All Students</option>
                <option value="registered" className="bg-gray-800">Registered Participants</option>
                <option value="category" className="bg-gray-800">Category Specific</option>
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                Send Now
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all">
                Schedule
              </button>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-green-400" />
            Recent Notifications
          </h3>
          <div className="space-y-3">
            {notifications.map((notif) => (
              <div key={notif.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-medium">{notif.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    notif.sent ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {notif.sent ? 'Sent' : 'Scheduled'}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-2">{notif.message}</p>
                <p className="text-white/50 text-xs">
                  {notif.sent ? `Sent ${new Date(notif.sentAt).toLocaleString()}` : 
                   `Scheduled for ${new Date(notif.scheduleFor).toLocaleString()}`}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Analytics & Reports</h2>
          <p className="text-white/70">Comprehensive insights and exportable reports</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center shadow-lg">
            <Download className="h-5 w-5 mr-2" />
            Export PDF
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center shadow-lg">
            <FileText className="h-5 w-5 mr-2" />
            Export Excel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Calendar}
          title="Total Events"
          value={stats.totalEvents}
          trend={12}
          color="from-blue-500 to-cyan-500"
        />
        <StatCard
          icon={Users}
          title="Active Students"
          value={stats.activeStudents.toLocaleString()}
          trend={8}
          color="from-purple-500 to-pink-500"
        />
        <StatCard
          icon={Award}
          title="Certificates Issued"
          value={stats.certificatesIssued.toLocaleString()}
          trend={25}
          color="from-green-500 to-emerald-500"
        />
        <StatCard
          icon={Zap}
          title="Total Points Awarded"
          value={stats.totalPoints.toLocaleString()}
          trend={18}
          color="from-yellow-500 to-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <PieChart className="h-6 w-6 mr-2 text-blue-400" />
            Participation by Category
          </h3>
          <div className="space-y-4">
            {categories.slice(1).map((category) => {
              const count = events.filter(e => e.category === category).length;
              const percentage = events.length > 0 ? (count / events.length) * 100 : 0;
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">{category}</span>
                    <span className="text-white/70">{count} events ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${categoryColors[category]} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <LineChart className="h-6 w-6 mr-2 text-green-400" />
            Student Performance Insights
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/70">Average Participation</span>
                <span className="text-white font-bold">6.2 events/student</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/70">Certificate Success Rate</span>
                <span className="text-white font-bold">87.5%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/70">Engagement Score</span>
                <span className="text-white font-bold">78.5%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <BarChart3 className="h-6 w-6 mr-2 text-purple-400" />
          Individual Student Reports
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white/70 pb-3">Student</th>
                <th className="text-left text-white/70 pb-3">Events</th>
                <th className="text-left text-white/70 pb-3">Points</th>
                <th className="text-left text-white/70 pb-3">Certificates</th>
                <th className="text-left text-white/70 pb-3">Rank</th>
                <th className="text-left text-white/70 pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-white font-medium">{student.name}</p>
                        <p className="text-white/60 text-sm">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-white">{student.eventsParticipated}</td>
                  <td className="py-4 text-white font-bold">{student.totalPoints}</td>
                  <td className="py-4 text-white">{student.certificates}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      student.rank === 1 ? 'bg-yellow-500/20 text-yellow-300' :
                      student.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                      student.rank === 3 ? 'bg-amber-500/20 text-amber-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      #{student.rank}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );

  const AIAssistantTab = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">AI Assistant</h2>
          <p className="text-white/70">Smart recommendations and automated insights for event management</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg">
          <Brain className="h-5 w-5 mr-2" />
          Get Recommendations
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-cyan-400" />
            Smart Suggestions
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Optimal Event Timing</h4>
                  <p className="text-white/70 text-sm mb-2">Based on historical data, weekends show 40% higher participation for cultural events.</p>
                  <button className="text-blue-300 text-sm hover:text-blue-200 transition-colors">Apply Suggestion →</button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-green-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Engagement Boost</h4>
                  <p className="text-white/70 text-sm mb-2">Consider adding team-based elements to increase participation by 25%.</p>
                  <button className="text-green-300 text-sm hover:text-green-200 transition-colors">View Details →</button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Venue Conflict Alert</h4>
                  <p className="text-white/70 text-sm mb-2">Main Auditorium has overlapping bookings on Sept 15. Consider alternative venues.</p>
                  <button className="text-yellow-300 text-sm hover:text-yellow-200 transition-colors">Resolve Conflict →</button>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <MessageCircle className="h-6 w-6 mr-2 text-purple-400" />
            AI Chat Assistant
          </h3>
          <div className="space-y-4 h-64 overflow-y-auto bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Brain className="h-4 w-4 text-purple-300" />
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Hello! I can help you find top performers in Technical events. Would you like me to generate a report?</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-blue-500/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Yes, show me the top 5 performers in Technical category</p>
              </div>
              
              <div className="p-2 bg-blue-500/20 rounded-full">
                <UserCheck className="h-4 w-4 text-blue-300" />
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Brain className="h-4 w-4 text-purple-300" />
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Here are the top 5 Technical performers:</p>
                <ul className="text-white/70 text-xs mt-2 space-y-1">
                  <li>1. Arjun Patel - 145 pts</li>
                  <li>2. Rahul Singh - 118 pts</li>
                  <li>3. Amit Kumar - 95 pts</li>
                  <li>4. Sneha Gupta - 87 pts</li>
                  <li>5. Vikram Joshi - 76 pts</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <input 
              type="text" 
              placeholder="Ask AI anything about your events..."
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 text-center">
          <div className="p-3 bg-blue-500/20 rounded-full w-fit mx-auto mb-3">
            <TrendingUp className="h-8 w-8 text-blue-300" />
          </div>
          <h4 className="text-white font-semibold mb-2">Performance Trends</h4>
          <p className="text-white/70 text-sm">AI analyzes participation patterns and suggests improvements</p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="p-3 bg-green-500/20 rounded-full w-fit mx-auto mb-3">
            <Target className="h-8 w-8 text-green-300" />
          </div>
          <h4 className="text-white font-semibold mb-2">Smart Scheduling</h4>
          <p className="text-white/70 text-sm">Automatically suggests optimal dates and times for events</p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="p-3 bg-purple-500/20 rounded-full w-fit mx-auto mb-3">
            <Shield className="h-8 w-8 text-purple-300" />
          </div>
          <h4 className="text-white font-semibold mb-2">Risk Assessment</h4>
          <p className="text-white/70 text-sm">Identifies potential issues before they impact your events</p>
        </GlassCard>
      </div>
    </div>
  );

  const DashboardOverview = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Admin Dashboard Overview</h2>
        <p className="text-white/70">Complete control center for event management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Calendar}
          title="Active Events"
          value={events.filter(e => e.status === 'ongoing').length}
          trend={12}
          color="from-blue-500 to-cyan-500"
          subtitle="2 ending soon"
        />
        <StatCard
          icon={Users}
          title="Total Students"
          value={stats.activeStudents.toLocaleString()}
          trend={8}
          color="from-purple-500 to-pink-500"
          subtitle="87% engagement"
        />
        <StatCard
          icon={CheckCircle}
          title="Pending Approvals"
          value={stats.pendingApprovals}
          color="from-yellow-500 to-orange-500"
          subtitle="Needs attention"
        />
        <StatCard
          icon={Award}
          title="Certificates Issued"
          value={stats.certificatesIssued.toLocaleString()}
          trend={25}
          color="from-green-500 to-emerald-500"
          subtitle="This month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Activity className="h-6 w-6 mr-2 text-blue-400" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <UserCheck className="h-5 w-5 text-green-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">New registration for TechHack 2025</p>
                  <p className="text-white/60 text-sm">Arjun Patel registered • 2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Upload className="h-5 w-5 text-blue-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Certificate uploaded for Cultural Fest</p>
                  <p className="text-white/60 text-sm">Winner certificate • 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Bell className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Notification sent to all students</p>
                  <p className="text-white/60 text-sm">Registration reminder • 10 minutes ago</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Crown className="h-6 w-6 mr-2 text-yellow-400" />
            Quick Stats
          </h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <p className="text-2xl font-bold text-white">{events.length}</p>
              <p className="text-white/70 text-sm">Total Events</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
              <p className="text-2xl font-bold text-white">89%</p>
              <p className="text-white/70 text-sm">Success Rate</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
              <p className="text-2xl font-bold text-white">4.8/5</p>
              <p className="text-white/70 text-sm">Avg Rating</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <nav className="relative z-10 backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <div className="flex space-x-2">
              {[
                { id: 'dashboard', label: 'Overview', icon: BarChart3 },
                { id: 'events', label: 'Events', icon: Calendar },
                { id: 'certificates', label: 'Certificates', icon: Award },
                { id: 'gamification', label: 'Gamification', icon: Trophy },
                { id: 'notifications', label: 'Notifications', icon: Bell },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp },
                { id: 'ai', label: 'AI Assistant', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white/15 text-white backdrop-blur-lg border border-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <DashboardOverview />}
        {activeTab === 'events' && <EventManagementTab />}
        {activeTab === 'certificates' && <CertificateManagementTab />}
        {activeTab === 'gamification' && <GamificationTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
        {activeTab === 'ai' && <AIAssistantTab />}
      </main>
    </div>
  );
};



export default AdminDashboard; 