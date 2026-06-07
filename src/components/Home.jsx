import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  addToPastes,
  updateToPastes,
} from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center px-6 py-10">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-10">
          {pasteId ? "Update Your Paste" : "Create a New Paste"}
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mb-6">

          <input
            type="text"
            placeholder="📝 Enter your title..."
            className="
              flex-1
              px-5
              py-4
              rounded-xl
              bg-white/20
              text-white
              placeholder-gray-300
              border
              border-white/20
              outline-none
              transition-all
              duration-300
              focus:border-purple-400
              focus:ring-2
              focus:ring-purple-500
            "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={createPaste}
            className="
              px-8
              py-4
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-purple-600
              via-pink-600
              to-indigo-600
              hover:scale-105
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            {pasteId ? "🚀 Update Paste" : "✨ Create Paste"}
          </button>

        </div>

        <textarea
          placeholder="Start writing your amazing content here..."
          className="
            w-full
            h-[500px]
            rounded-2xl
            p-6
            bg-white/15
            backdrop-blur-md
            text-white
            placeholder-gray-300
            border
            border-white/20
            outline-none
            resize-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500
          "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

      </div>
    </div>
  );
};

export default Home;