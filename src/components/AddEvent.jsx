import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../context/CalenderContext";

const AddEvent = () => {
  const {
    closeAddEventModal,
    months,
    createEvent,
    toEditEventId,
    eventsArray,
    isEditEvent,
    monthArray,
    addEventModalId,
  } = useGlobalContext();
  const [events, setEvents] = useState({ subject: "", description: ""});
  const [error ,setError] = useState(false);

  const currentDateObj = monthArray.find(
    (item) => item.id === addEventModalId
  );


  useEffect(() => {
    if (isEditEvent) {
      const toEditEventDate = eventsArray.find(
        (item) => item.id === addEventModalId,
      );

      console.log(toEditEventDate);
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

    if(events.subject === "" || events.description === ""){
      setError(true);
      return;
    } 
      


    if (isEditEvent) {
      const eventData = {
        id: currentDateObj.id,
        eventId: toEditEventId,
        date: currentDateObj.date,
        month: months[currentDateObj.month].label,
        year: currentDateObj.year,
        ...events,
      };

      createEvent(eventData);
    } else {
      const eventData = {
        id: currentDateObj.id,
        eventId: new Date().getTime(),
        date: currentDateObj.date,
        month: months[currentDateObj.month].label,
        year: currentDateObj.year,
        ...events,
      };

      createEvent(eventData);
    }

    setError(false);
  };

  return (
    <div className=" border-2 border-white shadow-xl  h-auto w-[400px]  p-6 py-4 bg-black text-white rounded-md">
      <div className=" flex justify-between">
        <h2 className=" text-lg font-medium">
          {isEditEvent ? "Edit Event" : "Add Event"}
        </h2>
        <button className=" text-red-500" onClick={() => closeAddEventModal()}>
          <FaWindowClose size={26}></FaWindowClose>
        </button>
      </div>

      <p>
        Date:{" "}
        {`${currentDateObj.date} ${
          months[currentDateObj.month] ? months[currentDateObj.month].label : [currentDateObj.month]
        } ${currentDateObj.year} `}
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
        {error && <p className=" text-red-600">Pleaser enter some value !!!</p>}
        <textarea
          placeholder="Description"
          rows="4"
          className=" rounded-md border-2 border-black px-2 py-1"
          value={events.description}
          onChange={(e) =>
            setEvents({ ...events, description: e.target.value })
          }
        ></textarea>
          {error && <p className=" text-red-600">Pleaser enter some value !!!</p>}
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
