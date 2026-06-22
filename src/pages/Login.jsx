import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, GraduationCap, Building2, BookOpen, Users, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // State quản lý việc chọn Role
  const [selectedRole, setSelectedRole] = useState(null); // null = chưa chọn role
  
  // State form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Danh sách các Role để hiển thị
  const ROLES = [
    { code: 'STUDENT', label: 'Sinh viên', icon: <User size={24}/>, color: 'bg-sky-500' },
    { code: 'TUTOR', label: 'Tutor / Mentor', icon: <GraduationCap size={24}/>, color: 'bg-green-600' },
    { code: 'FACULTY', label: 'Khoa / Bộ môn', icon: <BookOpen size={24}/>, color: 'bg-purple-600' },
    { code: 'ACADEMIC_AFFAIRS', label: 'Phòng Đào tạo', icon: <Building2 size={24}/>, color: 'bg-orange-500' },
    { code: 'STUDENT_AFFAIRS', label: 'P. Công tác SV', icon: <Users size={24}/>, color: 'bg-red-500' },
  ];

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Kiểm tra tài khoản chung (Hardcode cho Demo)
    if (username === 'admin' && password === '123') {
        // 2. Gọi hàm login của Context với Role đã chọn
        const success = login(selectedRole.code);
        if (success) {
            navigate('/');
        } else {
            setError('Lỗi hệ thống: Không tìm thấy dữ liệu mẫu cho Role này.');
        }
    } else {
        setError('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" 
         style={{backgroundImage: "url('https://hcmut.edu.vn/img/campus/campus-1.jpg')"}}>
      <div className="absolute inset-0 bg-bk-blue/80 backdrop-blur-sm"></div>
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* HEADER CHUNG */}
        <div className="p-8 pb-4 text-center">
            <h1 className="text-3xl font-bold text-bk-blue mb-1">BK<span className="text-sky-500">nect</span></h1>
            <p className="text-gray-500 text-sm">Hệ thống Quản lý Tutor/Mentor HCMUT</p>
        </div>

        {/* --- VIEW 1: CHỌN ROLE --- */}
        {!selectedRole ? (
            <div className="p-8 pt-0">
                <h2 className="text-center font-bold text-gray-700 mb-6">Đăng nhập với tư cách</h2>
                
                <div className="grid grid-cols-1 gap-3">
                    {ROLES.map((role) => (
                        <button 
                            key={role.code}
                            onClick={() => setSelectedRole(role)}
                            className={`${role.color} hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg flex items-center gap-4 transition shadow-sm`}
                        >
                            <div className="bg-white/20 p-2 rounded-full">
                                {role.icon}
                            </div>
                            <span className="flex-1 text-left">{role.label}</span>
                        </button>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t text-center">
                    <p className="text-sm text-gray-500 mb-2">Chưa có tài khoản?</p>
                    <Link to="/register" className="inline-block w-full border border-bk-blue text-bk-blue font-bold py-2 rounded-lg hover:bg-blue-50 transition">
                        Đăng ký tài khoản mới
                    </Link>
                </div>
            </div>
        ) : (
        /* --- VIEW 2: FORM ĐĂNG NHẬP --- */
            <div className="p-8 pt-0">
                {/* Nút Back */}
                <button 
                    onClick={() => { setSelectedRole(null); setError(''); setUsername(''); setPassword(''); }}
                    className="flex items-center text-gray-400 hover:text-bk-blue text-sm mb-4 transition"
                >
                    <ArrowLeft size={16} className="mr-1"/> Quay lại chọn vai trò
                </button>

                <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${selectedRole.color} rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-md`}>
                        {selectedRole.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{selectedRole.label}</h2>
                    <p className="text-xs text-gray-500">Vui lòng nhập thông tin xác thực</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-500 text-sm p-3 rounded border border-red-200 text-center">
                            {error}
                        </div>
                    )}
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">Tài khoản</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-blue" 
                            placeholder="admin"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">Mật khẩu</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-blue" 
                            placeholder="123"
                        />
                    </div>

                    <div className="text-right">
                        <a href="#" className="text-xs text-bk-blue hover:underline">Quên mật khẩu?</a>
                    </div>

                    <button type="submit" className="w-full bg-bk-blue text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
                        Đăng nhập
                    </button>
                </form>

                <div className="mt-6 text-center">
                     <p className="text-xs text-gray-400 bg-gray-100 p-2 rounded">
                        💡 Mẹo Demo: Tài khoản <b>admin</b> / Mật khẩu <b>123</b>
                     </p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Login;