import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rightsidefilter from "./Rightsidefilter";

function Course() {
  const cardDetails = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFw8KYr1bDOUbjt2RB83GGlWDPPRVGFeAnCg&usqp=CAU",
      courseName: "PHYTHON",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f06bqyjjCSXUw1AH6tmuriK46hYS6-PrLw&usqp=CAU",
      courseName: "DATA SCIENCE",
      authorName: "JoshPortilla",
    },
    {
      imgUrl: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
      courseName: "WEB DEVELOPMENT",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "DEVOPS",
      authorName: "JoshPortilla",
    },
    {
      imgUrl: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
      courseName: "WEB DEVELOPMENT",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "DEVOPS",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "DEVOPS",
      authorName: "JoshPortilla",
    },
    {
      imgUrl: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
      courseName: "WEB DEVELOPMENT",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "DEVOPS",
      authorName: "JoshPortilla",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-sm-9">
          <br />
          <h1 className="note">Courses</h1>
          <div className="row">
            {cardDetails.map((eachCard) => {
              return (
                <div className="col-sm-3">
                  <Link to="/Courseslists">
                    <div className="card profile-card-2">
                      <div className="card-img-block">
                        <img
                          className="img-fluid"
                          src={eachCard.imgUrl}
                          alt="data science"
                        />
                      </div>
                      <div className="card-body pt-5">
                        <h5 className="card-title">{eachCard.courseName}</h5>
                        <p className="card-text">{eachCard.authorName}</p>
                        <div className="icon-block"></div>
                      </div>
                    </div>
                    <p className="mt-3 w-100 float-left text-center"></p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-3">
          <br />
          <br />
          <Rightsidefilter></Rightsidefilter>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <h1 className="footer">COMPANY</h1>
          <div className="text-footer">
            <p>About us</p>
            <p>Get the app</p>
            <p>Teach us</p>
            <p>contact us</p>
          </div>
        </div>
        <div className="col-sm-3">
          <h1 className="footer">LINKS</h1>
          <div className="text-footer">
            <p>Home</p>
            <p>Courses</p>
            <p>Activity</p>
          </div>
        </div>
        <div className="col-sm-3">
          <h1 className="footer">MY ACCOUNTS</h1>
          <div className="text-footer">
            <p>Profile</p>
            <p>Members</p>
            <p>Registered</p>
          </div>
        </div>
        <div className="col-sm-3">
          <h1 className="footer">HELP LINE</h1>
        </div>
      </div>
    </>
  );
}
export default Course;
