import React from "react";

const DashboardError = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>R & M Show</h1>
        </div>
      </div>
      <div className="row char-cards">
        <div className="col-12">
          <div className="row">
            <div className="err-dashboard">
              <h2>No characters found to display!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardError;
