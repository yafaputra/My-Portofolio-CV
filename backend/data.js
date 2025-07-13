// backend/data.js
const educationHistory = [
  { 
    id: 1, 
    period: '2023 - Sekarang', 
    institution: 'Universitas Amikom Yogyakarta', 
    major: 'S1 - Teknik Informatika' 
  },
  { 
    id: 2, 
    period: '2020 - 2023', 
    institution: 'SMK Muhammadiyah Imogiri', 
    major: 'Teknik Komputer dan Jaringan' 
  },
  { 
    id: 3, 
    period: '2017 - 2020', 
    institution: 'SMP Negeri 2 Sanden', 
    major: 'Pendidikan Menengah Pertama' 
  },
  { 
    id: 4, 
    period: '2011 - 2017', 
    institution: 'SD Negeri Tirtomulyo', 
    major: 'Pendidikan Dasar' 
  }
];

// backend/data.js
const skills = [
  {
    name: 'Vue.js',
    level: 95,
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    color: '#4FC08D'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'Programming',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    category: 'Styling',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVklzfGsO-6hPFSuutVa0ingPtO5KZgg2vA-irnqZosRmpp4HHc12Ir-taFq3oO4ujPo&usqp=CAU',
    color: '#06B6D4'
  },
  {
    name: 'Node.js',
    level: 75,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  {
    name: 'Express.js',
    level: 70,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#000000'
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791'
  },
  {
    name: 'Git & GitHub',
    level: 88,
    category: 'Version Control',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032'
  },
  {
    name: 'HTML5 & CSS3',
    level: 95,
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26'
  }
];

const categories = ['Frontend', 'Backend', 'Database', 'Programming', 'Styling', 'Version Control'];

// ... (your existing educationHistory and projects data)

const projects = [
  {
    title: 'Figma Toko Online (Pick Up)',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Desain UI/UX untuk platform e-commerce dengan sistem pick-up yang memudahkan pelanggan mengambil barang langsung dari toko.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Mobile First'],
    link: '#',
    category: 'Design',
    status: 'Completed'
  },
  {
    title: 'Web Sport Venue Booking',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Platform web untuk booking lapangan olahraga dengan fitur real-time availability, payment gateway, dan management system.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Payment Gateway'],
    link: '#',
    category: 'Web Development',
    status: 'In Progress'
  },
  {
    title: 'Rangkaian Mikrokontroler IoT',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Sistem monitoring dan kontrol berbasis Arduino/ESP32 dengan integrasi sensor, actuator, dan komunikasi wireless.',
    tech: ['Arduino', 'ESP32', 'IoT', 'Sensors', 'C++'],
    link: '#',
    category: 'Hardware',
    status: 'Completed'
  }
];

// Single export statement
module.exports = { educationHistory, skills, projects };

