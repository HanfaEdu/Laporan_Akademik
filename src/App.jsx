import React, { useState, useEffect, useRef } from 'react';

export default function PortalNavigasiKelas() {
  const [searchQuery, setSearchQuery] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Palet warna ceria/breeze untuk partikel di tema terang
    const colors = ['#38bdf8', '#fb7185', '#34d399', '#fbbf24'];
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Gerakan kalem dan lambat (0.6)
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2.5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Inisialisasi partikel
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Menggambar garis penghubung antar partikel yang berdekatan
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = 1 - (distance / 130); 
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1.0; 
          }
        }
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
          background: conic-gradient(from 0deg, transparent 40%, var(--glow-color) 100%);
          animation: spin-border 6s linear infinite;
          z-index: 0;
        }

        /* 3. Latar Kartu Transparan ala Glassmorphism Ceria */
        .glass-rainbow-soft {
          background: linear-gradient(135deg, 
            rgba(239, 68, 68, 0.02) 0%, 
            rgba(234, 179, 8, 0.02) 25%, 
            rgba(34, 197, 94, 0.02) 50%, 
            rgba(59, 130, 246, 0.02) 75%, 
            rgba(168, 85, 247, 0.02) 100%
          );
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.85); /* Putih translusen untuk tema cerah */
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

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-14">
          <div className="relative group overflow-hidden rounded-2xl p-[1.5px] shadow-sm">
            {/* Efek Border Berputar untuk Search Bar */}
            <div className="spin-container opacity-25 group-focus-within:opacity-60 transition-opacity duration-700" style={{ '--glow-color': '#0ea5e9' }}></div>
            
            <div className="relative z-10 flex items-center bg-white/95 backdrop-blur-md rounded-[14px] w-full">
              <div className="pl-5 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-slate-400 group-focus-within:text-sky-500 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-3 pr-5 py-4 bg-transparent border-none text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-0 font-medium text-lg"
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
            filteredClasses.map((cls) => (
              <a
                key={cls.id}
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-[24px] overflow-hidden p-[1.5px] transition-transform duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl block"
                style={{ '--glow-color': cls.hex }}
              >
                {/* 1. Latar Belakang yang Berputar */}
                <div className="spin-container opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* 2. Isi Kartu (Soft Rainbow Glass) */}
                <div className="relative h-full w-full rounded-[22.5px] glass-rainbow-soft p-8 flex flex-col justify-between z-10 border border-white/60">
                  
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
