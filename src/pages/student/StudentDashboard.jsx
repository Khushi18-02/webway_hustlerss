import React, { useState } from "react";
import { 
  Moon, 
  Sun, 
  Bell, 
  Home, 
  Calendar, 
  Award, 
  Trophy, 
  User, 
  BookOpen, 
  Clock, 
  MapPin,
  Download,
  Star,
  TrendingUp,
  Users,
  Activity,
  Zap,
  Target,
  MessageCircle,
  Filter,
  Search,
  ChevronRight,
  Flame,
  BarChart3,
  Share2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Tag,
  Calendar as CalendarIcon,
  FileText,
  Bot
} from "lucide-react";

const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [chatOpen, setChatOpen] = useState(false);
  const [streakCount, setStreakCount] = useState(7);

  const glassmorphismClass = `
    backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 
    border border-white/20 dark:border-gray-700/30 
    shadow-xl rounded-2xl
  `;

  // Sample Data
  const categories = ["all", "technical", "sports", "cultural", "social", "volunteer"];
  
  const events = [
    {
      id: 1,
      title: "React Hackathon 2025",
      category: "technical",
      date: "2025-08-30",
      time: "09:00 AM",
      location: "Tech Lab",
      status: "ongoing",
      registrationDeadline: "2025-08-28",
      description: "Build innovative web applications",
      participants: 45,
      maxParticipants: 50,
      points: 25,
      poster: "🚀"
    },
    {
      id: 2,
      title: "Cricket Tournament",
      category: "sports",
      date: "2025-09-05",
      time: "06:00 AM",
      location: "Sports Ground",
      status: "upcoming",
      registrationDeadline: "2025-09-01",
      description: "Inter-department cricket championship",
      participants: 120,
      maxParticipants: 150,
      points: 20,
      poster: "🏏"
    },
    {
      id: 3,
      title: "Cultural Fest - Dance",
      category: "cultural",
      date: "2025-09-10",
      time: "05:00 PM",
      location: "Auditorium",
      status: "upcoming",
      registrationDeadline: "2025-09-07",
      description: "Showcase your dance talents",
      participants: 80,
      maxParticipants: 100,
      points: 15,
      poster: "💃"
    },
    {
      id: 4,
      title: "Blood Donation Drive",
      category: "social",
      date: "2025-08-26",
      time: "10:00 AM",
      location: "Medical Center",
      status: "completed",
      registrationDeadline: "2025-08-25",
      description: "Help save lives through blood donation",
      participants: 200,
      maxParticipants: 200,
      points: 30,
      poster: "🩸"
    }
  ];

  const myEvents = [
    {
      id: 1,
      title: "AI Workshop",
      category: "technical",
      status: "completed",
      result: "winner",
      points: 25,
      certificate: true,
      date: "2025-07-15"
    },
    {
      id: 2,
      title: "Football Match",
      category: "sports", 
      status: "ongoing",
      result: null,
      points: 0,
      certificate: false,
      date: "2025-08-20"
    },
    {
      id: 4,
      title: "Blood Donation Drive",
      category: "social",
      status: "registered",
      result: null,
      points: 0,
      certificate: false,
      date: "2025-08-26"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "AI Workshop Winner",
      type: "winner",
      issueDate: "2025-07-16",
      event: "AI Workshop",
      credentialId: "AI-WIN-2025-001",
      category: "technical"
    },
    {
      id: 2,
      title: "Hackathon Participation",
      type: "participation",
      issueDate: "2025-06-20",
      event: "Spring Hackathon",
      credentialId: "HACK-PAR-2025-042",
      category: "technical"
    },
    {
      id: 3,
      title: "Volunteer Certificate", 
      type: "volunteer",
      issueDate: "2025-05-10",
      event: "Community Service",
      credentialId: "VOL-2025-125",
      category: "social"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Arjun Sharma", points: 2850, streak: 12, badge: "🏆" },
    { rank: 2, name: "Priya Patel", points: 2720, streak: 8, badge: "🥈" },
    { rank: 3, name: "Rahul Kumar", points: 2650, streak: 15, badge: "🥉" },
    { rank: 4, name: "You (Alex)", points: 2420, streak: 7, badge: "⭐", isCurrentUser: true },
    { rank: 5, name: "Sneha Gupta", points: 2380, streak: 6, badge: "" },
  ];

  const notificationsList = [
    {
      id: 1,
      type: "event",
      title: "New Event: React Hackathon",
      message: "Registration opens tomorrow",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "certificate",
      title: "Certificate Ready",
      message: "Your AI Workshop certificate is ready for download",
      time: "1 day ago", 
      read: false
    },
    {
      id: 3,
      type: "reminder",
      title: "Registration Deadline",
      message: "Cricket tournament registration closes in 3 days",
      time: "2 days ago",
      read: true
    }
  ];

  const achievements = [
    { date: "2025-07-16", title: "Won AI Workshop", type: "winner", points: 25 },
    { date: "2025-06-20", title: "Completed Hackathon", type: "participation", points: 15 },
    { date: "2025-05-10", title: "Volunteered 20 hours", type: "volunteer", points: 30 },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`${glassmorphismClass} p-6 hover:scale-105 transition-transform`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Total Points</p>
              <p className="text-2xl font-bold text-blue-400">2,420</p>
              <p className="text-xs text-green-400">+45 this week</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6 hover:scale-105 transition-transform`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Current Streak</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-orange-400">{streakCount}</p>
                <Flame className="w-6 h-6 text-orange-400" />
              </div>
              <p className="text-xs text-orange-400">days active</p>
            </div>
            <Target className="w-8 h-8 text-orange-400" />
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6 hover:scale-105 transition-transform`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Current Rank</p>
              <p className="text-2xl font-bold text-purple-400">#4</p>
              <p className="text-xs text-purple-400">of 248 students</p>
            </div>
            <Trophy className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6 hover:scale-105 transition-transform`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Certificates</p>
              <p className="text-2xl font-bold text-green-400">8</p>
              <p className="text-xs text-green-400">3 this month</p>
            </div>
            <Award className="w-8 h-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Quick Actions & Ongoing Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${glassmorphismClass} p-6 lg:col-span-2`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Ongoing Events
          </h3>
          <div className="space-y-3">
            {events.filter(e => e.status === 'ongoing').map((event) => (
              <div key={event.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{event.poster}</div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm opacity-70">{event.location} • {event.date}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    Live
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm opacity-70">
                    {event.participants}/{event.maxParticipants} participants
                  </div>
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Notifications
          </h3>
          <div className="space-y-3">
            {notificationsList.slice(0, 3).map((notif) => (
              <div key={notif.id} className="p-3 rounded-lg bg-white/5">
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? 'bg-blue-400' : 'bg-gray-500'}`}></div>
                  <div className="flex-1">
                    <h5 className="text-sm font-medium">{notif.title}</h5>
                    <p className="text-xs opacity-70">{notif.message}</p>
                    <p className="text-xs opacity-50 mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 text-sm text-blue-400 hover:text-blue-300">
            View all notifications →
          </button>
        </div>
      </div>

      {/* Analytics & Achievement Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Participation Analytics
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Technical</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[40%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Sports</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[30%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Cultural</span>
                <span>20%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-[20%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Social</span>
                <span>10%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Achievement Timeline
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achievement.type === 'winner' ? 'bg-yellow-500/20 text-yellow-400' :
                  achievement.type === 'volunteer' ? 'bg-green-500/20 text-green-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {achievement.type === 'winner' ? '🏆' : achievement.type === 'volunteer' ? '❤️' : '🎯'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{achievement.title}</p>
                  <p className="text-xs opacity-60">{achievement.date}</p>
                </div>
                <div className="text-sm font-medium text-blue-400">
                  +{achievement.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold">All Events</h2>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm capitalize transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500/30 text-blue-400 border border-blue-500/50"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Event Sections */}
      <div className="space-y-8">
        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter(e => e.status === 'upcoming' && (selectedCategory === 'all' || e.category === selectedCategory))
              .map((event) => (
                <div key={event.id} className={`${glassmorphismClass} p-6 hover:scale-105 transition-transform`}>
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-3xl">{event.poster}</div>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                      {event.category}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                  <p className="text-sm opacity-80 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 opacity-70">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}/{event.maxParticipants} registered</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-400">+{event.points} points</span>
                    <span className="text-xs opacity-60">Deadline: {event.registrationDeadline}</span>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
                    Register Now
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* My Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            My Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myEvents.map((event) => (
              <div key={event.id} className={`${glassmorphismClass} p-6`}>
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                    event.category === 'technical' ? 'bg-blue-500/20 text-blue-400' :
                    event.category === 'sports' ? 'bg-green-500/20 text-green-400' :
                    event.category === 'cultural' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {event.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {event.status === 'completed' && (
                      <CheckCircle className={`w-4 h-4 ${
                        event.result === 'winner' ? 'text-yellow-400' : 'text-green-400'
                      }`} />
                    )}
                    {event.status === 'ongoing' && (
                      <AlertCircle className="w-4 h-4 text-orange-400" />
                    )}
                    {event.status === 'registered' && (
                      <Clock className="w-4 h-4 text-blue-400" />
                    )}
                  </div>
                </div>
                
                <h4 className="font-semibold mb-2">{event.title}</h4>
                <p className="text-sm opacity-70 mb-2">{event.date}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    event.status === 'ongoing' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {event.status}
                  </span>
                  {event.certificate && (
                    <button className="text-sm text-yellow-400 hover:text-yellow-300">
                      View Certificate
                    </button>
                  )}
                </div>

                {event.result && (
                  <div className="mt-3 p-2 bg-yellow-500/10 rounded-lg">
                    <p className="text-sm text-yellow-400 capitalize">
                      Result: {event.result} (+{event.points} points)
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Certificates</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30">
            Winner
          </button>
          <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
            Participation
          </button>
          <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30">
            Volunteer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className={`${glassmorphismClass} p-6 hover:scale-105 transition-transform`}>
            <div className="flex justify-between items-start mb-4">
              <Award className={`w-8 h-8 ${
                cert.type === 'winner' ? 'text-yellow-400' :
                cert.type === 'volunteer' ? 'text-green-400' :
                'text-blue-400'
              }`} />
              <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                cert.type === 'winner' ? 'bg-yellow-500/20 text-yellow-400' :
                cert.type === 'volunteer' ? 'bg-green-500/20 text-green-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {cert.type}
              </span>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
            
            <div className="space-y-1 text-sm opacity-80 mb-4">
              <p>Event: {cert.event}</p>
              <p>Issue Date: {cert.issueDate}</p>
              <p>ID: {cert.credentialId}</p>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-1">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex-1 px-3 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center justify-center gap-1">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30">
            This Month
          </button>
          <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
            All Time
          </button>
        </div>
      </div>

      <div className={`${glassmorphismClass} p-6`}>
        <div className="space-y-4">
          {leaderboard.map((user) => (
            <div key={user.rank} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
              user.isCurrentUser ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' :
              'bg-white/5 hover:bg-white/10'
            }`}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white ${
                user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                user.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                user.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                'bg-gradient-to-r from-blue-400 to-purple-500'
              }`}>
                {user.rank}
              </div>
              
              <div className="flex-1">
                <p className={`font-medium ${user.isCurrentUser ? 'text-blue-400' : ''}`}>
                  {user.name}
                </p>
                <div className="flex items-center gap-4 text-sm opacity-70">
                  <span>{user.points} points</span>
                  <div className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400" />
                    <span>{user.streak} day streak</span>
                  </div>
                </div>
              </div>
              
              <div className="text-2xl">
                {user.badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Leaderboards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="font-semibold mb-4">Technical Events</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 rounded bg-white/5">
              <span className="text-sm">1. Arjun Sharma</span>
              <span className="text-sm text-blue-400">850 pts</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-white/5">
              <span className="text-sm">2. You</span>
              <span className="text-sm text-blue-400">720 pts</span>
            </div>
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="font-semibold mb-4">Sports Events</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 rounded bg-white/5">
              <span className="text-sm">1. Priya Patel</span>
              <span className="text-sm text-green-400">920 pts</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-white/5">
              <span className="text-sm">2. Rahul Kumar</span>
              <span className="text-sm text-green-400">680 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className={`${glassmorphismClass} p-6`}>
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <div>
            <h2 className="text-2xl font-bold">Student</h2>
            <p className="text-blue-400">Computer Science • 3rd Year</p>
            <p className="text-sm opacity-70">Student ID: CS21043</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">2,420</p>
            <p className="text-sm opacity-70">Total Points</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">#4</p>
            <p className="text-sm opacity-70">Current Rank</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">24</p>
            <p className="text-sm opacity-70">Events Participated</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Interests & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Python', 'Cricket', 'Photography', 'Public Speaking'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="font-semibold mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-medium">{achievement.title}</p>
                  <p className="text-xs opacity-60">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${glassmorphismClass} p-6`}>
          <h3 className="font-semibold mb-4">Activity Breakdown</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Technical Events</span>
                <span>8 events</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Sports</span>
                <span>6 events</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Cultural</span>
                <span>4 events</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '20%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Social Service</span>
                <span>6 events</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
          Mark All Read
        </button>
      </div>

      <div className={`${glassmorphismClass} p-6`}>
        <div className="space-y-4">
          {notificationsList.map((notif) => (
            <div key={notif.id} className={`p-4 rounded-lg transition-colors ${
              !notif.read ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/5'
            }`}>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? 'bg-blue-400' : 'bg-gray-500'}`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {notif.type === 'event' && <Calendar className="w-4 h-4 text-blue-400" />}
                    {notif.type === 'certificate' && <Award className="w-4 h-4 text-yellow-400" />}
                    {notif.type === 'reminder' && <Clock className="w-4 h-4 text-orange-400" />}
                    <h4 className="font-medium">{notif.title}</h4>
                  </div>
                  <p className="text-sm opacity-80">{notif.message}</p>
                  <p className="text-xs opacity-60 mt-2">{notif.time}</p>
                </div>
                <button className="text-sm text-blue-400 hover:text-blue-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // AI Chatbot Component
  const AIChat = () => {
    const [messages, setMessages] = useState([
      {
        id: 1,
        type: 'bot',
        message: "Hi Alex! I'm your AI assistant. I can help you with event queries, recommendations, and more. What would you like to know?",
        time: new Date().toLocaleTimeString()
      }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const suggestedQueries = [
      "What events are happening this week?",
      "Show me technical events",
      "How can I increase my points?",
      "When is the registration deadline for cricket tournament?"
    ];

    const handleSendMessage = () => {
      if (!inputMessage.trim()) return;

      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        message: inputMessage,
        time: new Date().toLocaleTimeString()
      };

      setMessages([...messages, newMessage]);

      // Simulate AI response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          message: getBotResponse(inputMessage),
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);

      setInputMessage('');
    };

    const getBotResponse = (query) => {
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes('event') && lowerQuery.includes('week')) {
        return "This week you have: React Hackathon (Aug 30), Blood Donation Drive (Aug 26). Both are great opportunities to earn points!";
      } else if (lowerQuery.includes('technical')) {
        return "Upcoming technical events: React Hackathon (Aug 30) - 25 points, AI Workshop series starting next month. Perfect for your interests!";
      } else if (lowerQuery.includes('points')) {
        return "You can increase points by: Participating in events (+15-25 pts), Winning competitions (+50 pts), Volunteering (+30 pts), Maintaining streaks (+5 pts daily)";
      } else if (lowerQuery.includes('cricket')) {
        return "Cricket Tournament registration closes on Sep 1st. It's at Sports Ground, starts Sep 5th at 6 AM. 20 points for participation, 50 for winning!";
      }
      return "I can help you with event information, recommendations based on your interests, point strategies, and deadlines. Try asking about specific events or categories!";
    };

    if (!chatOpen) return null;

    return (
      <div className="fixed bottom-4 right-4 w-80 h-96 z-50">
        <div className={`${glassmorphismClass} h-full flex flex-col`}>
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="font-medium">AI Assistant</span>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.type === 'user' 
                    ? 'bg-blue-500/20 text-blue-100' 
                    : 'bg-white/10 text-white'
                }`}>
                  <p>{msg.message}</p>
                  <p className="text-xs opacity-60 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2 mb-2">
              {suggestedQueries.map((query, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(query)}
                  className="text-xs px-2 py-1 bg-white/10 rounded hover:bg-white/20 truncate"
                >
                  {query.length > 20 ? query.substring(0, 20) + '...' : query}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white placeholder-white/50 border-none outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "events", label: "Events", icon: Calendar },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="flex h-screen">
          {/* Glassmorphism Sidebar */}
          <aside className={`w-64 ${glassmorphismClass} m-4 mr-0 rounded-r-none border-r-0`}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Student Portal</span>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/50"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.id === 'notifications' && notifications > 0 && (
                      <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Glassmorphism Header */}
            <header className={`${glassmorphismClass} m-4 mb-0 rounded-b-none border-b-0 p-4`}>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-semibold flex items-center gap-2">
                    Welcome back, student!👋
                  </h1>
                  <p className="text-sm opacity-70">Ready to learn something new today?</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    className="relative p-3 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setNotifications(0)}
                  >
                    <Bell className="w-5 h-5" />
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 hover:bg-white/10 rounded-full transition-colors"
                  >
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </header>

            {/* Page Content with Glassmorphism */}
            <main className={`${glassmorphismClass} m-4 mt-0 rounded-t-none border-t-0 p-6 overflow-y-auto flex-1`}>
              {activeTab === "dashboard" && renderDashboard()}
              {activeTab === "events" && renderEvents()}
              {activeTab === "certificates" && renderCertificates()}
              {activeTab === "leaderboard" && renderLeaderboard()}
              {activeTab === "profile" && renderProfile()}
              {activeTab === "notifications" && renderNotifications()}
            </main>
          </div>
        </div>

        {/* AI Chatbot */}
        <AIChat />
        
        {/* Floating AI Button */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-40"
          >
            <Bot className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;