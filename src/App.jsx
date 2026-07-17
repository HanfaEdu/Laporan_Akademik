// ... existing code ...
        /* ANIMASI KARTU DIKLIK (ZOOM OUT) */
        .animate-zoom-out {
          /* Durasi animasi diubah menjadi 1 detik (1s) agar sinkron dengan delay klik */
          animation: zoom-into-screen 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 50; /* Membawa kartu ke depan */
        }
        
        @keyframes zoom-into-screen {
// ... existing code ...
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls, index) => (
              <a
                key={cls.id}
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault(); // Mencegah browser membuka link seketika
                  setClickedCard(cls.id);
                  
                  // Jeda 1000ms (1 detik) agar animasi "membesar" selesai dengan utuh, lalu buka link
                  setTimeout(() => {
                    window.open(cls.link, '_blank');
                    setClickedCard(null); // Reset agar kartu kembali normal saat user kembali ke tab ini
                  }, 1000);
                }}
                /* 1. KELAS AURA EMAS DENGAN DELAY ACAK AGAR TIDAK SINKRON */
                className={`group relative rounded-[24px] block transition-transform duration-500 hover:shadow-xl golden-aura ${
// ... existing code ...
