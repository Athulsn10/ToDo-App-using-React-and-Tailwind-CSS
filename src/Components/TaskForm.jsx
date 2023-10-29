import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
          addTask(text);
          setText('');
          console.log();
        }else{
            alert("Please enter a task");
        }
      };
  return (
        <div className=" flex flex-col items-center">
          <div className="bg-white flex items-center justify-center h-20 w-60 rounded-full mt-20">
            <h2 className="text-2xl font-bold text-red-500">TODO LIST</h2>
          </div>
          <div className="flex items-center mt-10">
            <div className="relative">
              <input
                className="w-96 sm:w-120 lg:w-160 px-5 text-xl py-1 h-16 rounded-full"
                type="text"
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleSubmit} className="bg-red-500 text-white font-bold py-2 px-4 w-14 h-14 rounded-full absolute right-0 top-0 mt-1 mr-1">
                <i
                  className="fa-solid fa-plus"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
  );
}

export default TaskForm;
