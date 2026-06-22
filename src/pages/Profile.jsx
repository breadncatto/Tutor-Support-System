import { useAuth } from '../context/AuthContext';
import { Mail, Phone, MapPin, Book, Briefcase } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Cover */}
        <div className="h-32 bg-gradient-to-r from-bk-blue to-blue-400"></div>
        
        <div className="px-8 py-6 relative">
          {/* Dynamic Avatar */}
          <div className="w-24 h-24 bg-white rounded-full absolute -top-12 border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold text-gray-400">
            {user.avatar}
          </div>
          
          <div className="mt-12 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
              <span className="inline-block mt-2 bg-blue-100 text-bk-blue text-xs px-2 py-1 rounded font-bold">
                {user.role}
              </span>
            </div>
          </div>

          {/* Data synced from Datacore */}
          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-sm font-bold text-bk-blue uppercase mb-4 flex items-center gap-2">
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-xs text-gray-500 block mb-1">Mã số {user.role === 'STUDENT' ? 'sinh viên' : 'cán bộ'}</label>
                    <span className="font-bold text-gray-800 text-lg">{user.id}</span>
                </div>
                <div>
                    <label className="text-xs text-gray-500 block mb-1">Khoa / Ngành</label>
                    <span className="font-bold text-gray-800">Khoa học và Kỹ thuật Máy tính</span>
                </div>
                <div>
                    <label className="text-xs text-gray-500 block mb-1">Trạng thái</label>
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold">
                        {user.role === 'STUDENT' ? 'Đang học' : 'Đang công tác'}
                    </span>
                </div>
                <div>
                    <label className="text-xs text-gray-500 block mb-1">Email học vụ</label>
                    <span className="font-medium text-gray-700">{user.email}</span>
                </div>
            </div>
          </div>

          {/* Personal Settings */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Briefcase size={20} /> Cài đặt cá nhân
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition">
                    <span className="text-gray-700">Nhận thông báo qua Email</span>
                    <input type="checkbox" className="w-5 h-5 text-bk-blue rounded focus:ring-bk-blue" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition">
                    <span className="text-gray-700">Chia sẻ hồ sơ công khai</span>
                    <input type="checkbox" className="w-5 h-5 text-bk-blue rounded focus:ring-bk-blue" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;