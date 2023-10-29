import React from "react";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <>
      
      <div className="flex bg-white items-center justify-between mt-4  w-96 sm:w-120 lg:w-160 px-5 text-xl py-1 h-16 rounded-xl">
        <h3>{task.text}</h3>
        <button onClick={() => deleteTask(task.id)}>
          <i
            className="fa-regular fa-square-minus"
            style={{ color: "#ff0000" }}
          ></i>
        </button>
      </div>
    </>
  );
};

export default TaskItem;
