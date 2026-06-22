import { Search, Filter, Star } from 'lucide-react';

const Matching = () => {
  // Mock Data
  const tutors = [
    { id: 1, name: "Trần Văn B", subject: "Giải tích 1", rating: 4.8, available: "T2, T4 (Chiều)" },
    { id: 2, name: "Lê Thị C", subject: "Lập trình C++", rating: 5.0, available: "T3, T5 (Sáng)" },
    { id: 3, name: "Phạm D", subject: "Vật lý đại cương", rating: 4.5, available: "Cuối tuần" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-bk-blue mb-6">Match Tutor & Mentee</h2>
      
      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20}/>
            <input type="text" placeholder="Tìm môn học, tên tutor..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-bk-blue outline-none" />
        </div>
        <select className="p-2 border rounded-lg bg-white"><option>Tất cả các khoa</option><option>Khoa học máy tính</option></select>
        <select className="p-2 border rounded-lg bg-white"><option>Thời gian rảnh</option></select>
        <button className="bg-bk-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">Tìm kiếm</button>
      </div>

      {/* Suggested Tutors */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-700">Gợi ý cho bạn (AI Matching) ✨</h3>
        {tutors.map((tutor) => (
          <div key={tutor.id} className="bg-white p-6 rounded-xl shadow-sm border flex flex-col md:flex-row items-center justify-between hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <h4 className="font-bold text-lg">{tutor.name}</h4>
                <p className="text-gray-500 text-sm">Môn: <span className="text-bk-blue font-medium">{tutor.subject}</span></p>
                <div className="flex items-center text-yellow-500 text-sm mt-1">
                    <Star size={14} fill="currentColor" /> <span className="ml-1">{tutor.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 text-right">
                <p className="text-sm text-gray-500 mb-2">Lịch: {tutor.available}</p>
                <button className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-medium hover:bg-sky-200">Chọn Tutor</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Matching;