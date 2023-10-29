import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskItem from "./Components/TaskItem";
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

  const editTask = (taskId, newText) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: newText };
        }
        return task;
      });
    });
  };

  return (
    <>
      <div className="h-auto bg-gradient-to-r from-cyan-500 to-purple-500">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <div className="flex justify-center">
        <div className="mb-5">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
