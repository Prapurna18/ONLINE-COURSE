import React, { useState } from "react";
import webimge from "./img/from zero to mastery.jpeg";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";
import More from "./More";
import Comment from "./Comment";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./Courselists.css";

function Courseslists() {
  let match = useRouteMatch();

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
  ];
  return (
    <Router>
      {/* <!-- Tab panes --> */}
      {/* <div className="row courselist-tabs">
        <div className="col-4">
          <p className="tabs-color1">Teacher</p>
          <p>Jose portilla</p>
        </div>
        <div className="col-4">
          <p className="tabs-color1">Category</p>
          <p>TECHNOLOGY</p>
        </div>
        <div className="col-4">
          <p className="tabs-color1">Review</p>
          <p>*****</p>
        </div>
      </div> */}
      <br />
      <h1 className="font-course">WEB DEVELOPMENT FROM ZERO TO MASTERY 2021</h1>

      <div className="row">
        <div className="col-sm-8">
          <img className="img-course" src={webimge} alt="online course" />
        </div>
        <div className="col-sm-4">
          <h1>COURSE FEATURES</h1>
          <p>Lectures 24</p>
          <hr />
          <p>Quizes 0</p>
          <hr />
          <p>duration 30hours</p>
          <hr />
          <p>Skill level Beginner</p>
          <hr />
          <p>Language English</p>
          <hr />
          <p>Students 300</p>
          <hr />
          <p>Assignmants Yes</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#tabs-1"
              role="tab"
            >
              <Link to={`${match.url}/`}>Overview</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
              <Link to={`${match.url}/Curriculum`}>Curriculum</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
              <Link to={`${match.url}/Instructor`}>Instructor</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
              <Link to={`${match.url}/Reviews`}>Reviews</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">
              <Link to={`${match.url}/More`}>More</Link>
            </a>
          </li>
        </ul>
      </div>
      {/* {/* <br /> */}
      <br />

      <div className="course-list-route">
        <div className="row">
          <div className="col-sm-8">
            <Switch>
              <Route exact={true} path={`${match.path}/`}>
                <Overview></Overview>
              </Route>
              <Route exact={true} path={`${match.path}/Curriculum`}>
                <Curriculum />
              </Route>
              <Route exact={true} path={`${match.path}/Instructor`}>
                <Instructor />
              </Route>
              <Route exact={true} path={`${match.path}/Reviews`}>
                <Reviews></Reviews>
                <Comment></Comment>
              </Route>
              <Route exact={true} path={`${match.path}/More`}>
                <More />
              </Route>
            </Switch>
          </div>
          <div className="col-sm-4">
            <div className="col">
              <h1 className="note">YOU MAY LIKE</h1>

              {cardDetails.map((eachCard) => {
                return (
                  <div className="col-sm-12">
                    <div className="card profile-card-2">
                      <div className="card-img-block">
                        <img
                          className="img-fluid"
                          src={eachCard.imgUrl}
                          alt="data science"
                        />
                      </div>
                      <div className="card-body pt-5">
                        {/* <img
                             src="https://randomuser.me/api/portraits/men/64.jpg"
                             alt="profile-image"
                             className="profile"
                           /> */}
                        <h5 className="card-title">{eachCard.courseName}</h5>
                        <p className="card-text">{eachCard.authorName}</p>
                        <div className="icon-block">
                          {/* <a href="#">
                               <i className="fa fa-facebook"></i>
                             </a>
                             <a href="#">
                               {" "}
                               <i className="fa fa-twitter"></i>
                             </a>
                             <a href="#">
                               {" "}
                               <i className="fa fa-google-plus"></i>
                             </a> */}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 w-100 float-left text-center"></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <i className="bi bi-share"></i>
        <i className="bi bi-download"></i>
        <i className="bi bi-cart"></i>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div> */}
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
    </Router>
  );
}
export default Courseslists;
