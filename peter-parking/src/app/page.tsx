import Link from "next/link";
import "../app/globals.css";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-opacity-10">
      <div className="mx-6 font-sans p-12 bg-black bg-opacity-70 rounded-xl shadow-2xl text-center">
        <div className="text-6xl font-extrabold text-blue-500 mb-6 drop-shadow-lg tracking-wide leading-snug bg-blue-300 rounded-xl p-1 bg-opacity-15">
          Peter <span className="text-red-500">PARK</span>
          ing
        </div>
        <div className="text-red-400">
          <p className="font-light italic mt-3 text-2xl mb-8 drop-shadow-md tracking-wide">
            "Your Ultimate Smart Parking Solution based on IoT"
          </p>
          <Link href="/ask">
            <button className="bg-blue-600 text-white rounded-lg shadow-lg py-3 px-6 font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
              Need Help?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
