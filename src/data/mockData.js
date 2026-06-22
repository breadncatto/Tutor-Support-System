// 1. TÀI LIỆU HỌC TẬP (Resources)
export const RESOURCES = [
  { id: 1, name: "Slide bài giảng CTDL & GT", type: "PDF", date: "2025-10-20", author: "Dr. Le Van C" },
  { id: 2, name: "Video hướng dẫn ReactJS", type: "Video", date: "2025-11-02", author: "Tutor Nguyen A" },
  { id: 3, name: "Đề thi mẫu Giải tích 1", type: "Document", date: "2025-11-05", author: "Mentor Tran B" },
];

// 2. SESSION CỦA SINH VIÊN 
export const SESSIONS_STUDENT = {
  upcoming: [
    { id: 101, title: "Ôn tập Đại số tuyến tính", tutor: "Nguyen Van A", time: "14:00 - 16:00", date: "2025-12-20", room: "H6-201" },
    { id: 102, title: "Hướng dẫn đồ án TN", tutor: "Le Thi B", time: "09:00 - 11:00", date: "2025-12-22", room: "Online (Zoom)" },
  ],
  attended: [
    { id: 99, title: "Nhập môn Lập trình Python", tutor: "Tran C", time: "08:00 - 10:00", date: "2025-10-15", status: "Done" },
    { id: 98, title: "Kỹ năng viết CV", tutor: "HR Guest", time: "18:00 - 20:00", date: "2025-10-10", status: "Done" },
  ]
};

// 3. SESSION CỦA TUTOR 
export const SESSIONS_TUTOR = [
  { id: 201, title: "Phụ đạo C++ cơ bản", menteeCount: 15, maxMentee: 20, date: "2025-12-25", start: "13:00", end: "15:00", desc: "Ôn tập pointer và struct" },
  { id: 202, title: "Giải đáp thắc mắc Vật lý 1", menteeCount: 5, maxMentee: 10, date: "2025-12-26", start: "08:00", end: "10:00", desc: "Chương Động lực học" },
];

// 4. DANH SÁCH MENTEE 
export const MENTEE_LIST = [
  { id: "SV001", name: "Lê Văn C", session: "Đại số tuyến tính", progress: "Tốt", lastNote: "Hiểu bài nhanh, cần làm thêm bài tập.", status: "Active" },
  { id: "SV002", name: "Phạm Thị D", session: "Đại số tuyến tính", progress: "Cần cố gắng", lastNote: "Còn yếu phần Ma trận nghịch đảo.", status: "Warning" },
  { id: "SV003", name: "Nguyễn E", session: "Lập trình C++", progress: "Xuất sắc", lastNote: "Hoàn thành bài tập trước hạn.", status: "Active" },
];

// 5. THỐNG KÊ MÔN HỌC 
export const SUBJECT_STATS = [
  { subject: "Cấu trúc dữ liệu", avgScore: 7.5, passRate: 85, lowPerfStudents: 12 },
  { subject: "Giải tích 1", avgScore: 6.2, passRate: 70, lowPerfStudents: 45 },
  { subject: "Vật lý đại cương", avgScore: 6.8, passRate: 78, lowPerfStudents: 20 },
  { subject: "Lập trình Python", avgScore: 8.1, passRate: 92, lowPerfStudents: 5 },
];

// 6. THỐNG KÊ NGUỒN LỰC 
export const RESOURCE_STATS = {
  totalTutors: 150,
  activeClasses: 45,
  roomUsage: 85, // %
  studentTutorRatio: "15:1", 
  budgetUsed: "65%",
  shortageAreas: ["Khoa học máy tính", "Điện tử viễn thông"]
};

// 7. ĐIỂM RÈN LUYỆN & HỌC BỔNG 
export const TRAINING_POINTS = [
  { id: "SV101", name: "Nguyen Van A", event: "Tutor Session: Math", points: 5, scholarshipEligible: true, status: "Pending" },
  { id: "SV102", name: "Tran B", event: "Seminar AI", points: 3, scholarshipEligible: false, status: "Approved" },
  { id: "SV103", name: "Le C", event: "Workshop Soft Skills", points: 5, scholarshipEligible: true, status: "Pending" },
];

// 8. DANH SÁCH NGƯỜI DÙNG 
export const USERS = [
  {
    id: "SV001",
    name: "Nguyễn Văn A",
    role: "STUDENT",
    email: "student@hcmut.edu.vn",
    avatar: "A"
  },
  {
    id: "GV001",
    name: "Dr. Trần Thị B",
    role: "TUTOR",
    email: "tutor@hcmut.edu.vn",
    avatar: "B"
  },
  {
    id: "MNG01",
    name: "Thầy Trưởng Khoa",
    role: "FACULTY",
    email: "faculty@hcmut.edu.vn",
    avatar: "F"
  },
  {
    id: "MNG02",
    name: "Cô Phòng Đào Tạo",
    role: "ACADEMIC_AFFAIRS",
    email: "aa@hcmut.edu.vn",
    avatar: "AA"
  },
  {
    id: "MNG03",
    name: "Thầy CTSV",
    role: "STUDENT_AFFAIRS",
    email: "ctsv@hcmut.edu.vn",
    avatar: "SA"
  }
];

export const PARTICIPATION_RESULTS = [
  { id: "SV102", name: "Nguyen Van A", score: 85, status: "Pending" },
  { id: "SV103", name: "Nguyen Van G", score: 92, status: "Approved" },
];