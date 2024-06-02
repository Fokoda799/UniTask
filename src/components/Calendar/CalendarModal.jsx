import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import EventForm from "./EventForm";

const CalendarModal = ({ isOpen, onClose, event, saveEvent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventCategory, setEventCategory] = useState(event?.category || "");

  useEffect(() => {
    setIsModalOpen(isOpen);
    setEventCategory(event?.category || "");
  }, [isOpen, event]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleCategoryChange = (e) => {
    setEventCategory(e.target.value);
  };

  const handleSave = () => {
    saveEvent({ ...event, category: eventCategory });
  };

  return (
    <Fragment>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50 modal-overlay"></div>
          <div className="z-50 bg-white rounded-lg shadow-lg modal-container w-96">
            <div className="flex items-center justify-between px-4 py-3 border-b modal-header">
              <h3 className="text-lg font-semibold">
                {event?.id ? "Edit Event" : "Add Event"}
              </h3>
              <button className="close-btn" onClick={handleClose}>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-gray-500 hover:text-gray-700"
                />
              </button>
            </div>
            <div className="px-4 py-3 modal-body">
              <EventForm event={event} saveEvent={handleSave} />
              <div className="mt-4">
                <label
                  htmlFor="eventCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Category:
                </label>
                <select
                  id="eventCategory"
                  name="eventCategory"
                  className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={eventCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select Category</option>
                  <option value="work">Work</option>
                  <option value="travel">Travel</option>
                  <option value="personal">Personal</option>
                  <option value="important">Important</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CalendarModal;
