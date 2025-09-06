import { useState } from "react";

export default function App() {
  const [newitem, setNewitem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newitem, completed: false },
    ]);
    setNewitem(""); // reset input
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* New Item Section */}
      <div className="w-full max-w-md mb-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-gray-300 text-3xl text-center">
            New Item
          </label>
          <input
            value={newitem}
            onChange={(e) => setNewitem(e.target.value)}
            type="text"
            placeholder="Enter new task"
            className="w-full p-2 rounded-md border border-blue-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </form>
      </div>

      {/* Todo List Section */}
      <h2 className="text-2xl font-bold text-white bg-blue-600 px-2 py-1 mb-4 rounded-md">
        Todo List
      </h2>

      <ul className="w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-800 p-2 rounded-md"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              className="bg-red-700 hover:bg-red-800 text-white text-sm px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
