import React, { useState, useEffect, useRef } from 'react';

export default function PortalNavigasiKelas() {
  const [searchQuery, setSearchQuery] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Palet warna untuk bentuk geometris (lebih lembut untuk background)
    const colors = ['rgba(56, 189, 248, 0.4)', 'rgba(251, 113, 133, 0.4)', 'rgba(52, 211, 153, 0.4)', 'rgba(251, 191, 36, 0.4)'];
    let shapes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Gerakan lambat dan mengambang
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 20 + 10; // Ukuran bervariasi
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.type = Math.random() > 0.5 ? 'triangle' : 'square'; // Jenis bentuk
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Memantul di tepi
        if (this.x < -this.size || this.x > canvas.width + this.size) this.vx *= -1;
        if (this.y < -this.size || this.y > canvas.height + this.size) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.beginPath();
        if (this.type === 'triangle') {
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size * 0.866, this.size * 0.5); // 0.866 ~ sin(60deg)
          ctx.lineTo(-this.size * 0.866, this.size * 0.5);
        } else { // square
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        }
        ctx.closePath();
        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Inisialisasi bentuk
    for (let i = 0; i < 30; i++) { // Kurangi jumlah agar tidak terlalu ramai
      shapes.push(new Shape());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < shapes.length; i++) {
        shapes[i].update();
        shapes[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const classData = [
    { 
      id: '1', 
      name: 'Kelas 1', 
      link: 'https://docs.google.com/spreadsheets/d/1ni-fA-2z6sDIjOV0WojK3KjOnBk2D9mvwqCSLbMVhqU/edit?usp=sharing', 
      color: 'from-sky-400 to-blue-500',
      hex: '#0ea5e9',
      icon: '🎒' 
    },
    { 
      id: '2a', 
      name: 'Kelas 2A', 
      link: 'https://docs.google.com/spreadsheets/d/1ZRQk2OniU9a6py1JlNlgvKRnQlnu74XvD4oGf5mDc30/edit?usp=sharing', 
      color: 'from-indigo-400 to-violet-500',
      hex: '#6366f1',
      icon: '📚' 
    },
    { 
      id: '2b', 
      name: 'Kelas 2B', 
      link: 'https://docs.google.com/spreadsheets/d/1mPPXLgRUi3udMbkSyEwJJha857IRQqXQNEVvhGG1Bxo/edit?usp=sharing', 
      color: 'from-violet-400 to-purple-500',
      hex: '#8b5cf6',
      icon: '📖' 
    },
    { 
      id: '3', 
      name: 'Kelas 3', 
      link: 'https://docs.google.com/spreadsheets/d/1-xj70IwyCD5YAvnf2Icimu4D6qRsp-zdL2mnDFRvwRI/edit?usp=sharing', 
      color: 'from-emerald-400 to-teal-500',
      hex: '#10b981',
      icon: '✏️' 
    },
    { 
      id: '4', 
      name: 'Kelas 4', 
      link: 'https://docs.google.com/spreadsheets/d/1cv2W0S-0XZPJMoS_XqNlnowChGp9wODd0SCdxIu9bek/edit?usp=sharing', 
      color: 'from-amber-400 to-orange-500',
      hex: '#f59e0b',
      icon: '🧭' 
    },
    { 
      id: '5', 
      name: 'Kelas 5', 
      link: 'https://docs.google.com/spreadsheets/d/1CTR3F1mqzcTMYppMJH68id3lM8T5ofMPfPCmhPUVMk4/edit?usp=sharing', 
      color: 'from-rose-400 to-pink-500',
      hex: '#f43f5e',
      icon: '🔬' 
    },
    { 
      id: '6', 
      name: 'Kelas 6', 
      link: 'https://docs.google.com/spreadsheets/d/13ylW9o1lZ79WoFyeZqngrmbZCYXvey7L5LOnzni03oc/edit?usp=sharing', 
      color: 'from-fuchsia-400 to-purple-600',
      hex: '#d946ef',
      icon: '🎓' 
    }
  ];

  const filteredClasses = classData.filter((cls) =>
    cls.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden flex flex-col">
      
      {/* CUSTOM CSS UNTUK ANIMASI HIDUP & ELEGAN */}
      <style>{`
        /* 1. Animasi Ripple Logo (Sangat lambat: 5 detik) */
        @keyframes ripple-pulse {
          0% { transform: scale(0.8); opacity: 0.3; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .ripple-ring {
          position: absolute;
          border-radius: 50%;
          animation: ripple-pulse 5s cubic-bezier(0.1, 0.7, 1, 0.1) infinite;
        }

        /* 2. Animasi Spinning Border untuk Kartu & Search */
        @keyframes spin-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin-container {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          /* GRADASI DIPERTEGAS: Dari transparan perlahan ke warna solid di ujungnya */
          background: conic-gradient(from 0deg, transparent 40%, var(--glow-color) 100%);
          animation: spin-border 6s linear infinite;
          z-index: 0;
        }

        /* 3. Latar Kartu: Gradasi Pelangi Air Mengambang */
        @keyframes water-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .floating-rainbow-water {
          /* Gradasi warna diubah menjadi sangat pastel/lembut */
          background: linear-gradient(
            135deg, 
            rgba(254, 205, 211, 0.5) 0%,   /* Pastel Rose */
            rgba(253, 230, 138, 0.5) 20%,  /* Pastel Amber */
            rgba(254, 240, 138, 0.5) 40%,  /* Pastel Yellow */
            rgba(167, 243, 208, 0.5) 60%,  /* Pastel Emerald */
            rgba(186, 230, 253, 0.5) 80%,  /* Pastel Sky */
            rgba(233, 213, 255, 0.5) 100%  /* Pastel Purple */
          );
          background-size: 150% 150%; 
          animation: water-flow 35s ease infinite; /* Diperlambat drastis (dari 20s ke 35s) */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background-color: rgba(255, 255, 255, 0.75); /* Putih dipertebal agar teks sangat jelas terbaca */
          box-shadow: inset 0 2px 20px rgba(255, 255, 255, 0.7), inset 0 -2px 10px rgba(0, 0, 0, 0.03);
        }

        /* 4. Cahaya Emas Berpendar Keluar */
        @keyframes golden-glow {
          0% { 
            box-shadow: 0 0 15px 2px rgba(250, 204, 21, 0.3), 0 0 30px 5px rgba(250, 204, 21, 0.1); 
            border-color: rgba(250, 204, 21, 0.4); 
          }
          50% { 
            box-shadow: 0 0 25px 5px rgba(250, 204, 21, 0.7), 0 0 50px 15px rgba(250, 204, 21, 0.3); 
            border-color: rgba(250, 204, 21, 0.9); 
          }
          100% { 
            box-shadow: 0 0 15px 2px rgba(250, 204, 21, 0.3), 0 0 30px 5px rgba(250, 204, 21, 0.1); 
            border-color: rgba(250, 204, 21, 0.4); 
          }
        }
        .golden-aura {
          /* Animasi diperlambat lagi menjadi 12 detik */
          animation: golden-glow 12s ease-in-out infinite;
          border: 1px solid rgba(250, 204, 21, 0.5);
        }
      `}</style>

      {/* CANVAS BACKGROUND */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 flex-grow max-w-6xl mx-auto w-full py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header Bagian Atas */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="relative flex justify-center items-center mb-6 w-24 h-24">
            {/* Cincin berpendar pada Logo */}
            <div className="ripple-ring w-full h-full border border-sky-400" style={{ animationDelay: '0s' }}></div>
            <div className="ripple-ring w-full h-full border border-pink-400" style={{ animationDelay: '1.6s' }}></div>
            <div className="ripple-ring w-full h-full border border-amber-400" style={{ animationDelay: '3.2s' }}></div>
            
            <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg shadow-sky-900/10 hover:scale-105 transition-transform duration-500 ease-out">
              <img 
                src="/logo.png" 
                alt="Logo SD Yaumi Fatimah Kudus" 
                className="w-20 h-20 object-contain drop-shadow-sm" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/150x150/e0f2fe/0369a1?text=SD+YF";
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 drop-shadow-sm mb-3">
            Laporan Akademik
          </h1>
          <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 tracking-widest uppercase">
            SD Yaumi Fatimah Kudus
          </p>
        </div>

        {/* Search Bar - DIPERTEGAS */}
        <div className="max-w-xl mx-auto mb-14">
          {/* Border p-[2.5px] lebih tebal dari sebelumnya p-[1.5px] */}
          <div className="relative group overflow-hidden rounded-2xl p-[2.5px] shadow-md hover:shadow-lg transition-shadow duration-300">
            
            {/* Efek Border Berputar untuk Search Bar - Opacity ditingkatkan drastis */}
            {/* Default opacity-60, saat difokuskan opacity-100 */}
            <div 
              className="spin-container opacity-60 group-focus-within:opacity-100 transition-opacity duration-700" 
              style={{ '--glow-color': '#0ea5e9' /* Warna Biru Sky Tailwind yang terang */ }}
            ></div>
            
            <div className="relative z-10 flex items-center bg-white/95 backdrop-blur-md rounded-[13px] w-full">
              <div className="pl-5 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-slate-400 group-focus-within:text-sky-600 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-3 pr-5 py-4 bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 font-semibold text-lg"
                placeholder="Cari kelas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Grid Cards Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls, index) => (
              <a
                key={cls.id}
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-[24px] overflow-hidden p-[1.5px] transition-transform duration-500 hover:-translate-y-2 block golden-aura"
                style={{ 
                  '--glow-color': cls.hex,
                  animationDelay: `-${index * 2.7}s` /* Waktu mulai pendaran emas tiap kartu tidak bersamaan */
                }}
              >
                {/* 1. Latar Belakang yang Berputar */}
                <div className="spin-container opacity-20 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* 2. Isi Kartu (Efek Pelangi Air Mengambang) */}
                <div 
                  className="relative h-full w-full rounded-[22.5px] floating-rainbow-water p-8 flex flex-col justify-between z-10 border border-white/60"
                  style={{ animationDelay: `-${index * 5.3}s` }} /* Waktu mulai gerakan pelangi tiap kartu tidak bersamaan */
                >
                  
                  {/* Bagian Atas Kartu: Ikon & Judul */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cls.color} flex items-center justify-center text-3xl shadow-md z-10 transform group-hover:scale-110 transition-transform duration-500`}>
                        {cls.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {cls.name}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm">
                      LHM, Rekap Nilai & Absensi
                    </p>
                  </div>

                  {/* Bagian Bawah Kartu: Teks & Panah */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${cls.color}`}>
                      Buka Spreadsheet
                    </span>
                    <div className="z-10 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <svg className="h-6 w-6 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-20 relative z-10">
              <p className="text-slate-500 text-lg tracking-wide">Kelas tidak ditemukan.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm font-semibold tracking-widest text-slate-400">
        <p>&copy; {new Date().getFullYear()} SD YAUMI FATIMAH KUDUS</p>
      </footer>
    </div>
  );
}
