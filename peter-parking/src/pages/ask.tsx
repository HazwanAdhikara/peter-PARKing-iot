import "../app/globals.css";

export default function Ask() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 bg-opacity-10">
      <div className="w-full max-w-3xl bg-black bg-opacity-70 rounded-3xl shadow-2xl text-center flex flex-col space-y-2 py-10">
        <div className="text-4xl font-extrabold text-blue-400 mb-3 drop-shadow-lg tracking-wide leading-snug">
          How can i help you?
        </div>
        <div className="flex flex-col space-y-4 bg-white bg-opacity-20 p-8 rounded-xl shadow-lg max-w-4/5 mx-10">
          <div className="flex flex-col space-y-4 overflow-y-auto h-60">
            <div className="self-start text-white bg-blue-500 p-3 rounded-xl max-w-xs">
              response
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-xl bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
