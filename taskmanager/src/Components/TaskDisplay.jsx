import { useEffect,useState } from "react";

function TaskDisplay({ tasks, updateTaskStatus, removeTask }){
  const [filter, setFilter] = useState("active");

  const filteredTasks = tasks.filter((task) =>

    filter === "active" ? !task.completed && !task.overdue :
    filter === "completed" ? task.completed : task.overdue

  );

  return (
    <div className="mt-5 p-4 border-2 rounded-lg  w-full max-w-md">
      <div className="flex justify-between">
        <button onClick={() => setFilter("active")} className={`px-2 py-1 bg-gray-600 text-white rounded ${filter==="active"? "underline":"" }`}>Active</button>
        <button onClick={() => setFilter("completed")} className={`px-2 py-1 bg-green-600 text-white rounded ${filter==="completed"? "underline": ""}`}>Completed</button>
        <button onClick={() => setFilter("overdue")} className={`px-2 py-1 bg-red-800 text-white rounded ${filter==="overdue"? "underline":""}`}>Overdue</button>
      </div>
      <ul className="mt-3">
      {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">You currently have no tasks.</p>
        ) : (
          filteredTasks.map((task, index) => (
            <li key={index} className="p-2 border rounded flex justify-between mt-2">
              <div>
                <span className="font-bold">{task.taskName}</span>
                <p className="text-sm text-gray-600">Start Time: {task.startTime}</p>
                <p className="text-sm text-gray-600">Duration: {task.duration} minutes</p>
              </div>
              <div>
                {!task.completed && (
                  <button onClick={() => updateTaskStatus(index)} className="px-2 py-1 bg-blue-500 text-white rounded">Complete</button>
                )}
                <button onClick={() => removeTask(index)} className="px-2 py-1 bg-red-500 text-white rounded ml-2">Remove</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default TaskDisplay
