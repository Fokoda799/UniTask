// src/components/Calendar/EventForm.jsx
import { useState, useEffect } from "react";

const EventForm = ({ event, saveEvent }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    start: "",
    end: "",
    description: "",
    type: "primary",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        id: event.id || null,
        title: event.title || "",
        start: event.start || "",
        end: event.end || "",
        description: event.extendedProps?.description || "",
        type: event.classNames?.[0] || "primary",
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEvent(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="start"
          className="block text-sm font-medium text-gray-700"
        >
          Start
        </label>
        <input
          type="datetime-local"
          id="start"
          value={formData.start}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="end"
          className="block text-sm font-medium text-gray-700"
        >
          End
        </label>
        <input
          type="datetime-local"
          id="end"
          value={formData.end}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={handleChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
        >
          <option value="primary">Work</option>
          <option value="info">Travel</option>
          <option value="success">Personal</option>
          <option value="danger">Important</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default EventForm;
