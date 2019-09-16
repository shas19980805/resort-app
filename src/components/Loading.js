import React from "react";
import loadingGear from "../images/gif/loading-gear.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Loading Data</h4>
      <img src={loadingGear} alt="loading" />
    </div>
  );
}
