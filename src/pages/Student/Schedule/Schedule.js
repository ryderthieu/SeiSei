import React, {useRef} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Schedule.scss";
import EventContent from "../../../components/EventContent/EventContent";

const Schedule = () => {
  const calendarRef = useRef(null);

  const events = [
    {
      id: 1,
      title: "Toán 10",
      start: "2024-12-02T09:00:00",
      end: "2024-12-02T10:30:00",
      type:"Học online",
    },
    {
      id: 2,
      title: "JLPT N3",
      start: "2024-12-03T18:00:00",
      end: "2024-12-03T19:30:00",
      type:"Học online",
    },
    {
      id: 3,
      title: "Hóa học 11",
      start: "2024-12-05T13:00:00",
      end: "2024-12-05T14:30:00",
      type:"Học thử",
    },
    {
      id: 4,
      title: "Vật lý 10",
      start: "2024-12-12T17:00:00",
      end: "2024-12-12T18:30:00",
      type:""
    },
    {
      id: 5,
      title: "JLPT N2",
      start: "2024-12-09T11:00:00",
      end: "2024-12-09T12:30:00",
      type:"Học online",
    },
    {
      id: 6,
      title: "Vẽ",
      start: "2024-12-10T15:00:00",
      end: "2024-12-10T16:30:00",
      type:""
    },
    {
      id: 7,
      title: "Anh văn",
      start: "2024-12-14T13:00:00",
      end: "2024-12-14T14:30:00",
      type:"Học thử"
    },
  ];

  return (
    <div className="schedule__container">
      <div className="schedule__header">
        <div className="schedule__header-title">THÔNG TIN LỊCH HỌC</div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale="vi"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        titleFormat={{year: "numeric", month: "long", day:"2-digit"}}
        slotMinTime="09:00:00"
        slotMaxTime="21:00:00"
        allDaySlot={false}
        events={events}
        eventContent={(eventInfo) => <EventContent event={eventInfo.event} />}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: false, 
        }}
        slotDuration="01:00:00"
        height="auto"
      />
    </div>
  );
};

export default Schedule;
