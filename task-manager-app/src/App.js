import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

        <div className="flex">
          <input
            type="text"
            className="border p-2 flex-1 rounded-l-md"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >
            Add
          </button>
        </div>

        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`p-2 flex justify-between items-center ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <span onClick={() => toggleTask(index)}>{t.text}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
