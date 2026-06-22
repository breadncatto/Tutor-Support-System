import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" 
         style={{backgroundImage: "url('https://hcmut.edu.vn/img/campus/campus-1.jpg')"}}>
      <div className="absolute inset-0 bg-bk-blue/60 backdrop-blur-sm"></div>
      
      <div className="relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-700">Register</h2>
            <h1 className="text-2xl font-bold text-bk-blue">BK<span className="text-sky-500">nect</span></h1>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Username</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-bk-blue" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-bk-blue" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Phone</label>
            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-bk-blue" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-bk-blue" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Confirm Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-bk-blue" />
          </div>
          
          <button type="button" className="w-full bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600 transition">
            Register
          </button>
          
          <Link to="/login" className="block w-full text-center bg-bk-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Have Account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Register;