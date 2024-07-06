import { useState } from "react";
import axios from "axios";

const AddTask = ({ fetchTasks }) => {
  const [description, setDescription] = useState("");

  const addTask = async () => {
    try {
      await axios.post("http://localhost:3000/api/createTask", { description });
      setDescription("");
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Task Description"
        />
        <button
          onClick={addTask}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
