import React from "react";
import AutomatedReports from "./UpperCards/AutomatedReports";

const UpperCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <AutomatedReports />
          <AutomatedReports />
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
};

export default UpperCards;
