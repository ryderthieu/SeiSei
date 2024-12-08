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
    {
      id: 8,
      title: "Toán 10",
      start: "2024-12-16T10:00:00",
      end: "2024-12-16T11:30:00",
      type: "Học online",
    },
    {
      id: 9,
      title: "Hóa học 11",
      start: "2024-12-20T14:00:00",
      end: "2024-12-20T15:30:00",
      type: "Học thử",
    },
    {
      id: 10,
      title: "Vẽ",
      start: "2024-12-23T09:30:00",
      end: "2024-12-23T11:00:00",
      type: "",
    },
    {
      id: 11,
      title: "JLPT N2",
      start: "2024-12-27T15:00:00",
      end: "2024-12-27T16:30:00",
      type: "Học online",
    },
    {
      id: 12,
      title: "Vật lý 10",
      start: "2025-01-03T10:00:00",
      end: "2025-01-03T11:30:00",
      type: "",
    },
    {
      id: 13,
      title: "JLPT N3",
      start: "2025-01-06T13:00:00",
      end: "2025-01-06T14:30:00",
      type: "Học online",
    },
    {
      id: 14,
      title: "Toán 10",
      start: "2025-01-12T09:00:00",
      end: "2025-01-12T10:30:00",
      type: "Học online",
    },
    {
      id: 15,
      title: "Anh văn",
      start: "2025-01-15T14:00:00",
      end: "2025-01-15T15:30:00",
      type: "Học thử",
    },
    {
      id: 16,
      title: "Hóa học 11",
      start: "2025-01-22T10:00:00",
      end: "2025-01-22T11:30:00",
      type: "Học thử",
    },
    {
      id: 17,
      title: "Vẽ",
      start: "2025-01-26T15:00:00",
      end: "2025-01-26T16:30:00",
      type: "",
    },
    {
      id: 18,
      title: "JLPT N2",
      start: "2025-02-01T18:00:00",
      end: "2025-02-01T19:30:00",
      type: "Học online",
    },
    {
      id: 19,
      title: "Vật lý 10",
      start: "2025-02-06T13:30:00",
      end: "2025-02-06T15:00:00",
      type: "",
    },
    {
      id: 20,
      title: "Anh văn",
      start: "2025-02-13T09:00:00",
      end: "2025-02-13T10:30:00",
      type: "Học thử",
    },
    {
      id: 21,
      title: "Toán 10",
      start: "2025-02-19T10:00:00",
      end: "2025-02-19T11:30:00",
      type: "Học online",
    },
    {
      id: 22,
      title: "JLPT N3",
      start: "2025-02-22T18:00:00",
      end: "2025-02-22T19:30:00",
      type: "Học online",
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
