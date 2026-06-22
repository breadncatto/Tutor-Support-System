import { useState } from 'react';
import { Search, Save, User, AlertCircle, CheckCircle } from 'lucide-react';
import { MENTEE_LIST } from '../data/mockData';

const TutorEvaluation = () => {
  const [mentees, setMentees] = useState(MENTEE_LIST);
  const [selectedMentee, setSelectedMentee] = useState(null);
  const [note, setNote] = useState("");

  const handleOpenEvaluate = (mentee) => {
    setSelectedMentee(mentee);
    setNote(mentee.lastNote);
  };

  const handleSave = () => {
    alert(`Đã lưu đánh giá cho sinh viên ${selectedMentee.name}`);
    setSelectedMentee(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-bk-blue mb-2">Theo dõi & Ghi nhận tiến bộ (Mentee Evaluation)</h2>
      <p className="text-gray-500 mb-6">Ghi lại nhận xét và đánh giá mức độ hiểu bài của sinh viên sau mỗi buổi học.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* DANH SÁCH SINH VIÊN */}
        <div className="bg-white p-4 rounded-xl shadow-sm border lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-gray-700">Danh sách Mentee phụ trách</h3>
             <div className="relative">
                <Search className="absolute left-2 top-2.5 text-gray-400" size={16}/>
                <input className="pl-8 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-1 focus:ring-bk-blue" placeholder="Tìm tên SV..." />
             </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                    <tr>
                        <th className="p-3 rounded-l-lg">Họ tên</th>
                        <th className="p-3">Môn học</th>
                        <th className="p-3">Tiến độ</th>
                        <th className="p-3">Trạng thái</th>
                        <th className="p-3 rounded-r-lg text-center">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {mentees.map((m) => (
                        <tr key={m.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-bk-blue">{m.id.slice(-1)}</div>
                                {m.name}
                            </td>
                            <td className="p-3">{m.session}</td>
                            <td className="p-3">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${m.progress === 'Cần cố gắng' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                    {m.progress}
                                </span>
                            </td>
                            <td className="p-3">
                                {m.status === 'Warning' ? <AlertCircle size={16} className="text-orange-500"/> : <CheckCircle size={16} className="text-green-500"/>}
                            </td>
                            <td className="p-3 text-center">
                                <button 
                                    onClick={() => handleOpenEvaluate(m)}
                                    className="bg-bk-blue text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
                                >
                                    Đánh giá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>

        {/* FORM ĐÁNH GIÁ */}
        <div className="bg-white p-6 rounded-xl shadow-lg border h-fit sticky top-24">
            {selectedMentee ? (
                <>
                    <div className="flex items-center gap-3 mb-4 border-b pb-4">
                        <div className="w-12 h-12 bg-bk-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                            {selectedMentee.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{selectedMentee.name}</h3>
                            <p className="text-xs text-gray-500">{selectedMentee.id} - {selectedMentee.session}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Mức độ tiếp thu</label>
                            <select className="w-full p-2 border rounded bg-gray-50">
                                <option>Xuất sắc</option>
                                <option>Tốt</option>
                                <option>Trung bình</option>
                                <option>Cần cố gắng</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Ghi chú tiến bộ</label>
                            <textarea 
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                className="w-full p-3 border rounded h-32 text-sm outline-none focus:ring-2 focus:ring-bk-blue"
                                placeholder="VD: Sinh viên đã hiểu rõ khái niệm, tuy nhiên kỹ năng giải bài tập còn chậm..."
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-2">
                             <input type="checkbox" id="warning" className="w-4 h-4 text-red-600"/>
                             <label htmlFor="warning" className="text-sm text-red-600 font-bold">Báo cáo cần hỗ trợ đặc biệt (Flag)</label>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button onClick={() => setSelectedMentee(null)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded font-bold text-sm">Hủy</button>
                            <button onClick={handleSave} className="flex-1 bg-bk-blue text-white py-2 rounded font-bold text-sm flex items-center justify-center gap-2">
                                <Save size={16}/> Lưu
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-400 py-10">
                    <User size={48} className="mx-auto mb-3 opacity-20"/>
                    <p>Chọn một sinh viên từ danh sách bên trái để bắt đầu đánh giá.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
export default TutorEvaluation;