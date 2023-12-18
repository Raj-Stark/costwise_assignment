import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../context/CalenderContext";

const AddEvent = () => {
  const {
    closeAddEventModal,
    currentDateOpenModalData: modalData,
    months,
    createEvent,
    toEditEventId,
    eventsArray,
    isEditEvent,
  } = useGlobalContext();
  const [events, setEvents] = useState({ subject: "", description: "" });

  useEffect(() => {
    if (isEditEvent) {
      const toEditEventDate = eventsArray.find(
        (item) => item.id === modalData.id
      );
      const { allEvents } = toEditEventDate;

      const editEvent = allEvents.find(
        (item) => item.eventId === toEditEventId
      );

      setEvents({
        subject: editEvent.subject,
        description: editEvent.description,
      });
    }
  }, [isEditEvent]);

  const handleForm = (e) => {
    e.preventDefault();

    if (isEditEvent) {
      const eventData = {
        id: modalData.id,
        eventId: toEditEventId,
        date: modalData.date,
        month: months[modalData.month],
        year: modalData.year,
        ...events,
      };

      createEvent(eventData);
    } else {
      const eventData = {
        id: modalData.id,
        eventId: new Date().getTime(),
        date: modalData.date,
        month: months[modalData.month],
        year: modalData.year,
        ...events,
      };

      createEvent(eventData);
    }
  };

  return (
    <div className=" border-2 border-white shadow-xl  h-auto w-[400px]  p-6 py-4 bg-black text-white rounded-md">
      <div className=" flex justify-between">
        <h2 className=" text-lg font-medium">{isEditEvent ? "Edit Event" :"Add Event"}</h2>
        <button className=" text-red-500" onClick={() => closeAddEventModal()}>
          <FaWindowClose size={26}></FaWindowClose>
        </button>
      </div>

      <p>
        Date:{" "}
        {`${modalData.date} ${
          months[modalData.month] ? months[modalData.month] : [modalData.month]
        } ${modalData.year} `}
      </p>

      <form
        onSubmit={handleForm}
        className=" z-50 flex flex-col gap-4 mt-10 text-black"
      >
        <input
          type="text"
          placeholder="Subject"
          className=" rounded-md border-2 border-black px-2 py-1"
          value={events.subject}
          onChange={(e) => setEvents({ ...events, subject: e.target.value })}
        />
        <textarea
          placeholder="Description"
          rows="4"
          className=" rounded-md border-2 border-black px-2 py-1"
          value={events.description}
          onChange={(e) =>
            setEvents({ ...events, description: e.target.value })
          }
        ></textarea>
        <button
          className="  bg-green-500 py-2 rounded-md border-2 border-white shadow-lg  text-white "
          type="Submit"
        >
          {isEditEvent ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
