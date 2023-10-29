import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="flex items-center justify-center mt-5">
     <div>
          {tasks.length > 0 ? (
            <div className="flex items-center justify-between w-96 sm:w-120 lg:w-160 h-16">
              <div
                style={{ height: '7vh', width: '9vw' }}
                className="bg-white flex items-center justify-center rounded-full mt-5 w-96 h-16"
              >
                <h2 className="text-xl font-bold text-black">TASKS:</h2>
              </div>
              <button className="bg-white w-14 h-14 rounded-full mt-5">
                <i className="fa-regular fa-trash-can" style={{ color: '#000000' }}></i>
              </button>
            </div>
          ) : (
            <p>No Tasks Has Been Added.</p>
          )}
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
     </div>
    </div>
  );
};

export default TaskList;
