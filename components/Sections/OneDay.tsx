// components/ChoiceSection.tsx
"use client"; // Tambahkan ini jika belum ada karena kita akan pakai framer-motion

import React from "react";
import { motion, Variants } from "framer-motion"; // 💡 Import motion dan Variants

// Data untuk bagian "One Day" (5 Gambar)
const oneDayImages: string[] = [
  "/choice/oneday/1.jpg",
  "/choice/oneday/2.jpg",
  "/choice/oneday/3.jpg",
  "/choice/oneday/4.jpg",
];

// Data untuk bagian "Day One" (3 Gambar)
const dayOneImages: string[] = [
  "/choice/dayone/1.jpg", // Gambar pertama yang akan di tengah
  "/choice/dayone/2.jpg",
  "/choice/dayone/3.jpg",
];

// 💡 Definisikan variants untuk animasi gambar
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger delay untuk setiap gambar
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ChoiceSection: React.FC = () => {
  return (
    <section
      id="choice"
      className="py-12 px-4 sm:py-20 max-w-5xl mx-auto text-white" // Tambahkan text-white agar konsisten
    >
      {/* === Bagian ONE DAY === */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-200 mb-8">
          One Day
        </h2>

        {/* Container Gambar ONE DAY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {oneDayImages.map((src, index) => (
            // 💡 Gunakan motion.div untuk setiap gambar
            <motion.div
              key={`one-day-${index}`}
              className={`
                aspect-square overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300
                ${index === 4 ? "col-span-2 md:col-start-2 md:col-span-2" : ""}
              `}
              variants={imageVariants} // Terapkan variants
              initial="hidden" // Status awal sebelum terlihat
              whileInView="visible" // Status saat masuk viewport
              viewport={{ once: true, amount: 0.3 }} // Animasi hanya sekali saat 30% elemen terlihat
              custom={index} // Kirim index sebagai custom prop untuk stagger delay
            >
              <img
                src={src}
                alt={`One Day Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="my-10 border-gray-200" />

      {/* === Pemisah OR / Day One === */}
      <div className="flex justify-center items-center my-10">
        <div className="h-0.5 w-16 bg-gray-300 hidden sm:block"></div>
        <span className="text-3xl font-black text-gray-200 mx-4 border-white">
          OR
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mx-2">
          Day One
        </h3>
        <div className="h-0.5 w-16 bg-gray-300 hidden sm:block"></div>
      </div>

      <hr className="my-10 border-gray-200" />

      {/* === Bagian DAY ONE === */}
      <div className="flex flex-col items-center mt-12">
        {/* Container Gambar DAY ONE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-items-center">
          {dayOneImages.map((src, index) => (
            // 💡 Gunakan motion.div untuk setiap gambar
            <motion.div
              key={`day-one-${index}`}
              className={`
                aspect-square overflow-hidden rounded-lg shadow-xl border-4 border-white transition duration-300 hover:shadow-2xl hover:border-blue-500
                ${index === 0 ? "col-span-2 md:col-start-2" : "col-span-1"}
              `}
              variants={imageVariants} // Terapkan variants
              initial="hidden" // Status awal sebelum terlihat
              whileInView="visible" // Status saat masuk viewport
              viewport={{ once: true, amount: 0.3 }} // Animasi hanya sekali saat 30% elemen terlihat
              custom={index} // Kirim index sebagai custom prop untuk stagger delay
            >
              <img
                src={src}
                alt={`Day One Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoiceSection;
