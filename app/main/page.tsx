import ClosingSection from "@/components/Sections/Closing";
import PersonalMessageSection from "@/components/Sections/MessageSection";
import ChoiceSection from "@/components/Sections/OneDay";

export default function MainPage() {
  return (
    <>
      <main className="bg-gradient-to-br from-gray-900 via-fuchsia-800 to-gray-900 overflow-y-auto">
        <ChoiceSection />
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-10 text-center">
          Ucapan dari Team
        </h2>
        <PersonalMessageSection />
        <ClosingSection />
      </main>
    </>
  );
}
