import { useState } from 'react';
import { Search, FileText, Video, Download, Upload, X } from 'lucide-react';
import { RESOURCES } from '../data/mockData';

const Resources = () => {
  const [view, setView] = useState('list'); // 'list' or 'upload'
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc resource
  const filteredResources = RESOURCES.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-bk-blue">
          {view === 'list' ? 'Manage Learning Resources' : 'Upload New Resource'}
        </h2>
        {view === 'list' && (
          <button 
            onClick={() => setView('upload')}
            className="flex items-center gap-2 bg-bk-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Upload size={18} /> Upload New
          </button>
        )}
        {view === 'upload' && (
          <button 
            onClick={() => setView('list')}
            className="flex items-center gap-2 text-gray-500 hover:text-bk-blue"
          >
            <X size={18} /> Cancel
          </button>
        )}
      </div>

      {view === 'list' ? (
        <>
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border mb-6 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search resource by name..." 
                className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-bk-blue"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-bk-blue text-white px-6 rounded-lg">Search</button>
          </div>

          {/* List */}
          <div className="space-y-4">
            {filteredResources.map((res) => (
              <div key={res.id} className="bg-white p-5 rounded-xl border hover:shadow-md transition flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-bk-blue">
                    {res.type === 'Video' ? <Video size={24} /> : <FileText size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{res.name}</h4>
                    <p className="text-sm text-gray-500">Type: {res.type} • Updated: {res.date} • By: {res.author}</p>
                  </div>
                </div>
                <button className="text-bk-blue font-medium hover:underline flex items-center gap-1">
                  Download/View <Download size={16}/>
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Upload Form */
        <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Resource's Name</label>
              <input type="text" className="w-full p-3 border rounded-lg bg-gray-50" placeholder="Enter name..." />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">File Upload (Max 200MB)</label>
              <input type="file" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
              <select className="w-full p-3 border rounded-lg bg-gray-50">
                <option>PDF Document</option>
                <option>Video</option>
                <option>Slide</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
              <textarea className="w-full p-3 border rounded-lg bg-gray-50 h-32" placeholder="Enter description..."></textarea>
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={() => setView('list')} className="px-6 py-3 bg-gray-200 rounded-lg font-bold text-gray-600">Cancel</button>
              <button type="submit" className="px-6 py-3 bg-bk-blue rounded-lg font-bold text-white hover:bg-blue-700">Save Resource</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Resources;