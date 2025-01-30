import React from "react";
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

export default CarOverview;

