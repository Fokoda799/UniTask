import React from "react";
import { FaTimes } from "react-icons/fa";

const AddModal = ({ isOpen, onClose, selectedColumn, handleAddTask }) => {
  const [taskData, setTaskData] = React.useState({
    id: (Math.random() * 1000).toFixed(0), // Simple ID for testing
    title: "",
    description: "",
    priority: "low",
    deadline: 30,
    tags: [{ title: "Test", color: "blue" }],
  });

  const handleSubmit = () => {
    handleAddTask(taskData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
        >
          <FaTimes />
        </button>
        <h2 className="mb-4 text-xl font-bold">
          {/* add eclipse shape with background of that selectedColumn.color */}
          <div
            className={`inline-block w-4 h-4 mr-2 rounded-full bg-${
              selectedColumn?.color || "blue-500"
            }`}
          ></div>
          Add Task to {selectedColumn.name}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              required
              value={taskData.title}
              onChange={(e) =>
                setTaskData({ ...taskData, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={taskData.description}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Description"
            ></textarea>
          </div>
          {/* <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Priority
            </label>
            <select
              value={taskData.priority}
              onChange={(e) =>
                setTaskData({ ...taskData, priority: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div> */}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white bg-gray-400 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
