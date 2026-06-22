import { useState } from 'react';
import { Search, Award, CheckCircle, XCircle } from 'lucide-react';
import { TRAINING_POINTS } from '../data/mockData';

const Participation = () => {
  const [data, setData] = useState(TRAINING_POINTS);

  const handleApprove = (id) => {
    setData(data.map(item => item.id === id ? { ...item, status: 'Approved' } : item));
    alert("Đã cộng điểm rèn luyện thành công!");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-red-600">Kết quả tham gia & Rèn luyện (Student Affairs)</h2>
            <p className="text-gray-500">Xét duyệt điểm rèn luyện và tiêu chuẩn học bổng dựa trên hoạt động Tutor.</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
             <Award size={20}/> Quỹ học bổng khả dụng: 15 suất
          </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border mb-8">
         {/* Filters */}
        <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
                 <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                 <input type="text" placeholder="Tìm MSSV..." className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <select className="p-3 border rounded-lg bg-white w-48"><option>Tất cả trạng thái</option><option>Chờ duyệt</option></select>
            <button className="bg-red-600 text-white px-6 rounded-lg font-bold hover:bg-red-700">Lọc danh sách</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-red-50 text-red-700">
                    <tr>
                        <th className="p-4 rounded-tl-lg">MSSV / Họ tên</th>
                        <th className="p-4">Hoạt động tham gia</th>
                        <th className="p-4">ĐRL đề xuất</th>
                        <th className="p-4">Xét học bổng</th>
                        <th className="p-4">Trạng thái</th>
                        <th className="p-4 rounded-tr-lg text-center">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                                <p className="font-bold text-gray-800">{row.name}</p>
                                <p className="text-xs text-gray-500">{row.id}</p>
                            </td>
                            <td className="p-4">{row.event}</td>
                            <td className="p-4 font-bold text-bk-blue">+{row.points} điểm</td>
                            <td className="p-4">
                                {row.scholarshipEligible ? 
                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold border border-yellow-200">Đủ điều kiện</span> 
                                    : <span className="text-gray-400 text-xs">Chưa đạt</span>
                                }
                            </td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${row.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {row.status === 'Approved' ? 'Đã cộng điểm' : 'Chờ duyệt'}
                                </span>
                            </td>
                            <td className="p-4 text-center">
                                {row.status !== 'Approved' ? (
                                    <div className="flex justify-center gap-2">
                                        <button onClick={() => handleApprove(row.id)} className="text-green-600 hover:bg-green-50 p-2 rounded tooltip" title="Duyệt">
                                            <CheckCircle size={20}/>
                                        </button>
                                        <button className="text-red-600 hover:bg-red-50 p-2 rounded tooltip" title="Từ chối">
                                            <XCircle size={20}/>
                                        </button>
                                    </div>
                                ) : (
                                    <span className="text-green-600 text-sm font-bold flex items-center justify-center gap-1"><CheckCircle size={14}/> Xong</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
export default Participation;