import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(id) {
    dispatch(removeFromPastes(id));
    toast.success("Paste Deleted");
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success("Copied to Clipboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          My Pastes
        </h1>

        {/* Search */}
        <input
          type="search"
          placeholder="🔍 Search your paste..."
          className="
            w-full
            p-4
            rounded-xl
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            text-white
            placeholder-gray-300
            outline-none
            focus:ring-2
            focus:ring-purple-500
            mb-8
          "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Paste List */}
        <div className="space-y-6">
          {filteredPastes.length > 0 ? (
            filteredPastes.map((paste) => (
              <div
                key={paste._id}
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-2xl
                  p-6
                  shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                <h2 className="text-3xl font-bold text-white mb-3">
                  {paste.title}
                </h2>

                <p className="text-gray-300 line-clamp-4 whitespace-pre-wrap">
                  {paste.content}
                </p>

                <p className="text-sm text-gray-400 mt-4">
                  {new Date(paste.createdAt).toLocaleString()}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  <Link to={`/?pasteId=${paste._id}`}>
                    <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white">
                      ✏️ Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-white"
                  >
                    🗑 Delete
                  </button>

                  <Link to={`/pastes/${paste._id}`}>
                    <button className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-white">
                      👁 View
                    </button>
                  </Link>

                  <button
                    onClick={() => handleCopy(paste.content)}
                    className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white"
                  >
                    📋 Copy
                  </button>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-3xl text-gray-300 mt-20">
              📭 No Pastes Found
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Paste;