import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  User, LogOut, Settings, Bell, ChevronDown, Menu, X, Edit 
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/login');
  };

  const renderLinks = (isMobile = false) => {
    const linkClass = isMobile 
      ? "block py-2 text-base font-medium text-gray-700 hover:text-bk-blue hover:bg-gray-50 rounded px-2"
      : "hover:text-bk-blue transition-colors";

    if (!user) return null;

    return (
      <>
        <Link to="/" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Home</Link>
        
        {/* --- SINH VIÊN --- */}
        {user.role === 'STUDENT' && (
          <>
            <Link to="/my-sessions" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>My Sessions</Link>
            <Link to="/matching" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Find Tutor</Link>
          </>
        )}

        {/* --- TUTOR --- */}
        {user.role === 'TUTOR' && (
          <>
             <Link to="/my-sessions" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Tutor Dashboard</Link>
             <Link to="/tutor-evaluation" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Mentee Evaluation</Link>
          </>
        )}

        {/* --- KHOA / BỘ MÔN --- */}
        {user.role === 'FACULTY' && (
           <Link to="/faculty-analytics" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Subject Analytics</Link>
        )}

        {/* --- PHÒNG ĐÀO TẠO --- */}
        {user.role === 'ACADEMIC_AFFAIRS' && (
           <Link to="/report" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Reports</Link>
        )}

        {/* --- PHÒNG CTSV --- */}
        {user.role === 'STUDENT_AFFAIRS' && (
           <Link to="/participation" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Results</Link>
        )}

        {/* --- SHARED --- */}
        <Link to="/resources" className={linkClass} onClick={() => isMobile && setIsMobileMenuOpen(false)}>Resources</Link>
      </>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="text-2xl font-bold text-bk-blue flex items-center gap-1">
            BK<span className="text-sky-500">nect</span>
          </Link>

          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            {renderLinks(false)}
          </div>

          <div className="hidden md:flex items-center space-x-4" ref={dropdownRef}>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-bk-blue focus:outline-none"
              >
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300 overflow-hidden">
                   {user?.avatar && user.avatar.length <= 2 ? (
                      <span className="font-bold text-gray-600">{user.avatar}</span>
                   ) : (
                      <User size={20} className="text-gray-600" />
                   )}
                </div>
                <ChevronDown size={16} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold text-lg">
                      {user?.avatar?.charAt(0) || "U"}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block font-bold text-gray-600">
                        {user?.role}
                      </span>
                    </div>
                  </div>

                  <div className="py-2">
                    <Link to="/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-bk-blue">
                      <Edit size={16} className="mr-3" /> Edit profile
                    </Link>
                    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-bk-blue">
                      <Settings size={16} className="mr-3" /> Settings
                    </button>
                    <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-bk-blue">
                      <Bell size={16} className="mr-3" /> Notification
                    </button>
                    <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut size={16} className="mr-3" /> Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-bk-blue">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 shadow-lg space-y-1 animate-in slide-in-from-top-2">
          {renderLinks(true)}
          <div className="border-t border-gray-200 my-2"></div>
          <Link to="/profile" className="flex items-center py-2 text-base font-medium text-gray-700 hover:text-bk-blue px-2">
            <User size={18} className="mr-2"/> Profile
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center py-2 text-base font-medium text-red-600 hover:bg-red-50 px-2 rounded">
            <LogOut size={18} className="mr-2"/> Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;