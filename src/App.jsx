import React, { useState, useEffect, useRef } from 'react';

export default function PortalKelas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [clickedCard, setClickedCard] = useState(null); // NEW: state untuk animasi klik
  const canvasRef = useRef(null);

  // MESIN PARTIKEL CANVAS (Latar Belakang Geometris Cerah & Kalem)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const colors = ['#38bdf8', '#818cf8', '#34d399', '#fbbf24', '#f472b6'];
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
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 10 + 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = Math.floor(Math.random() * 3);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        if (this.shape === 0) {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else if (this.shape === 1) {
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size, this.size);
          ctx.lineTo(-this.size, this.size);
        } else {
          ctx.rect(-this.size, -this.size, this.size * 2, this.size * 2);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        for (let j = 0; j < particles.length; j++) {
          const p2 = particles[j];
          if (this === p2) continue;

          const dx = this.x - p2.x;
          const dy = this.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = 0.05 * (1 - (distance / 150));
            ctx.lineWidth = 1;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }
    }

    for (let i = 0; i < 40; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // DATA KELAS DENGAN LABEL ANGKA UNIK
  const classData = [
    {
      id: '1',
      name: 'Kelas 1',
      link: 'https://docs.google.com/spreadsheets/d/1ni-fA-2z6sDIjOV0WojK3KjOnBk2D9mvwqCSLbMVhqU/edit?usp=sharing',
      color: 'from-sky-400 to-blue-600',
      hex: '#0284c7',
      label: '1'
    },
    {
      id: '2a',
      name: 'Kelas 2A',
      link: 'https://docs.google.com/spreadsheets/d/1ZRQk2OniU9a6py1JlNlgvKRnQlnu74XvD4oGf5mDc30/edit?usp=sharing',
      color: 'from-pink-400 to-rose-600',
      hex: '#e11d48',
      label: '2A'
    },
    {
      id: '2b',
      name: 'Kelas 2B',
      link: 'https://docs.google.com/spreadsheets/d/1mPPXLgRUi3udMbkSyEwJJha857IRQqXQNEVvhGG1Bxo/edit?usp=sharing',
      color: 'from-purple-400 to-fuchsia-600',
      hex: '#c026d3',
      label: '2B'
    },
    {
      id: '3',
      name: 'Kelas 3',
      link: 'https://docs.google.com/spreadsheets/d/1-xj70IwyCD5YAvnf2Icimu4D6qRsp-zdL2mnDFRvwRI/edit?usp=sharing',
      color: 'from-emerald-400 to-green-600',
      hex: '#16a34a',
      label: '3'
    },
    {
      id: '4',
      name: 'Kelas 4',
      link: 'https://docs.google.com/spreadsheets/d/1cv2W0S-0XZPJMoS_XqNlnowChGp9wODd0SCdxIu9bek/edit?usp=sharing',
      color: 'from-amber-400 to-orange-600',
      hex: '#ea580c',
      label: '4'
    },
    {
      id: '5',
      name: 'Kelas 5',
      link: 'https://docs.google.com/spreadsheets/d/1CTR3F1mqzcTMYppMJH68id3lM8T5ofMPfPCmhPUVMk4/edit?usp=sharing',
      color: 'from-indigo-400 to-blue-700',
      hex: '#4338ca',
      label: '5'
    },
    {
      id: '6',
      name: 'Kelas 6',
      link: 'https://docs.google.com/spreadsheets/d/13ylW9o1lZ79WoFyeZqngrmbZCYXvey7L5LOnzni03oc/edit?usp=sharing',
      color: 'from-red-400 to-red-600',
      hex: '#dc2626',
      label: '6'
    }
  ];

  const filteredClasses = classData.filter((cls) =>
    cls.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen font-sans text-slate-800 bg-slate-50 overflow-hidden">

      {/* --- CUSTOM CSS LENGKAP --- */}
      <style>{`
       /* 1. Animasi Ripple Logo */
       @keyframes ripple-pulse {
         0% { transform: scale(0.8); opacity: 0.2; }
         100% { transform: scale(2.5); opacity: 0; }
       }
       .ripple-ring {
         position: absolute;
         border-radius: 50%;
         animation: ripple-pulse 4s cubic-bezier(0.1, 0.7, 1, 0.1) infinite;
       }

       /* 2. Animasi Garis Kotak Pencarian */
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
         animation: spin-border 5s linear infinite;
         z-index: 0;
       }

       /* 3. Latar Kartu Transparan Pelangi */
       @keyframes water-flow {
         0% { background-position: 0% 50%; }
         50% { background-position: 100% 50%; }
         100% { background-position: 0% 50%; }
       }
       .floating-rainbow-water {
         background-color: rgba(255, 255, 255, 0.7);
         background-image: linear-gradient(135deg,
           rgba(252, 165, 165, 0.2) 0%,
           rgba(253, 224, 71, 0.15) 20%,
           rgba(134, 239, 172, 0.2) 40%,
           rgba(147, 197, 253, 0.2) 60%,
           rgba(196, 181, 253, 0.2) 80%,
           rgba(252, 165, 165, 0.2) 100%
         );
         background-size: 150% 150%;
         animation: water-flow 35s ease-in-out infinite;
         backdrop-filter: blur(16px);
         -webkit-backdrop-filter: blur(16px);
         box-shadow: inset 0 2px 10px rgba(255,255,255,0.8);
       }

       /* 4. Cahaya Emas Luar Kartu (Golden Aura) */
       @keyframes golden-glow {
         0%, 100% { box-shadow: 0 0 10px 0 rgba(250, 204, 21, 0); }
         50% { box-shadow: 0 0 30px 10px rgba(250, 204, 21, 0.35); }
       }
       .golden-aura {
         animation: golden-glow 12s ease-in-out infinite;
         border: 1px solid rgba(250, 204, 21, 0.4);
       }

       /* 5. Animasi Angka Melompat (Soft Bounce) */
       @keyframes soft-bounce {
         0%, 100% { transform: translateY(0); }
         50% { transform: translateY(-12px); }
       }

       /* 6. NEW: Animasi Kartu Diklik (Zoom In Extreme, seperti masuk portal) */
       .animate-zoom-out {
         animation: zoom-into-screen 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
         z-index: 50;
       }
       @keyframes zoom-into-screen {
         0% { transform: scale(1); opacity: 1; }
         15% { transform: scale(0.95); opacity: 1; box-shadow: inset 0 0 15px rgba(0,0,0,0.1); }
         100% { transform: scale(3); opacity: 0; box-shadow: 0 0 100px rgba(255, 255, 255, 1); }
       }
     `}</style>

      {/* CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
      />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center mt-8">
          <div className="relative flex justify-center items-center mb-8 w-28 h-28">
            <div className="ripple-ring w-full h-full border border-sky-300" style={{ animationDelay: '0s' }}></div>
            <div className="ripple-ring w-full h-full border border-pink-300" style={{ animationDelay: '1.3s' }}></div>
            <div className="ripple-ring w-full h-full border border-amber-300" style={{ animationDelay: '2.6s' }}></div>

            <div className="relative z-10 bg-white p-3 rounded-full shadow-lg border-2 border-white">
              <img src="/logo.png" alt="Logo SD Yaumi Fatimah Kudus" className="w-24 h-24 object-contain rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-slate-800 drop-shadow-sm mb-2">
            Laporan Akademik
          </h1>
          <p className="mt-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 tracking-widest uppercase">
            SD Yaumi Fatimah Kudus
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group overflow-hidden rounded-2xl p-[3px] shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="spin-container opacity-60 group-focus-within:opacity-100 transition-opacity duration-500" style={{ '--glow-color': '#0ea5e9' }}></div>

            <div className="relative z-10 flex items-center bg-white rounded-[13px] w-full h-full">
              <div className="pl-5 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-slate-400 group-focus-within:text-sky-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-4 pr-5 py-4 bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 font-semibold text-lg"
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
                onClick={(e) => {
                  e.preventDefault(); // NEW: cegah navigasi langsung
                  setClickedCard(cls.id); // Mulai animasi zoom (1.5 detik)

                  // Tahan 1.2 detik sebelum membuka link agar animasi terlihat
                  setTimeout(() => {
                    window.open(cls.link, '_blank');
                    setClickedCard(null); // Kembalikan ke normal
                  }, 1200);
                }}
                className={`group relative rounded-[24px] block transition-transform duration-500 hover:shadow-xl golden-aura ${
                  clickedCard === cls.id ? 'animate-zoom-out' : 'hover:-translate-y-2'
                }`}
                style={{
                  animationDelay: `-${index * 2.7}s`,
                }}
              >

                {/* LAPISAN PELANGI PASTEL DENGAN DELAY ACAK */}
                <div
                  className="relative h-full w-full rounded-[22.5px] floating-rainbow-water p-8 flex flex-col justify-between z-10 border border-white/60"
                  style={{ animationDelay: `-${index * 5.3}s` }}
                >

                  {/* Bagian Atas Kartu: Angka Kelas yang Melompat Acak */}
                  <div>
                    <div className="flex justify-between items-start mb-6">

                      <div
                        style={{
                          animation: `soft-bounce ${3 + (index % 3) * 0.5}s ease-in-out infinite`,
                          animationDelay: `-${index * 1.2}s`
                        }}
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cls.color} flex items-center justify-center shadow-lg border-2 border-white/80 z-10 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                          <span className="text-white font-black text-2xl tracking-tighter drop-shadow-md">
                            {cls.label}
                          </span>
                        </div>
                      </div>

                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {cls.name}
                    </h3>
                    <p className="text-slate-600 font-medium text-sm">
                      LHM, Rekap Nilai & Absensi
                      LHM, Tahfidz, Tahsin & Grafik Akademik
                    </p>
                  </div>

                  {/* Bagian Bawah: Indikator Buka */}
                  <div className="mt-8 flex items-center text-sm font-bold text-sky-600 group-hover:text-sky-500 transition-colors duration-300">
                    Buka Spreadsheet
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-20 relative z-10">
              <p className="text-slate-500 text-lg tracking-wide font-medium">Kelas tidak ditemukan.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center text-sm font-semibold tracking-widest text-slate-400 relative z-10">
          <p>&copy; {new Date().getFullYear()} SD YAUMI FATIMAH KUDUS</p>
        </div>

      </div>
    </div>
  );
}
