import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const classData = [
  { 
    id: 1, 
    className: "Kelas 1", 
    label: "1",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-blue-500 to-cyan-400",
    link: "https://docs.google.com/spreadsheets/d/1ni-fA-2z6sDIjOV0WojK3KjOnBk2D9mvwqCSLbMVhqU/edit?usp=sharing"
  },
  { 
    id: 2, 
    className: "Kelas 2A", 
    label: "2A",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-purple-500 to-pink-400",
    link: "https://docs.google.com/spreadsheets/d/1ZRQk2OniU9a6py1JlNlgvKRnQlnu74XvD4oGf5mDc30/edit?usp=sharing"
  },
  { 
    id: 3, 
    className: "Kelas 2B", 
    label: "2B",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-pink-500 to-rose-400",
    link: "https://docs.google.com/spreadsheets/d/1mPPXLgRUi3udMbkSyEwJJha857IRQqXQNEVvhGG1Bxo/edit?usp=sharing"
  },
  { 
    id: 4, 
    className: "Kelas 3", 
    label: "3",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-emerald-500 to-teal-400",
    link: "https://docs.google.com/spreadsheets/d/1-xj70IwyCD5YAvnf2Icimu4D6qRsp-zdL2mnDFRvwRI/edit?usp=sharing"
  },
  { 
    id: 5, 
    className: "Kelas 4", 
    label: "4",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-amber-500 to-orange-400",
    link: "https://docs.google.com/spreadsheets/d/1cv2W0S-0XZPJMoS_XqNlnowChGp9wODd0SCdxIu9bek/edit?usp=sharing"
  },
  { 
    id: 6, 
    className: "Kelas 5", 
    label: "5",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-red-500 to-rose-500",
    link: "https://docs.google.com/spreadsheets/d/1CTR3F1mqzcTMYppMJH68id3lM8T5ofMPfPCmhPUVMk4/edit?usp=sharing"
  },
  { 
    id: 7, 
    className: "Kelas 6", 
    label: "6",
    desc: "LHM, Tahfidz, Tahsin & Grafik Akademik", 
    gradient: "from-indigo-500 to-violet-500",
    link: "https://docs.google.com/spreadsheets/d/13ylW9o1lZ79WoFyeZqngrmbZCYXvey7L5LOnzni03oc/edit?usp=sharing"
  }
];

export default function PortalKelas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedCard, setClickedCard] = useState(null); // Menyimpan ID kartu yang sedang diklik

  // Filter kelas berdasarkan teks pencarian
  const filteredClasses = classData.filter(cls => 
    cls.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f7fb] relative overflow-hidden font-sans selection:bg-sky-200">
      
      <style dangerouslySetInnerHTML={{__html: `
        /* ANIMASI ROTASI GARIS DI SEARCH BAR */
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        /* ANIMASI BENTUK GEOMETRIS DI LATAR BELAKANG */
        @keyframes float-shape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(45deg); }
        }

        /* ANIMASI GRADASI PELANGI (AIR MENGAMBANG) */
        @keyframes water-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .floating-rainbow-water {
          /* Latar pelangi yang utuh dalam 1 kartu dengan warna pastel */
          background: linear-gradient(
            120deg, 
            rgba(255, 182, 193, 0.5) 0%,   /* Soft Pink */
            rgba(255, 218, 185, 0.5) 20%,  /* Peach */
            rgba(255, 255, 224, 0.5) 40%,  /* Light Yellow */
            rgba(152, 251, 152, 0.5) 60%,  /* Pale Green */
            rgba(173, 216, 230, 0.5) 80%,  /* Light Blue */
            rgba(221, 160, 221, 0.5) 100%  /* Plum */
          );
          background-size: 150% 150%;
          animation: water-flow 20s ease-in-out infinite;
        }
        
        /* LAPISAN PUTIH TRANSPARAN UNTUK KONTRAST TEKS */
        .glass-overlay {
          background-color: rgba(255, 255, 255, 0.7); /* Putih transparan pekat */
          box-shadow: inset 0 0 20px rgba(255,255,255,0.5);
          backdrop-filter: blur(4px);
        }

        /* ANIMASI CAHAYA EMAS (AURA BORDER) */
        @keyframes golden-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.2), 0 0 20px rgba(250, 204, 21, 0.1); }
          50% { box-shadow: 0 0 25px rgba(250, 204, 21, 0.6), 0 0 40px rgba(250, 204, 21, 0.3); }
        }
        .golden-aura {
          animation: golden-glow 6s ease-in-out infinite;
        }

        /* ANIMASI MELOMPAT (SOFT BOUNCE) UNTUK ANGKA */
        @keyframes soft-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-soft-bounce {
          animation-name: soft-bounce;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-iteration-count: infinite;
        }

        /* ANIMASI KARTU DIKLIK (ZOOM IN/MEMBESAR) */
        .animate-zoom-out {
          animation: zoom-into-screen 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 50; /* Membawa kartu ke depan */
        }
        @keyframes zoom-into-screen {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
          20% { transform: scale(0.95); opacity: 1; } /* Efek tertekan ke dalam sedikit */
          100% { transform: scale(1.4); opacity: 0; box-shadow: 0 25px 50px -12px rgba(250, 204, 21, 0.8); } /* Membesar dan memudar ke layar */
        }
      `}} />

      {/* BACKGROUND DEKORASI GEOMETRIS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lingkaran 1 */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border-4 border-sky-100 opacity-60" style={{animation: 'float-shape 12s ease-in-out infinite'}} />
        {/* Segitiga 1 (dibuat dengan clip-path) */}
        <div className="absolute top-[30%] right-[10%] w-24 h-24 bg-rose-100 opacity-50" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'float-shape 15s ease-in-out infinite 2s'}} />
        {/* Kotak 1 */}
        <div className="absolute bottom-[20%] left-[15%] w-20 h-20 bg-emerald-100 opacity-50 rounded-2xl rotate-12" style={{animation: 'float-shape 14s ease-in-out infinite 1s'}} />
        {/* Lingkaran 2 */}
        <div className="absolute top-[60%] right-[25%] w-40 h-40 rounded-full border-[6px] border-amber-100 opacity-50" style={{animation: 'float-shape 18s ease-in-out infinite 3s'}} />
        {/* Segitiga 2 */}
        <div className="absolute bottom-[10%] right-[5%] w-28 h-28 bg-purple-100 opacity-50 rotate-45" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'float-shape 16s ease-in-out infinite 0.5s'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <img 
              src="https://siakad.sdyaumifatimah.sch.id/logo_yaumi.png" 
              alt="Logo SD Yaumi Fatimah" 
              className="w-24 h-24 mx-auto mb-6 relative z-10 drop-shadow-xl rounded-full border-2 border-white bg-white p-1"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-3">
            Laporan Akademik
          </h1>
          <p className="text-lg md:text-xl text-sky-600 font-semibold tracking-wide uppercase">
            SD Yaumi Fatimah Kudus
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-2xl mx-auto mb-16 relative group">
          <div className="absolute -inset-0 bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-400 rounded-2xl opacity-60 group-focus-within:opacity-100 blur transition duration-500 group-hover:duration-200 spin-slow"></div>
          {/* Ketebalan garis outline diatur melalui padding kontainer ini (p-[2.5px]) */}
          <div className="relative bg-white rounded-2xl p-[2.5px] shadow-md group-hover:shadow-lg transition-shadow">
            <div className="relative flex items-center bg-white rounded-[14px] overflow-hidden px-4 py-3">
              <Search className="w-6 h-6 text-slate-400 group-focus-within:text-sky-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Cari kelas..." 
                className="w-full pl-4 pr-4 py-2 text-slate-800 font-semibold placeholder-slate-400 bg-transparent border-none outline-none focus:ring-0 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls, index) => (
              <a
                key={cls.id}
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault(); // Mencegah pindah halaman seketika
                  setClickedCard(cls.id); // Memicu animasi
                  
                  // Menahan selama 1 detik (1000ms) agar animasi zoom selesai
                  setTimeout(() => {
                    window.open(cls.link, '_blank');
                    setClickedCard(null); // Reset state agar kartu kembali normal saat user kembali ke tab ini
                  }, 1000);
                }}
                /* EFEK AURA EMAS DENGAN DELAY ACAK AGAR TIDAK BERSAMAAN */
                className={`group relative rounded-[24px] block transition-transform duration-500 hover:shadow-xl golden-aura ${
                  clickedCard === cls.id ? 'animate-zoom-out' : 'hover:-translate-y-2'
                }`}
                style={{ animationDelay: `-${index * 2.7}s` }} 
              >
                {/* EFEK GRADASI AIR DENGAN KETERLAMBATAN ACAK & LAPISAN PUTIH */}
                <div 
                  className="absolute inset-0 rounded-[24px] floating-rainbow-water"
                  style={{ animationDelay: `-${index * 5.4}s` }}
                ></div>
                <div className="absolute inset-[2px] rounded-[22px] glass-overlay transition-colors duration-500"></div>
                
                {/* KONTEN KARTU */}
                <div className="relative p-8 h-full flex flex-col items-start z-10">
                  {/* Ikon/Label Kelas - MELOMPAT DENGAN DURASI & DELAY ACAK */}
                  <div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${cls.gradient} flex items-center justify-center mb-6 shadow-md border-2 border-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 animate-soft-bounce`}
                    style={{ 
                      animationDuration: `${3 + (index % 3) * 0.5}s`, // Tempo acak 3s - 4.5s
                      animationDelay: `-${index * 1.2}s`            // Mulai berbeda
                    }}
                  >
                    <span className="text-white font-black text-2xl tracking-tighter drop-shadow-md">
                      {cls.label}
                    </span>
                  </div>

                  {/* Teks */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {cls.className}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-8 font-medium leading-relaxed">
                    {cls.desc}
                  </p>

                  {/* Tombol Akses (Visual saja) */}
                  <div className="mt-auto w-full pt-4 border-t border-slate-200/50 flex justify-between items-center">
                    <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700">
                      Buka Spreadsheet
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-indigo-50 group-hover:scale-110 transition-all">
                      <ExternalLink className="w-4 h-4 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-white">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-600 mb-2">Kelas Tidak Ditemukan</h3>
              <p className="text-slate-500">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
