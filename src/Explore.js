import React from "react";
import "./Explore.css";

function Explore() {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle explore-link"
            href="#"
            data-toggle="dropdown"
          >
            Explore
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Computer Science&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Java
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    C++
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Web Developement
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Blockchain
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    IOT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Data Structures
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Data Science&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Python
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    SQL
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Big Data
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Tableau
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    TensorFlow
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    MATLAB
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Statistics{/* &raquo; */}
                  </a>
                  {/* <ul className="submenu dropdown-menu"> */}
                  {/* <li>
                      <a className="dropdown-item" href="">
                        Multi level 1
                      </a>
                    </li> */}
                  {/* <li>
                      <a className="dropdown-item" href="">
                        Multi level 2
                      </a>
                    </li> */}
                  {/* </ul> */}
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Machine Learning
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                PhysicalScience and Engineering&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Electrical Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Mechanical Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Physics and Astronomy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Research Methods
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Chemistry
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Environmental science
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Business&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Leadership and Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Finance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Business Essentials
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Entrepreneurship
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Personal Development
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Health&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Animal Health
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Basic Science
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Patient Care
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Nutrition
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Public Health
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Research
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    psycology
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Healthcare Management
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Information and Technology&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    CyberSecurity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    AWS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Google Cloud
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    SAP
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Google
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Technology
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Arts and Humanities&raquo;
              </a>
              <ul className="submenu dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    History
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Music and Art
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Painting
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Explore;
