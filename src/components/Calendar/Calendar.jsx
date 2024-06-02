// src/components/Calendar/Calendar.jsx
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";
import { initialEvents } from "../../data/calendarData";
import CalendarModal from "./CalendarModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isAddEventModal, setIsAddEventModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleEventClick = (eventInfo) => {
    setCurrentEvent(eventInfo.event);
    setIsAddEventModal(true);
  };

  const handleDateSelect = (selectInfo) => {
    setCurrentEvent({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    setIsAddEventModal(true);
  };

  const saveEvent = (event) => {
    setEvents((prevEvents) => {
      if (event.id) {
        return prevEvents.map((e) => (e.id === event.id ? event : e));
      } else {
        return [...prevEvents, { ...event, id: prevEvents.length + 1 }];
      }
    });
    setIsAddEventModal(false);
    setCurrentEvent(null);
  };

  return (
    <div>
      <div className="mb-5 panel">
        <div className="flex flex-col items-center justify-center mb-4 sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <div className="text-lg font-semibold text-center ltr:sm:text-left rtl:sm:text-right">
              Calendar
            </div>
            <div className="flex flex-wrap items-center justify-center mt-2 sm:justify-start">
              <div className="flex items-center ltr:mr-4 rtl:ml-4">
                <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-primary"></div>
                <div>Work</div>
              </div>
              <div className="flex items-center ltr:mr-4 rtl:ml-4">
                <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-info"></div>
                <div>Travel</div>
              </div>
              <div className="flex items-center ltr:mr-4 rtl:ml-4">
                <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-success"></div>
                <div>Personal</div>
              </div>
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-sm ltr:mr-2 rtl:ml-2 bg-danger"></div>
                <div>Important</div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsAddEventModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="ltr:mr-2 rtl:ml-2" />
            Create Event
          </button>
        </div>
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            editable
            selectable
            events={events}
            eventClick={handleEventClick}
            select={handleDateSelect}
          />
        </div>
      </div>

      {isAddEventModal && (
        <CalendarModal
          isOpen={isAddEventModal}
          onClose={() => setIsAddEventModal(false)}
          event={currentEvent}
          saveEvent={saveEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
