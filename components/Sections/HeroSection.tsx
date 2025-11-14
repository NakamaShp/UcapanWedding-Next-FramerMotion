// src/components/Sections/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Smartphone } from "lucide-react";
import { useMusic } from "@/context/musiccontext";
import { useRouter } from 'next/navigation'; // 💡 IMPORT ROUTER

const textContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const textItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
};

export default function HeroSection() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { play, isPlaying, pause } = useMusic();
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    
    // 💡 INISIALISASI ROUTER
    const router = useRouter(); 

    // Lock scroll sebelum musik aktif
    useEffect(() => {
        // Mengunci scroll body jika musik belum dimainkan (cover masih aktif)
        document.body.style.overflow = isMusicPlaying ? "auto" : "hidden";
    }, [isMusicPlaying]);

    const handleOpenInvitation = async () => {
        await play();
        setIsMusicPlaying(true);
        setIsTransitioning(true);

        if (document.documentElement.requestFullscreen) {
            try {
                await document.documentElement.requestFullscreen();
            } catch (_) {}
        }

        setTimeout(() => {
            // Logika scroll dihilangkan. 
            // Ganti dengan navigasi ke route /main
            router.push('/main'); 
            
            // Perhatian: Jika Anda menggunakan navigasi, isTransitioning(false) ini
            // mungkin tidak sempat tereksekusi sebelum pindah halaman, tapi kita biarkan.
            setTimeout(() => setIsTransitioning(false), 800);
        }, 1000);
    };

    return (
        <section
            className="relative flex flex-col-reverse md:flex-row items-center justify-center
                       min-h-[100vh] px-6 sm:px-8 md:px-16 py-20
                       text-white overflow-hidden"
        >
            {/* 🌑 FADE TO BLACK */}
            {isTransitioning && (
                <motion.div
                    className="fixed inset-0 bg-black z-[9999]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            )}

            {/* 🩷 TEKS */}
            <motion.div
                className="relative z-10 w-full max-w-xl text-center md:text-left 
                           flex flex-col items-center md:items-start gap-4 px-2 sm:px-4"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold 
                               bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
                               bg-clip-text text-transparent leading-tight"
                    variants={textItem}
                >
                    Anna & Dika
                </motion.h1>

                <motion.p
                    className="text-pink-300 text-lg sm:text-2xl font-semibold"
                    variants={textItem}
                >
                    15 November 2025
                </motion.p>

                <motion.p
                    className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed mt-2"
                    variants={textItem}
                >
                    Memulai perjalanan hidup baru bersama dengan cinta dan kebahagiaan.
                    Terima kasih telah menjadi inspirasi.
                </motion.p>

                {/* 2️⃣ TAMBAHKAN BADGE DI SINI */}
                <motion.div
                    className="hidden md:inline-flex items-center gap-2.5 
                               bg-purple-900/40 border border-purple-700/30 
                               px-4 py-2 rounded-full text-xs text-purple-200 mt-4"
                    variants={textItem}
                >
                    <Smartphone className="h-4 w-4 flex-shrink-0" />
                    <span>Gunakan handphone untuk pengalaman terbaik</span>
                </motion.div>

                <motion.div className="mt-6" variants={textItem}>
                    <Button
                        size="lg"
                        onClick={handleOpenInvitation}
                        disabled={isTransitioning}
                        className="relative group overflow-hidden rounded-full 
                                   bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                                   text-white px-8 py-3 text-base sm:text-lg font-semibold shadow-lg 
                                   transition-all duration-300 ease-in-out 
                                   hover:shadow-purple-500/40 hover:scale-[1.03]"
                    >
                        <span
                            className="absolute inset-0 bg-white opacity-0 rounded-full 
                                       transition-opacity duration-300 group-hover:opacity-10 group-hover:blur-md"
                        />
                        {/* Teks Tombol diubah agar lebih sesuai dengan navigasi jika perlu */}
                        {isPlaying ? "Pause Music" : "Buka Undangan"} 
                        <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                    </Button>
                </motion.div>
            </motion.div>

            {/* 💍 GAMBAR */}
            <motion.div
                className="relative mb-10 md:mb-0 max-w-[260px] sm:max-w-[340px] md:max-w-sm 
                           rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -10, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, rotate: 2 }}
            >
                <Image
                    src="/galeri/galeri2.jpg"
                    alt="Foto Pengantin"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                    priority
                />
            </motion.div>
        </section>
    );
}