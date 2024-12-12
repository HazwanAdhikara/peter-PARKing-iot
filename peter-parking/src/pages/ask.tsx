import { useState } from "react";
import "../app/globals.css";

export default function Ask() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("How can I help you?"); // Placeholder response

  const handleSend = async () => {
    if (!query.trim()) return;

    setResponse("loading"); // Start the loading state

    try {
      const res = await fetch("http://127.0.0.1:5000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");

      const data = await res.json();

      setTimeout(() => {
        setResponse(data.response); // Set the actual response after the delay
      }, 2000);
    } catch (error) {
      console.error(error);
      setResponse("Failed to fetch response. Please try again."); // Handle error
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 bg-opacity-10">
      <div className="w-full max-w-3xl bg-black bg-opacity-70 rounded-3xl shadow-2xl text-center flex flex-col space-y-2 py-10">
        <div className="text-4xl font-sans font-extrabold text-blue-400 mb-3 drop-shadow-lg tracking-wide leading-snug">
          Ask to{" "}
          <span className="text-red-400 bg-blue-300 bg-opacity-15 rounded-xl p-3">
            PARKsistant
          </span>
        </div>
        <div className="flex flex-col space-y-4 bg-white bg-opacity-20 p-8 rounded-xl shadow-lg max-w-4/5 mx-10">
          <div className="flex flex-col space-y-4 overflow-y-auto h-60">
            <div className="self-start text-slate-300 bg-blue-500 bg-opacity-10 p-3 rounded-xl max-w-full font-mono font-semibold">
              <div className="flex items-center space-x-2">
                {response === "loading" && (
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span>Loading...</span>
                  </div>
                )}
                {response !== "loading" && <span>{response}</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-xl bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
