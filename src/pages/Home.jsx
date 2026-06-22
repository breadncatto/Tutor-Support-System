import { useAuth } from '../context/AuthContext';
import { Calendar, BookOpen, Users, FileText, CheckCircle, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();

  const WelcomeSection = () => (
    <div className="bg-gradient-to-r from-bk-blue to-sky-500 rounded-2xl p-8 text-white mb-10 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Xin chào, {user?.name}! 👋</h1>
        <p className="text-sm mt-2 opacity-80">Chúc bạn một ngày làm việc hiệu quả.</p>
    </div>
  );

  // --- SINH VIÊN ---
  if (user?.role === 'STUDENT') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeSection />
        <h2 className="text-xl font-bold mb-4 text-gray-800">Dành cho Sinh viên</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-green-600"><Users /> <h3 className="font-bold">Tìm Tutor</h3></div>
              <p className="text-sm text-gray-600 mb-4">Kết nối với giảng viên và sinh viên giỏi.</p>
              <Link to="/matching" className="text-sm text-green-600 font-bold hover:underline">Tìm kiếm ngay &rarr;</Link>
           </div>
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-bk-blue"><Calendar /> <h3 className="font-bold">Lịch học</h3></div>
              <p className="text-sm text-gray-600 mb-4">Xem lịch các buổi tư vấn sắp tới.</p>
              <Link to="/my-sessions" className="text-sm text-bk-blue font-bold hover:underline">Xem lịch &rarr;</Link>
           </div>
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-orange-500"><BookOpen /> <h3 className="font-bold">Tài liệu</h3></div>
              <p className="text-sm text-gray-600 mb-4">Truy cập kho tài liệu từ thư viện.</p>
              <Link to="/resources" className="text-sm text-orange-500 font-bold hover:underline">Truy cập &rarr;</Link>
           </div>
        </div>
      </div>
    );
  }

  // --- TUTOR ---
  if (user?.role === 'TUTOR') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeSection />
        <h2 className="text-xl font-bold mb-4 text-gray-800">Quản lý giảng dạy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-purple-600"><Calendar /> <h3 className="font-bold">Quản lý buổi học</h3></div>
              <p className="text-sm text-gray-600 mb-4">Tạo buổi học mới, điểm danh.</p>
              <Link to="/my-sessions" className="text-sm text-purple-600 font-bold hover:underline">Đến Dashboard &rarr;</Link>
           </div>
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-blue-600"><BookOpen /> <h3 className="font-bold">Chia sẻ tài liệu</h3></div>
              <p className="text-sm text-gray-600 mb-4">Upload tài liệu mới cho sinh viên.</p>
              <Link to="/resources" className="text-sm text-blue-600 font-bold hover:underline">Quản lý tài liệu &rarr;</Link>
           </div>
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-green-600"><CheckCircle /> <h3 className="font-bold">Đánh giá Mentee</h3></div>
              <p className="text-sm text-gray-600 mb-4">Ghi nhận tiến bộ của sinh viên.</p>
              <Link to="/tutor-evaluation" className="text-sm text-green-600 font-bold hover:underline">Đánh giá ngay &rarr;</Link>
           </div>
        </div>
      </div>
    );
  }

  // --- KHOA / BỘ MÔN ---
  if (user?.role === 'FACULTY') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeSection />
        <h2 className="text-xl font-bold mb-4 text-gray-800">Dành cho Khoa / Bộ môn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-blue-600"><BarChart /> <h3 className="font-bold">Thống kê Môn học</h3></div>
              <p className="text-sm text-gray-600 mb-4">Nắm tình hình học tập sinh viên ở các môn cụ thể.</p>
              <Link to="/faculty-analytics" className="text-sm text-blue-600 font-bold hover:underline">Xem thống kê &rarr;</Link>
           </div>
           {}
        </div>
      </div>
    );
  }

  // --- PHÒNG ĐÀO TẠO ---
  if (user?.role === 'ACADEMIC_AFFAIRS') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeSection />
        <h2 className="text-xl font-bold mb-4 text-gray-800">Dành cho Phòng Đào tạo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-red-600"><FileText /> <h3 className="font-bold">Báo cáo Tổng quan</h3></div>
              <p className="text-sm text-gray-600 mb-4">Tối ưu phân bổ nguồn lực & Ngân sách.</p>
              <Link to="/report" className="text-sm text-red-600 font-bold hover:underline">Tạo báo cáo &rarr;</Link>
           </div>
           {}
        </div>
      </div>
    );
  }

  // --- PHÒNG CÔNG TÁC SINH VIÊN ---
  if (user?.role === 'STUDENT_AFFAIRS') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeSection />
        <h2 className="text-xl font-bold mb-4 text-gray-800">Dành cho Phòng CTSV</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2 text-green-600"><CheckCircle /> <h3 className="font-bold">Kết quả rèn luyện</h3></div>
              <p className="text-sm text-gray-600 mb-4">Cộng điểm rèn luyện & Xét học bổng.</p>
              <Link to="/participation" className="text-sm text-green-600 font-bold hover:underline">Xét duyệt ngay &rarr;</Link>
           </div>
           {}
        </div>
      </div>
    );
  }

  return <div>Role không xác định</div>;
};

export default Home;