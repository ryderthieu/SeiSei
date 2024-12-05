// EventContent.js
import React from "react";
import { Link, Router, Route, Routes  } from "react-router-dom";

const EventContent = ({ event }) => {
  const startTime = event.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  const endTime = event.end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

  let backgroundColor, color, borderColor;
  switch (event.title) {
    case "Toán 10":
        backgroundColor = "#00C85313";
        borderColor = "#29CC39";
        color = "#333333";
        break;
    case "JLPT N3":
        backgroundColor = "#FF6D0013";
        borderColor = "#FF6D00";
        color = "#333333";
        break;
    case "Hóa học 11":
        backgroundColor = "#8834FF13";
        borderColor = "#8834FF";
        color = "#333333";
        break;
    case "Vật lý 10":
        backgroundColor = "#2962FF13";
        borderColor = "#31BFFF";
        color = "#333333";
        break;
    case "JLPT N2":
        backgroundColor = "#D5000013";
        borderColor = "#D50000";
        color = "#333333";
        break;
    case "Vẽ":
        backgroundColor = "#00BFA513";
        borderColor = "#00BFA5";
        color = "#333333";
        break;
    case "Anh văn":
        backgroundColor = "#FFCB3313";
        borderColor = "#FFCB33";
        color = "#333333";
        break;
    default:
        backgroundColor = "#333333333";
        borderColor = "000";
        color = "#333333";
        break;
  }

  return (
    <div
      style={{
        backgroundColor:  backgroundColor,
        border: `2.5px solid ${borderColor}`,
        borderRadius: "5px",
        color: "#333",
        fontWeight: "bold",
        fontSize: "13px",
        whiteSpace: "pre-wrap",
        height: "90px",
        padding: "5px 10px",
        lineHeight: "1.8em"
      }}
    >

      {/* Hiển thị ô vuông chứa thời gian học */}
      <div
        style={{
            backgroundColor: borderColor,
            borderRadius: "5px",
            fontSize: "12px",
            color: "#fff",
            textAlign: "center",
            width: "90px"
        }}
      >
        {startTime} - {endTime}
      </div>

      {/* Hiển thị tiêu đề sự kiện */}
      <div style={{marginTop: "0.2em", fontSize: "1.3em"}}>{event.title}</div>

      {/* Thêm đường link dẫn đến trang khác nếu có */}
      {event.extendedProps.type === "Học online" && (
         <Link
         to={"./OnlineClass"} // Sử dụng Link để chuyển hướng
         style={{
           marginTop: "5px",
           color: "red",
           fontSize: "1.1em",
           textDecoration: "underline",
         }}
        >
          Học online
        </Link>
      )}
      {/* Thêm đường link dẫn đến trang khác nếu có */}
      {event.extendedProps.type === "Học thử" && (
         <Link
         to={"try-learning"} // Sử dụng Link để chuyển hướng
         style={{
           marginTop: "5px",
           color: "red",
           fontSize: "1.1em",
           textDecoration: "underline",
         }}
        >
          Học online
        </Link>
      )}
    </div>
  );
};

export default EventContent;
