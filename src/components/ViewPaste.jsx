import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <h1 className="text-4xl font-bold text-white">
          ❌ Paste Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          View Paste
        </h1>

        {/* Title */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-semibold text-lg">
            Title
          </label>

          <input
            type="text"
            value={paste.title}
            readOnly
            className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              outline-none
            "
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-300 mb-2 font-semibold text-lg">
            Content
          </label>

          <textarea
            value={paste.content}
            readOnly
            className="
              w-full
              h-[450px]
              p-5
              rounded-2xl
              bg-white/10
              border
              border-white/20
              text-white
              resize-none
              outline-none
            "
          />
        </div>

        {/* Footer */}
        <div className="mt-6 text-right text-gray-400">
          Created on{" "}
          {new Date(paste.createdAt).toLocaleString()}
        </div>

      </div>
    </div>
  );
};

export default ViewPaste;