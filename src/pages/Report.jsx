import { FileText, PieChart, Download, Users, Layers, Zap } from 'lucide-react';
import { RESOURCE_STATS } from '../data/mockData';

const Report = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-orange-600">Báo cáo Tổng quan (Academic Overview)</h2>
            <p className="text-gray-500">Tối ưu hóa phân bổ nguồn lực dựa trên dữ liệu thực tế.</p>
          </div>
          <button className="bg-bk-blue text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-blue-700">
             <Download size={18}/> Export PDF
          </button>
      </div>

      {/* RESOURCE ALLOCATION SECTION */}
      <div className="bg-white p-8 rounded-2xl shadow-md border mb-8">
         <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
            <PieChart className="text-orange-500"/> Phân bổ nguồn lực & Hiệu suất
         </h3>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4 bg-blue-50 rounded-xl">
                <Users className="mx-auto text-bk-blue mb-2" size={32}/>
                <p className="text-gray-500 text-sm uppercase font-bold">Tỷ lệ Student / Tutor</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{RESOURCE_STATS.studentTutorRatio}</p>
                <p className="text-xs text-green-600 mt-1">Đạt chuẩn (Mục tiêu 15:1)</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl">
                <Layers className="mx-auto text-orange-500 mb-2" size={32}/>
                <p className="text-gray-500 text-sm uppercase font-bold">Công suất phòng học</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{RESOURCE_STATS.roomUsage}%</p>
                <p className="text-xs text-orange-600 mt-1">Cần mở thêm phòng buổi chiều</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl">
                <Zap className="mx-auto text-purple-500 mb-2" size={32}/>
                <p className="text-gray-500 text-sm uppercase font-bold">Ngân sách đã dùng</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{RESOURCE_STATS.budgetUsed}</p>
                <p className="text-xs text-gray-500 mt-1">Học kỳ 1 - 2025</p>
            </div>
         </div>

         <div className="mt-8 p-4 border border-red-200 bg-red-50 rounded-lg">
             <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                <Zap size={16}/> Khu vực thiếu hụt nguồn lực (Cần bổ sung Tutor)
             </h4>
             <ul className="list-disc list-inside text-sm text-gray-700">
                 {RESOURCE_STATS.shortageAreas.map((area, idx) => (
                     <li key={idx}>Khoa/Bộ môn: <b>{area}</b> - Số lượng sinh viên đăng ký vượt quá năng lực đáp ứng 20%.</li>
                 ))}
             </ul>
         </div>
      </div>

      {/* FORM REPORT CŨ */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h4 className="font-bold text-gray-700 mb-4">Tùy chỉnh báo cáo chi tiết</h4>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="p-3 border rounded-lg bg-white"><option>Học kỳ 1 - 2025</option></select>
              <select className="p-3 border rounded-lg bg-white"><option>Tất cả các khoa</option></select>
              <button className="bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100">
                  Xem trước dữ liệu
              </button>
          </form>
      </div>
    </div>
  );
};
export default Report;