import React from "react";
import "./Notifications.css"; // Importing custom CSS file for notifications

const Notifications = ({ overdue, dueToday }) => {
  return (
    <div className="notifications">
      <h2 className="notifications-heading">Overdue Notifications</h2>
      {overdue.length > 0 ? (
        overdue.map((item) => (
          <div className="notification-item overdue" key={item.id}>
            <strong>{item.name}</strong>: {item.nextCommunication.type} was
            overdue on{" "}
            {new Date(item.nextCommunication.date).toLocaleDateString()}.
          </div>
        ))
      ) : (
        <div className="no-notifications">No overdue notifications</div>
      )}

      <h2 className="notifications-heading">Due Today</h2>
      {dueToday.length > 0 ? (
        dueToday.map((item) => (
          <div className="notification-item due-today" key={item.id}>
            <strong>{item.name}</strong>: {item.nextCommunication.type} is due
            today!
          </div>
        ))
      ) : (
        <div className="no-notifications">No notifications due today</div>
      )}
    </div>
  );
};

export default Notifications;
