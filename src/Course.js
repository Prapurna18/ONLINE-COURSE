import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rightsidefilter from "./Rightsidefilter";
import "./Course.css";

function Course() {
  const cardDetails = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFw8KYr1bDOUbjt2RB83GGlWDPPRVGFeAnCg&usqp=CAU",
      courseName: "Complete Python for beginers with examples",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f06bqyjjCSXUw1AH6tmuriK46hYS6-PrLw&usqp=CAU",
      courseName: "Data Science and deep learning with python",
      authorName: "JoshPortilla",
    },
    {
      imgUrl: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
      courseName: "Web development from Zero to Mastery",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "Devops complete tutorial advance 2021",
      authorName: "JoshPortilla",
    },
    {
      imgUrl: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
      courseName: "Web development from Zero to Mastery",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "Devops complete tutorial advance 2021",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "Devops complete tutorial advance 2021 ",
      authorName: "JoshPortilla",
    },
    {
      imgUrl: "https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
      courseName: "Web development from Zero to Mastery",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW901oE6_L8WAw9Dhjxa4cC93UBjAKiSsV9w&usqp=CAU",
      courseName: "Devops complete tutorial advance 2021",
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
                <div className="col-sm-3 card-padding">
                  <Link to="/Courseslists">
                    <div className="card profile-card-2">
                      <div className="card-img-block">
                        <img
                          className="img-fluid"
                          src={eachCard.imgUrl}
                          alt="data science"
                        />
                      </div>
                      <div className="card-body pt-1">
                        <h5 className="card-title">{eachCard.courseName}</h5>
                        <p className="card-text font-color">
                          {eachCard.authorName}
                        </p>
                        <div className="icon-block"></div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked">(5)</span>
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
        <div className="col-sm-3 footer-lp">
          <br />
          <h1 className="footer">Company</h1>
          <div className="text-footer">
            <p>About us</p>
            <p>Get the app</p>
            <p>Teach us</p>
            <p>contact us</p>
          </div>
        </div>
        <div className="col-sm-3 footer-lp">
          <br />
          <h1 className="footer">Links</h1>
          <div className="text-footer">
            <p>Home</p>
            <p>Courses</p>
            <p>Activity</p>
          </div>
        </div>
        <div className="col-sm-3 footer-lp">
          <br />
          <h1 className="footer">My accounts</h1>
          <div className="text-footer">
            <p>Profile</p>
            <p>Members</p>
            <p>Registered</p>
          </div>
        </div>
        <div className="col-sm-3 footer-lp">
          <br />
          <h1 className="footer">Helpline</h1>
        </div>
      </div>
    </>
  );
}
export default Course;
