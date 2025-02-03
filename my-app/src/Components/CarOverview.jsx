/* import React from "react";
import "./CarOverview.css";


const CarOverview = () => {
  const carDetails = [
    { label :"Registration Year", value: "Apr 2023" },
    { label: "Insurance", value: "Comprehensive" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Seats", value: "5 Seats" },
    { label: "Kms Driven", value: "5,846 Kms" },
    { label: "RTO", value: "Bangalore" },
    { label: "Ownership", value: "First Owner" },
    { label: "Engine Displacement", value: "998 cc" },
    { label: "Transmission", value: "Manual" },
    { label: "Year of Manufacture", value: "2023" }
  ];

  return (
    <div className="car-overview">
      <h1 className="title">Car Overview</h1>
      <div className="details-grid">
        {carDetails.map((detail, index) => (
          <div className="detail-item" key={index}>
            <span className="detail-label">{detail.label}</span>
            <span className="detail-value">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview; */     


/* 



import "./CarOverview.css";
import { AiOutlineCalendar, AiOutlineCar } from "react-icons/ai";
import { FaGasPump, FaCogs, FaRoad, FaUsers, FaCarSide, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const CarOverview = () => {
  const carDetails = [
    { label: "Registration Year", value: "Apr 2023", icon: <AiOutlineCalendar /> },
    { label: "Insurance", value: "Comprehensive", icon: <FaCarSide /> },
    { label: "Fuel Type", value: "Petrol", icon: <FaGasPump /> },
    { label: "Seats", value: "5 Seats", icon: <FaUsers /> },
    { label: "Kms Driven", value: "5,846 Kms", icon: <FaRoad /> },
    { label: "RTO", value: "Bangalore", icon: <FaMapMarkerAlt /> },
    { label: "Ownership", value: "First Owner", icon: <FaUser /> },
    { label: "Engine Displacement", value: "998 cc", icon: <FaCogs /> },
    { label: "Transmission", value: "Manual", icon: <AiOutlineCar /> },
    { label: "Year of Manufacture", value: "2023", icon: <AiOutlineCalendar /> }
  ];

  return (
    <div className="car-overview">
      <h1 className="title">Car Overview</h1>
      <div className="details-grid">
        {carDetails.map((detail, index) => (
          <div className="detail-item" key={index}>
            <span className="detail-icon">{detail.icon}</span>
            <span className="detail-label">{detail.label}</span>
            <span className="detail-value">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;




 */



import React from "react";
import "./CarOverview.css";
import { AiOutlineCalendar, AiOutlineCar, AiOutlineSetting } from "react-icons/ai";
import { FaGasPump, FaCogs, FaRoad, FaUsers, FaCarSide, FaMapMarkerAlt, FaUserShield, FaClock } from "react-icons/fa";

const CarOverview = () => {
  const carDetails = [
    { label: "Registration Year", value: "Apr 2023", icon: <AiOutlineCalendar /> },
    { label: "Insurance", value: "Comprehensive", icon: <FaUserShield /> },
    { label: "Fuel Type", value: "Petrol", icon: <FaGasPump /> },
    { label: "Seats", value: "5 Seats", icon: <FaUsers /> },
    { label: "Kms Driven", value: "5,846 Kms", icon: <FaRoad /> },
    { label: "RTO", value: "Bangalore", icon: <FaMapMarkerAlt /> },
    { label: "Ownership", value: "First Owner", icon: <FaCarSide /> },
    { label: "Engine Displacement", value: "998 cc", icon: <FaCogs /> },
    { label: "Transmission", value: "Manual", icon: <AiOutlineSetting /> },
    { label: "Year of Manufacture", value: "2023", icon: <FaClock /> }
  ];

  return (
    <div className="car-overview">
      <h1 className="title">Car Overview</h1>
      <div className="details-container">
        {carDetails.map((detail, index) => (
          <div className="detail-row" key={index}>
            <span className="detail-icon">{detail.icon}</span>
            <span className="detail-label">{detail.label}</span>
            <span className="detail-value">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;
