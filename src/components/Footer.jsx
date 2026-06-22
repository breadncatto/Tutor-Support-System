import { Facebook, Mail, MapPin, Phone, Globe, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Cột 1: Thương hiệu & Mô tả */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-bk-blue flex items-center gap-1 mb-4">
              BK<span className="text-sky-500">nect</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Hệ thống quản lý Tutor/Mentor chính thức của Trường Đại học Bách Khoa - ĐHQG TP.HCM. Kết nối tri thức, hỗ trợ phát triển.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-bk-blue transition">Trang chủ</Link></li>
              <li><Link to="/resources" className="hover:text-bk-blue transition">Tài nguyên học tập</Link></li>
              <li><Link to="/matching" className="hover:text-bk-blue transition">Tìm kiếm Tutor</Link></li>
              <li><a href="#" className="hover:text-bk-blue transition">Quy định & Chính sách</a></li>
            </ul>
          </div>

          {/* Cột 3: Liên hệ */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-bk-blue flex-shrink-0 mt-0.5" />
                <span>268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-bk-blue flex-shrink-0" />
                <span>support@hcmut.edu.vn</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-bk-blue flex-shrink-0" />
                <span>(028) 3864 7256</span>
              </li>
            </ul>
          </div>

          {/* Cột 4: Mạng xã hội */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Kết nối với chúng tôi</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-50 text-bk-blue rounded-full flex items-center justify-center hover:bg-bk-blue hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-50 text-sky-500 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-50 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 BKnect - HCMUT. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-gray-600">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;