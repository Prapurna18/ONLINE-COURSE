import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Review.css";

function Review() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <h1>Reviews</h1>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <br />
          <br />
          <button className="rating_circle">4.1</button>

          <div>
            <div className="stars-outer mt-4">
              <div className="stars-inner"></div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="progress mt-5" style={{ height: "10px" }}>
            <div
              className="progress-bar dark"
              style={{ width: "70%", height: "10px" }}
            ></div>
          </div>
          <div className="progress mt-3" style={{ height: "10px" }}>
            <div
              className="progress-bar dark"
              style={{ width: "10%", height: "10px" }}
            ></div>
          </div>
          <div className="progress mt-3" style={{ height: "10px" }}>
            <div
              className="progress-bar dark"
              style={{ width: "10%", height: "10px" }}
            ></div>
          </div>
          <div className="progress mt-3" style={{ height: "10px" }}>
            <div
              className="progress-bar dark"
              style={{ width: "5%", height: "10px" }}
            ></div>
          </div>
          <div className="progress mt-3" style={{ height: "10px" }}>
            <div
              className="progress-bar dark"
              style={{ width: "5%", height: "10px" }}
            ></div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="row">
            <h6 className="rating_text">5</h6>
          </div>
          <div className="row">
            <h6 className="">4</h6>
          </div>
          <div className="row">
            <h6 className="">3</h6>
          </div>
          <div className="row">
            <h6 className="">2</h6>
          </div>
          <div className="row">
            <h6 className="">1</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
