import { useEffect, useState } from "react";
import { TaskList } from "./components/TaskLIst";
import type { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleComplete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAdd = (title: string) => {
    setTasks([...tasks, { id: String(Date.now()), title: title }]);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-start justify-center pt-16">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-100 mb-6">タスク一覧</h1>
        <TaskList
          tasks={tasks}
          onComplete={handleComplete}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default App;
