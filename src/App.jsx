import React, { useState } from 'react';

export default function PortalNavigasiKelas() {
  const [searchQuery, setSearchQuery] = useState('');

  // Data Kelas 1-6. Silakan ganti URL pada properti 'link' dengan link Google Sheets asli Anda.
  const classData = [
    { 
      id: 1, 
      name: 'Kelas 1', 
      phase: 'Fase A', 
      link: '#masukkan-link-spreadsheet-kelas-1-disini', 
      color: 'from-sky-400 to-blue-500',
      shadow: 'shadow-blue-200',
      icon: '🎒' 
    },
    { 
      id: 2, 
      name: 'Kelas 2', 
      phase: 'Fase A', 
      link: '#masukkan-link-spreadsheet-kelas-2-disini', 
      color: 'from-indigo-400 to-violet-500',
      shadow: 'shadow-indigo-200',
      icon: '📚' 
    },
    { 
      id: 3, 
      name: 'Kelas 3', 
      phase: 'Fase B', 
      link: '#masukkan-link-spreadsheet-kelas-3-disini', 
      color: 'from-emerald-400 to-teal-500',
      shadow: 'shadow-emerald-200',
      icon: '✏️' 
    },
    { 
      id: 4, 
      name: 'Kelas 4', 
      phase: 'Fase B', 
      link: '#masukkan-link-spreadsheet-kelas-4-disini', 
      color: 'from-amber-400 to-orange-500',
      shadow: 'shadow-amber-200',
      icon: '🧭' 
    },
    { 
      id: 5, 
      name: 'Kelas 5', 
      phase: 'Fase C', 
      link: '#masukkan-link-spreadsheet-kelas-5-disini', 
      color: 'from-rose-400 to-pink-500',
      shadow: 'shadow-rose-200',
      icon: '🔬' 
    },
    { 
      id: 6, 
      name: 'Kelas 6', 
      phase: 'Fase C', 
      link: '#masukkan-link-spreadsheet-kelas-6-disini', 
      color: 'from-fuchsia-400 to-purple-600',
      shadow: 'shadow-purple-200',
      icon: '🎓' 
    }
  ];

  const filteredClasses = classData.filter((cls) =>
    cls.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cls.phase.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen font-sans text-slate-800 overflow-hidden flex flex-col">
      
      {/* --- CUSTOM CSS UNTUK ANIMASI BACKGROUND (TEMA BREEZE/PAGI) --- */}
      <style>{`
        /* Animasi gradasi latar belakang yang sangat lambat dan menenangkan */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-animated-gradient {
          background: linear-gradient(-45deg, #f0f9ff, #e0f2fe, #fdf4ff, #fffbeb);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }

        /* Animasi mengambang (floating) untuk elemen dekoratif */
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 12s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Latar Belakang Animasi CSS */}
      <div className="absolute inset-0 z-0 bg-animated-gradient"></div>
      
      {/* Ornamen Dekoratif Mengambang (Blobs) di Latar Belakang */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/30 blur-3xl animate-float-slow z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-pink-200/30 blur-3xl animate-float-slower z-0 pointer-events-none"></div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 flex-grow max-w-6xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header Bagian Atas */}
        <div className="text-center mb-12 flex flex-col items-center">
          {/* Logo Sekolah (Lokasi public/logo.png sesuai request) */}
          <div className="relative bg-white/60 backdrop-blur-md p-4 rounded-3xl shadow-xl shadow-blue-900/5 mb-6 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/logo.png" 
              alt="Logo SD Yaumi Fatimah Kudus" 
              className="w-20 h-20 object-contain drop-shadow-sm" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/150x150/e0f2fe/0369a1?text=SD+YF"; // Fallback jika logo tidak ditemukan
              }}
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 drop-shadow-sm mb-3">
            Laporan Akademik
          </h1>
          <p className="text-lg md:text-xl font-semibold text-slate-500 tracking-wide">
            SD Yaumi Fatimah Kudus
          </p>
        </div>

        {/* Search Bar (Kesan Modern & Terang) */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-pink-300 rounded-2xl blur opacity-30 group-focus-within:opacity-60 transition duration-500"></div>
            <div className="relative flex items-center bg-white/80 backdrop-blur-xl rounded-2xl w-full border border-white/50 shadow-sm">
              <div className="pl-5 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-3 pr-5 py-4 bg-transparent border-none text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-0 font-medium text-lg"
                placeholder="Cari kelas atau fase..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Grid Cards Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls) => (
              <a
                key={cls.id}
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                {/* Efek Hover Latar Belakang Kartu (Glow) */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${cls.color} rounded-[2rem] blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
                
                {/* Kartu Utama */}
                <div className="relative h-full bg-white/70 backdrop-blur-lg border border-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  
                  {/* Ornamen Sudut (Bulatan transparan di pojok kartu) */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cls.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 ease-out`}></div>

                  {/* Isi Kartu */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-4xl filter drop-shadow-md">{cls.icon}</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500">
                        {cls.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {cls.name}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm">
                      LHM, Rekap Nilai & Absensi
                    </p>
                  </div>

                  {/* Bagian Bawah Kartu (Tombol Panah) */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${cls.color}`}>
                      Buka Spreadsheet
                    </span>
                    <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gradient-to-br ${cls.color} transition-colors duration-300 shadow-sm`}>
                      <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-20 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/50 mb-4">
                <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-500 text-lg font-medium">Kelas yang dicari tidak ditemukan.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-sm font-semibold tracking-widest text-slate-400">
        <p>&copy; {new Date().getFullYear()} SD YAUMI FATIMAH KUDUS</p>
      </footer>
    </div>
  );
}
