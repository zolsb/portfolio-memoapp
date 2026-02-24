//タスクを追加するコンポーネント

import { useState } from "react";

type Props = {
  onAdd: (title:string) => void;
};

export function AddTask({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    //リロード防ぐ
    e.preventDefault();

    //空チェック
    const trimmed = title.trim();
    if (!trimmed) return;

    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between bg-white rounded-xl shadow-sm px-4 py-3 mb-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タスクを追加してください。"
        className="flex-1 mx-4 text-sm text-gray-800 focus:outline-none"
      />
      <button
        type="submit"
        className="text-sm text-blue-600 border border-blue-300 rounded-lg px-3 py-1 hover:bg-blue-50 transition"
      >
        追加
      </button>
    </form>
  );
}
