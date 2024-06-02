import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const EditTaskModal = ({ isOpen, onClose, selectedTask, handleEditTask }) => {
  const [editedTaskData, setEditedTaskData] = useState({ ...selectedTask });

  useEffect(() => {
    setEditedTaskData({ ...selectedTask });
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleEditTask(editedTaskData);
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
          {/* Add eclipse shape with background of selectedTask.color */}
          <div
            className={`inline-block w-4 h-4 mr-2 rounded-full bg-${
              selectedTask?.color || "blue-500"
            }`}
          ></div>
          Edit Task: {selectedTask.title}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              required
              name="title"
              value={editedTaskData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={editedTaskData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md"
            >
              Save Changes
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

export default EditTaskModal;
