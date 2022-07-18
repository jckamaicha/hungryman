import React from "react";
import "./styles/style.css";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <span>
        <i className="ri-contacts-book-2-line"></i> Contact: +9779849092326,
        +9779813130596
      </span>

      <span>
      <i className="ri-riding-line"></i> Delivery Only Available Inside Valley
      </span>

      <span>
        <i className="ri-time-line"></i> Delivery Hours: 7PM TO 2AM (3AM On
        Weekends)
      </span>
    </div>
  );
}
