// src/components/Sections/FinalTeamClosingSection.tsx
"use client";

import { ArrowUpCircleIcon, BriefcaseIcon, StarIcon } from "lucide-react";


export default function FinalTeamClosingSection() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center
                 min-h-[70vh] px-6 sm:px-8 md:px-16 py-20 text-white 
                 overflow-hidden"
    >
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl opacity-50"></div>

      <div className="max-w-4xl text-center z-10">
        <div className="mb-8">
            <StarIcon className="w-16 h-16 mx-auto text-yellow-400" />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-10 leading-tight">
          Pesan Penutup Spesial dari Tim
        </h2>
        
        {/* Konten Ucapan dari Tim */}
        <div className="bg-[#2a2655]/70 p-8 sm:p-12 rounded-3xl shadow-2xl border border-purple-600/50">
            
            <p className="text-2xl font-semibold text-pink-300 mb-6">
                Kepada Owner Terbaik, Anna & Dika
            </p>
            
            <blockquote className="italic text-xl md:text-2xl text-gray-200 leading-relaxed border-l-4 border-teal-400 pl-4">
                Happy Wedding! Kami segenap tim ikut merasakan kebahagiaan yang luar biasa.
                <br/><br/>
                Terima kasih sudah menjadi Owner yang suportif dan inspiratif. Sekarang, tantangan baru menanti, yaitu memimpin bahtera rumah tangga! Kami yakin kalian akan menjadi tim terbaik yang saling mendukung dalam segala hal.
                <br/><br/>
                Semoga cinta kalian terus bertumbuh, dipenuhi canda tawa, dan selalu harmonis. 
                
            </blockquote>
            
            <p className="text-lg font-medium text-purple-300 mt-8">
                — Salam Kompak dari Seluruh Tim
            </p>
            
        </div>
        
        {/* Penegasan dan Tombol Aksi */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center px-8 py-4 rounded-full
                       bg-gradient-to-r from-blue-500 to-teal-500 text-white
                       font-semibold text-lg shadow-lg hover:shadow-xl
                       transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <ArrowUpCircleIcon className="w-6 h-6 mr-3" />
            Kembali Ke Awal Halaman
          </button>
          
          
        </div>

        <p className="text-sm text-gray-500 mt-20">
          Dengan Cinta dan Hormat, Tim [Nama Tim Anda].
        </p>
      </div>
    </section>
  );
}