import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, text, completed: false },
    ]);
  };
  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-purple-500">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;
