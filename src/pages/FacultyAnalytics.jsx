import { BarChart, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';
import { SUBJECT_STATS } from '../data/mockData';

const FacultyAnalytics = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">Thống kê Tình hình Học tập (Faculty Dashboard)</h2>
      <p className="text-gray-500 mb-8">Khai thác dữ liệu đánh giá để nắm bắt hiệu quả đào tạo từng môn.</p>

      {/* HIGHLIGHT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-sm font-medium">Môn có kết quả tốt nhất</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">Lập trình Python</h3>
                </div>
                <TrendingUp className="text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2 font-bold">+12% so với kỳ trước</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-sm font-medium">Cần lưu ý (Tỉ lệ qua thấp)</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">Giải tích 1</h3>
                </div>
                <AlertTriangle className="text-red-500" />
            </div>
            <p className="text-xs text-red-600 mt-2 font-bold">30% sinh viên có nguy cơ rớt</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-bk-blue">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-sm font-medium">Tổng số lớp Tutor đang mở</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">45 Lớp</h3>
                </div>
                <BookOpen className="text-bk-blue" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Phủ sóng 80% các môn đại cương</p>
        </div>
      </div>

      {/* DETAILED TABLE */}
      <div className="bg-white rounded-xl shadow-md border overflow-hidden">
        <div className="px-6 py-4 border-b bg-gray-50">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <BarChart size={20}/> Chi tiết theo môn học
            </h3>
        </div>
        <table className="w-full text-left">
            <thead className="bg-white text-gray-500 text-sm border-b">
                <tr>
                    <th className="px-6 py-3 font-medium">Môn học</th>
                    <th className="px-6 py-3 font-medium">Điểm đánh giá TB</th>
                    <th className="px-6 py-3 font-medium">Tỷ lệ qua môn (Dự báo)</th>
                    <th className="px-6 py-3 font-medium text-red-500">SV nguy cơ thấp</th>
                    <th className="px-6 py-3 font-medium text-center">Hành động</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {SUBJECT_STATS.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-800">{sub.subject}</td>
                        <td className="px-6 py-4">
                            <span className={`font-bold ${sub.avgScore >= 8 ? 'text-green-600' : sub.avgScore < 6.5 ? 'text-red-500' : 'text-yellow-600'}`}>
                                {sub.avgScore}/10
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[100px]">
                                <div className="bg-bk-blue h-2.5 rounded-full" style={{ width: `${sub.passRate}%` }}></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1 inline-block">{sub.passRate}%</span>
                        </td>
                        <td className="px-6 py-4 font-bold text-red-500">{sub.lowPerfStudents} SV</td>
                        <td className="px-6 py-4 text-center">
                            <button className="text-bk-blue text-sm hover:underline font-medium">Xem chi tiết</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};
export default FacultyAnalytics;