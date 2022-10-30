import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="container">
      <form className="form">
        <div className="row">
          <div className="col-6">
            <input className="searchField form-control" type="text" />
          </div>
          <div className="col-2">
            <button type="submit" class="btn success-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
