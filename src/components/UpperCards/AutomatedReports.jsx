import React from "react";
import google from "../../Images/google.png";

const AutomatedReports = () => {
  return (
    <>
      <div
        className="row"
        style={{
          backgroundColor: "#dbecff",
          padding: "40px",
          alignItems: "center",
        }}
      >
        <div className="col-md-7">
          <div className="title">
            <h2>Automated </h2>
            <h2>Reports</h2>
          </div>
          <p>
            Fermentum Ut Cras Gravida Et Malesuada Curabitur Netus Ac. Id Mauris
            Nibh Turpis Sed Laoreet Rhoncus Gravida.
          </p>
        </div>

        <div className="col-md-1">
          <img src={google} alt="" />
        </div>
      </div>
    </>
  );
};

export default AutomatedReports;
