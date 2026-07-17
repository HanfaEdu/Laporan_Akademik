// ... existing code ...
        }
        .golden-aura {
          /* Animasi diperlambat lagi menjadi 12 detik */
          animation: golden-glow 12s ease-in-out infinite;
          border: 1px solid rgba(250, 204, 21, 0.5);
        }

        /* 5. Animasi Melompat Lembut (Soft Bounce) untuk Angka Kelas */
        @keyframes soft-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {/* CANVAS BACKGROUND */}
// ... existing code ...
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
// ... existing code ...
                <div 
                  className="relative h-full w-full rounded-[22.5px] floating-rainbow-water p-8 flex flex-col justify-between z-10 border border-white/60"
                  style={{ animationDelay: `-${index * 5.3}s` }} /* Waktu mulai gerakan pelangi tiap kartu tidak bersamaan */
                >
                  
                  {}
                  {/* Bagian Atas Kartu: Ikon/Angka & Judul */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      {/* Kontainer Animasi Melompat - Tempo dibuat bervariasi dengan modulo indeks */}
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
                    <p className="text-slate-500 font-medium text-sm">
                      LHM, Rekap Nilai & Absensi
// ... existing code ...
