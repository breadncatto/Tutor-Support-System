import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MySessions from './pages/MySessions';
import Resources from './pages/Resources';
import Matching from './pages/Matching';
import Report from './pages/Report';
import Participation from './pages/Participation';
import TutorEvaluation from './pages/TutorEvaluation';
import FacultyAnalytics from './pages/FacultyAnalytics';


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};


const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayoutPaths = ['/login', '/register'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="min-h-screen w-full bg-bk-light font-sans text-gray-800 flex flex-col">
      {!shouldHideLayout && <Navbar />}
      
      <main className="flex-grow w-full">
        {children}
      </main>
      
      {!shouldHideLayout && <Footer />} {}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* --- Public Routes --- */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* --- Protected Routes --- */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/my-sessions" element={<ProtectedRoute><MySessions /></ProtectedRoute>} />
            <Route path="/matching" element={<ProtectedRoute><Matching /></ProtectedRoute>} />
            <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path="/tutor-evaluation" element={<ProtectedRoute><TutorEvaluation /></ProtectedRoute>} />
            <Route path="/faculty-analytics" element={<ProtectedRoute><FacultyAnalytics /></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
            <Route path="/participation" element={<ProtectedRoute><Participation /></ProtectedRoute>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;