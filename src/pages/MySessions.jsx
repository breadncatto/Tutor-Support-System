import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, MapPin, Edit, MessageSquare, Plus, ChevronRight, Star } from 'lucide-react';
import { SESSIONS_STUDENT, SESSIONS_TUTOR } from '../data/mockData';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <Star
                        key={index}
                        size={28}
                        className="cursor-pointer transition-colors duration-200"
                        fill={ratingValue <= (hover || rating) ? "#FFD700" : "none"} 
                        color={ratingValue <= (hover || rating) ? "#FFD700" : "#D1D5DB"}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                    />
                );
            })}
        </div>
    );
};

const MySessions = () => {
  const { user } = useAuth();
  const [view, setView] = useState('dashboard');
  const [selectedSession, setSelectedSession] = useState(null);

  // --- SUB-COMPONENTS ---

  const StudentDashboard = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-bk-blue mb-4">Upcoming Sessions</h3>
        <div className="space-y-4">
          {SESSIONS_STUDENT.upcoming.map(s => (
            <div key={s.id} className="bg-white p-6 rounded-xl border hover:shadow-md transition flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-bk-blue font-bold">UP</div>
                <div>
                  <h4 className="font-bold text-lg">{s.title}</h4>
                  <p className="text-sm text-gray-600">Tutor: {s.tutor}</p>
                  <div className="flex gap-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><Clock size={12}/> {s.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/> {s.room}</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-bk-blue mb-4">Attended Sessions</h3>
        <div className="space-y-4">
          {SESSIONS_STUDENT.attended.map(s => (
            <div key={s.id} className="bg-white p-6 rounded-xl border flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">OK</div>
                <div>
                  <h4 className="font-bold text-lg">{s.title}</h4>
                  <p className="text-sm text-gray-600">Tutor: {s.tutor}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.date}</p>
                </div>
              </div>
              <button 
                onClick={() => { setSelectedSession(s); setView('feedback'); }}
                className="text-bk-blue hover:underline flex items-center gap-1 text-sm font-medium"
              >
                Feedback <MessageSquare size={16}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TutorDashboard = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-bk-blue">My Managed Sessions</h3>
        <button 
          onClick={() => { setSelectedSession(null); setView('create'); }}
          className="bg-bk-blue text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-blue-700 shadow-sm"
        >
          <Plus size={16}/> Create New Session
        </button>
      </div>
      <div className="space-y-4">
        {SESSIONS_TUTOR.map(s => (
          <div key={s.id} className="bg-white p-6 rounded-xl border flex justify-between items-center hover:shadow-md transition">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">TU</div>
              <div>
                <h4 className="font-bold text-lg">{s.title}</h4>
                <p className="text-sm text-gray-600">Mentee: {s.menteeCount}/{s.maxMentee}</p>
                <p className="text-xs text-gray-400 mt-1">{s.date} • {s.start}-{s.end}</p>
              </div>
            </div>
            <button 
               onClick={() => { setSelectedSession(s); setView('edit'); }}
               className="text-bk-blue hover:underline text-sm font-medium flex items-center gap-1"
            >
              View/Edit <Edit size={16}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Form Feedback
  const FeedbackForm = () => (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold text-bk-blue mb-2">Session Feedback</h2>
      <p className="text-gray-500 mb-6 border-b pb-4">Session: <span className="font-bold text-gray-700">{selectedSession?.title}</span></p>
      
      <div className="space-y-6">
        <div>
          <label className="block font-medium mb-2">How do you rate the quality of the session?</label>
          <StarRating />
        </div>
        <div>
          <label className="block font-medium mb-2">How do you rate the quality of your tutor?</label>
          <StarRating />
        </div>
        <div>
          <label className="block font-medium mb-2">Can you tell us more?</label>
          <textarea className="w-full border rounded-lg p-3 h-32 outline-none focus:ring-2 focus:ring-bk-blue bg-gray-50" placeholder="What's your thought?"></textarea>
        </div>
        <div className="flex justify-end gap-3 pt-4">
            <button onClick={() => setView('dashboard')} className="px-6 py-2 bg-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-300">Cancel</button>
            <button onClick={() => { alert("Feedback sent!"); setView('dashboard'); }} className="px-6 py-2 bg-bk-blue text-white font-bold rounded-lg hover:bg-blue-700">Submit</button>
        </div>
      </div>
    </div>
  );

  const SessionForm = ({ isEdit }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const handleSave = (e) => { e.preventDefault(); if(isEdit) setShowConfirm(true); else { alert("Created!"); setView('dashboard'); }};
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border relative">
        <h2 className="text-2xl font-bold text-bk-blue mb-6">{isEdit ? "View/Update Session" : "Create New Session"}</h2>
        <form className="space-y-4" onSubmit={handleSave}>
          <div><label className="block text-sm font-bold text-gray-700 mb-1">Session Name</label><input defaultValue={isEdit ? selectedSession.title : ""} className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-bk-blue"/></div>
          <div className="grid grid-cols-2 gap-4">
             <div><label className="block text-sm font-bold text-gray-700">Date</label><input type="date" defaultValue={isEdit ? selectedSession.date : ""} className="w-full border p-2 rounded bg-gray-50"/></div>
             <div><label className="block text-sm font-bold text-gray-700">Begin Hour</label><input type="time" defaultValue={isEdit ? selectedSession.start : ""} className="w-full border p-2 rounded bg-gray-50"/></div>
          </div>
          <div><label className="block text-sm font-bold text-gray-700 mb-1">Description</label><textarea defaultValue={isEdit ? selectedSession.desc : ""} className="w-full border p-2 rounded bg-gray-50 h-24 outline-none focus:ring-2 focus:ring-bk-blue"></textarea></div>
          <div className="flex gap-3 mt-6">
            <button type="button" onClick={() => setView('dashboard')} className="flex-1 bg-gray-200 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-300">Cancel</button>
            <button type="submit" className="flex-1 bg-bk-blue text-white py-2 rounded-lg font-bold hover:bg-blue-700">{isEdit ? "Update Session" : "Save Session"}</button>
          </div>
        </form>
        {showConfirm && (
          <div className="absolute inset-0 bg-white/90 flex items-center justify-center rounded-xl z-10 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white p-6 rounded-xl shadow-2xl border text-center max-w-sm w-full">
               <h3 className="text-lg font-bold text-bk-blue mb-4">Confirm Changes?</h3>
               <div className="flex gap-3 justify-center">
                  <button onClick={() => { alert("Updated!"); setShowConfirm(false); setView('dashboard'); }} className="bg-red-500 text-white px-4 py-2 rounded font-medium hover:bg-red-600">Yes, Change</button>
                  <button onClick={() => setShowConfirm(false)} className="bg-bk-blue text-white px-4 py-2 rounded font-medium hover:bg-blue-700">No, Keep</button>
               </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {view !== 'dashboard' && (
        <button onClick={() => setView('dashboard')} className="mb-4 text-gray-500 hover:text-bk-blue flex items-center gap-1">&larr; Back to My Sessions</button>
      )}
      {view === 'dashboard' && (user?.role === 'STUDENT' ? <StudentDashboard /> : <TutorDashboard />)}
      {view === 'feedback' && <FeedbackForm />}
      {view === 'create' && <SessionForm isEdit={false} />}
      {view === 'edit' && <SessionForm isEdit={true} />}
    </div>
  );
};

export default MySessions;