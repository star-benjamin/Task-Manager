import { useState, useEffect } from "react";
import TaskDisplay from "../Components/TaskDisplay.jsx";
import TaskInputForm from "../Components/TaskInputForm.jsx";

function LandingPage() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, completed: false, overdue: false }]);
  };

  const updateTaskStatus = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, completed: true } : task))
    );
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col md:flex-row space-x-5 lg:space-x-50">
      <TaskInputForm addTask={addTask} />
      <TaskDisplay tasks={tasks} updateTaskStatus={updateTaskStatus} removeTask={removeTask} />
    </div>
  );
}

export default LandingPage;
