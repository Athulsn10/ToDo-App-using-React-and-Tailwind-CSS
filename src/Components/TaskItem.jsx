import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex bg-white items-center justify-between mt-4 w-96 sm:w-120 lg-w-160 px-5 text-xl py-1 h-16 rounded-xl">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <h3>{task.text}</h3>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSaveClick} className="me-2 text-green-500">
            Save
          </button>
        ) : (
          <button onClick={handleEditClick} className="me-2 text-green-500">
            Edit
          </button>
        )}
        <button onClick={() => deleteTask(task.id)}>
          <i
            className="fa-regular fa-square-minus"
            style={{ color: "#ff0000" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
