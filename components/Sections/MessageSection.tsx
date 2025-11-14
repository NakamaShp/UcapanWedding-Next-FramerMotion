"use client";
import { useEffect, useRef, useContext } from "react";
import { MusicContext } from "../../context/musiccontext";

const people = [
  {
    name: "Resna",
    message:
      "happy wedding \nmba anna & mas dika. \nbahkan ketika lautan kehidupan menjadi kasar, semoga cinta abadi kalian satu sama lain membantu kalian berlayar melewatinya✨.",
    image: "/friends/orang1.jpg",
  },
  {
    name: "Karin",
    message:
      "Congratulations on your wedding! \nWishing you and your partner a lifetime filled with love, happiness, and success. May this new chapter bring you endless joy and wonderful memories together. Makin jaya pasutri kalcer!!!!",
    image: "/friends/orang2.jpg",
  },
  {
    name: "Mitha",
    message:
      "Happy wedding mba anna, mas dika. \nsemoga menjadi keluarga yg sakinah, mawadah, Warrohmah. Semoga kalian tdk bisa di pisahkan oleh rintangan apapun yg mendatang, di satukan oleh cinta yg mendalam",
    image: "/friends/orang3.jpg",
  },
  {
    name: "Zahra",
    message:
      "selamattt berbahagiaaa bapak ibuu. \nhari ini resmi upgrade jadi pasangan suami-istri. semoga langgeng dan selalu bahagia🫰🏻",
    image: "/friends/orang4.jpg",
  },
  {
    name: "Yunita",
    message:
      "selamat berbahagia, \nmba anna & mas dika 💖 \nsemoga pernikahan ini menjadi perjalanan yang penuh cinta, tawa, dan kesuksesan baik di rumah maupun di kantor. \ncheers to a lifetime partnership that’s even stronger than any project deadline ",
    image: "/friends/orang5.jpg",
  },
  {
    name: "Latifah",
    message:
      "Happy wedding, mba anna & mas dika. \nsemoga pernikahannya selalu diberkahi dengan cinta, kebahagiaan, dan keharmonisan. Wishing both a lifetime of joy and endless love. Best wishes for new chapter together.",
    image: "/friends/orang6.jpg",
  },
  {
    name: "Nazwa",
    message:
      "happy wedding mba anna & mas dika💐💐 \nsemoga kalian seperti sendok dan garpu, saling melengkapi satu sama lain",
    image: "/friends/orang7.jpg",
  },
  {
    name: "Sulis",
    message:
      "Selamat menempuh hidup baru mba anna dan mas dika💞 \nSemoga setiap hari dalam pernikahan ini dipenuhi dengan cinta, kedamaian, dan kebersamaan yang tulus dan semoga nnti diberikan keturunan yg nya mirip cindo",
    image: "/friends/orang8.jpg",
  },
  {
    name: "Zaki ",
    message:
      "Di langit luas bernama takdir, dua bintang kini bersinar berdampingan \nMba Tiana & Mas Randika. \nKalian bukan lagi dua cahaya yang terpisah,melainkan satu gugusan yang menuntun langkah banyak doa.\nSemoga sinar kalian tak pernah padam,bahkan saat malam terasa panjang,karena cinta yang sejati tak butuh siang untuk tetap bercahaya.",
    image: "/friends/orang9.jpg",
  },
  {
    name: "Syifa",
    message:
      "Selamat menikah! \nSemoga pernikahan ini menjadi awal dari petualangan indah kalian.",
    image: "/friends/orang10.jpg",
  },
];

export default function PersonalMessageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { play } = useContext(MusicContext)!;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    play?.(); // auto play musik saat section aktif

    let animationFrame: number;
    let isAutoScrolling = true;
    let isProgrammaticScroll = false; // 1. Flag untuk melacak auto-scroll
    let lastScrollTop = el.scrollTop; // 2. Lacak posisi untuk deteksi arah

    const scrollStep = () => {
      if (!el || !isAutoScrolling) return;

      const maxScroll = el.scrollHeight - el.clientHeight;
      const currentScroll = el.scrollTop;

      // Cek apakah sudah di bawah (dengan sedikit buffer)
      if (currentScroll >= maxScroll - 1) {
        isAutoScrolling = false; // ✅ stop auto-scroll saat sudah di bawah
        return;
      }

      // 3. Gunakan scrollTop langsung untuk animasi yang mulus dengan rAF
      const newPosition = currentScroll + 0.5; // kecepatan scroll

      isProgrammaticScroll = true; // Set flag SEBELUM kita scroll
      el.scrollTop = newPosition;
      // Event 'scroll' akan terpicu secara sinkron di sini

      animationFrame = requestAnimationFrame(scrollStep);
    };

    // Mulai auto-scroll
    animationFrame = requestAnimationFrame(scrollStep);

    // Ganti nama handler agar lebih jelas
    const handleScroll = () => {
      if (!el) return;

      // 4. Cek apakah scroll ini dipicu oleh 'scrollStep' (kode kita)
      if (isProgrammaticScroll) {
        // Jika ya, reset flag-nya dan abaikan event ini
        isProgrammaticScroll = false;
        return;
      }

      // --- Jika sampai sini, ini adalah USER SCROLL ---

      const currentScrollTop = el.scrollTop;
      const isScrollingUp = currentScrollTop < lastScrollTop; // Cek arah

      lastScrollTop = currentScrollTop; // Update posisi untuk event berikutnya

      // 5. Implementasi logika yang diminta user:
      if (isScrollingUp) {
        // Jika user scroll ke atas, JANGAN hentikan auto-scroll
        return;
      }

      // 6. Jika user scroll ke Bawah (atau drag scrollbar), hentikan.
      isAutoScrolling = false;
      cancelAnimationFrame(animationFrame);
    };

    // Ganti 'handleUserScroll' dengan 'handleScroll'
    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [play]);

  return (
    <section
      ref={sectionRef}
      id="ucapan"
      className="relative mx-4 md:mx-auto md:max-w-6xl px-6 md:px-8 py-16 my-20 mt-8 md:mt-12 max-w-8xl
           text-white rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden scroll-smooth h-[80vh] "
    >
      <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {people.map((person, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center p-6 rounded-2xl 
              bg-[#2a2655]/60 border border-purple-600/30 shadow-lg
              transition-all duration-300 hover:scale-[1.03]
              ${
                idx === 8 ? "lg:col-start-2" : idx === 9 ? "lg:col-start-3" : ""
              }`}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500/40 mb-4">
              <img
                src={person.image}
                alt={person.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-pink-300 mb-2">
              {person.name}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">
              {person.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
