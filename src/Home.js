import React from "react";
import webisteImge from "./img/students.jpg";
import onlineimge from "./img/websites.jpg";
import googleimge from "./img/us.jpg";
import dataimge from "./img/data science.png";
import webimge from "./img/web development.png";

import "./Home.css";

function Home() {
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
  ];
  const studentViewing = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYG3ZHGjfTIDjA5nhzbtqoN2rDFvvZx-Fk3w&usqp=CAU",
      courseName: "From Zero to Mastery",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3leg4pskhq33_3aMNaTwT3onvKTzj8gfkQ&usqp=CAU",
      courseName: "The complete financial Analyst",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOy05DK0ajXg-UPX2t4-9scTSCwbl5m8VkTw&usqp=CAU",
      courseName: "The complete guide 2021",
      authorName: "JoshPortilla",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6EBHjRVGSB1wfsE35j4DcgUlAQoxHjv65g&usqp=CAU",
      courseName: "The complete trading course",
      authorName: "JoshPortilla",
    },
  ];
  const topCategories = [
    {
      imgUrl:
        "https://code9tech.com/blog/images/web-design-development-blog-2.jpg",
      courseName: "WEB DEVELOPMENT",
    },
    {
      imgUrl:
        "https://i0.wp.com/thebdschool.com/wp-content/uploads/2020/04/TBDS-Blog-header-picture-11.png?fit=560%2C315&ssl=1",
      courseName: "BUSINESS DEVELOPMENT",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpynyY9uxJM5XjSDrS_b3txFyfxWObUJvCw&usqp=CAU",
      courseName: "IT & SOFTWARE",
    },
    {
      imgUrl:
        "https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?quality=85&w=1024&h=512&crop=1",
      courseName: "MUSIC",
    },
    {
      imgUrl:
        "https://www.1point21gws.com/insights/wp-content/uploads/2019/06/82257074-cacaroot-marketing-boards-1024x575@2x.jpg",
      courseName: "MARKETING",
    },
    {
      imgUrl:
        "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg",
      courseName: "PHOTOGRAPHY",
    },
  ];
  return (
    <div className="Home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="font-course">
              Learn the latest courses and achieve your goals. Build your Career
            </h1>
            <br />
            <br />
            <br />
            <br />
            <button
              type="what do you want to learn?"
              className="btn btn-primary top-button"
            >
              what do you want to learn?
            </button>
          </div>
          <div className="col-sm-6">
            <img className="img-course" src={webisteImge} alt="online course" />
          </div>
        </div>
        <br />
        <br />
        <br />

        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-border" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Programs <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Enterprises
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />
        {/* <br />
        <br /> */}

        <div className="row">
          <h1 className="note">FEATURED COURSES BY CATEGORY</h1>
          {cardDetails.map((eachCard) => {
            return (
              <div className="col-sm-3">
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
                               <i class="fa fa-google-plus"></i>
                             </a> */}
                    </div>
                  </div>
                </div>
                <p className="mt-3 w-100 float-left text-center"></p>
              </div>
            );
          })}

          <h1 className="note">STUDENTS ARE VIEWING</h1>
          {studentViewing.map((eachCard) => {
            return (
              <div className="col-sm-3">
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
                               <i class="fa fa-google-plus"></i>
                             </a> */}
                    </div>
                  </div>
                </div>
                <p className="mt-3 w-100 float-left text-center"></p>
              </div>
            );
          })}

          <br />
          <br />
          <hr></hr>
          <h1 className="note">TOP CATEGORIES</h1>

          {topCategories.map((eachCard) => {
            return (
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src={eachCard.imgUrl} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{eachCard.courseName}</h4>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    {/* <p className="card-text">
                  It is the seventh most populous city in Italy, at the heart of
                  a metropolitan area of about one million people.{" "}
                </p> */}
                    {/* <a href="#" className="card-link">
                  Read More
                </a>
                <a href="#" className="card-link">
                  Book a Trip
                </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <hr></hr>
        <div className="row">
          <div className="col-sm-12">
            <div className="class-teaching">
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="middle">3000 LEARNERS</h1>
                </div>
                <div className="col-sm-4">
                  <h1 className="middle">4230 GRADUATES</h1>
                </div>
                <div className="col-sm-4">
                  <h1 className="middle">67 COUNTRIES PUBLISHED</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr></hr>
        <div className="row">
          <div className="container-fluid">
            <div className="col-sm-12">
              <div className="us-buildings">
                <div class="centered">
                  <h1 className="above-footer">BECOME AN INSTRUCTOR</h1>
                  <h1 className="above-footer"></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <br />
        <br />
        <br /> */}
        <br />

        <div class="border-separator" id="navbarText"></div>
        <br />
        <br />

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
      </div>
    </div>
  );
}
export default Home;
