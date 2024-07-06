import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getTasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCompletion = async (id, status) => {
    try {
      await axios.put(`http://localhost:3000/api/updateTask/${id}`, {
        status: status === "completed" ? "not completed" : "completed",
      });
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-gray-100 p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <span className={task.status === "completed" ? "underline" : ""}>
                {task.description}
              </span>{" "}
              -
              <span
                className={
                  task.status === "completed"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {task.status}
              </span>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => toggleCompletion(task._id, task.status)}
                className={`p-2 rounded ${
                  task.status === "completed" ? "bg-yellow-500" : "bg-green-500"
                } text-white`}
              >
                {task.status === "completed"
                  ? "Mark as Incomplete"
                  : "Mark as Complete"}
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
