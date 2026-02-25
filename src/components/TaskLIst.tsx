//もらったTask[]を表示するコンポーネント

import type { Task } from "../types/task";
import { AddTask } from "./AddTask";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onAdd:(title:string)=>void;
};

export function TaskList({ tasks, onDelete, onComplete ,onAdd}: Props) {
  return (
    <ul className="flex flex-col gap-3">
      {tasks.length === 0 && (
        <p className="text-gray-400 text-center my-8">タスクがありません。</p>
      )}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
      <AddTask onAdd={onAdd}/>
    </ul>
  );
}
