//受け取ったTaskを表示するコンポーネント

import type { Task } from "../types/task";

type Props = {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

export function TaskItem({ task, onDelete, onComplete }: Props) {
  return (
    <li className="flex items-center justify-between bg-gray-800 rounded-xl shadow-sm px-4 py-3">
      <button
        onClick={() => onComplete(task.id)}
        className="text-sm text-green-400 border border-green-600 rounded-lg px-3 py-1 hover:bg-green-600 hover:text-white hover:border-green-600 transition"
      >
        完了
      </button>
      <p className="flex-1 mx-4 text-gray-100">{task.title}</p>
      <button
        onClick={() => onDelete(task.id)}
        className="text-sm text-red-400 border border-red-600 rounded-lg px-3 py-1 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
      >
        削除
      </button>
    </li>
  );
}
