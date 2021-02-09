import React, { useState } from "react";
import { Link } from "react-router-dom";

function Curriculum() {
  return (
    <div>
      <div>
        <br />
        <br />

        <div className="primary">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                {/* <h2>Desktop</h2> */}
                <div className="filter-menu">
                  <form>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        {/* <a
                        className="panel-title accordion-toggle visible-sm-block"
                        role="button"
                        data-toggle="collapse"
                        href="#collapseFilters"
                        aria-expanded="false"
                        aria-controls="collapseFilters"
                      >
                        Filter
                      </a> */}
                        <div className="panel-title hidden-sm"></div>
                      </div>

                      <div className="panel-body">
                        <div
                          className="panel-group"
                          id="filter-menu"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingOne"
                            >
                              <a
                                className="panel-title accordion-toggle"
                                role="button"
                                data-toggle="collapse"
                                href="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Section 1: Course outline
                              </a>
                            </div>
                            <div
                              id="collapseOne"
                              className="panel-collapse collapse in"
                              role="tabpanel"
                              aria-labelledby="headingOne"
                            >
                              <div className="panel-body">
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="recent_graduate"
                                    />
                                    Introduction
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="imposter_syndrome"
                                    />
                                    How the internet works
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="wise_old_head"
                                    />
                                    History of web
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="wise_old_head"
                                    />
                                    HTML5
                                  </label>
                                </div>
                                {/* <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="wise_old_head"
                                    />
                                    Photography
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="wise_old_head"
                                    />
                                    Drawing
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="career_state[]"
                                      value="wise_old_head"
                                    />
                                    Arts and Sciences
                                  </label>
                                </div> */}
                              </div>
                            </div>
                          </div>

                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingTwo"
                            >
                              <a
                                className="panel-title accordion-toggle collapsed"
                                role="button"
                                data-toggle="collapse"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                section2: CSS
                              </a>
                            </div>
                            <div
                              id="collapseTwo"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingTwo"
                            >
                              <div className="panel-body">
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="politics"
                                    />
                                    CSS Introduction
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="religion"
                                    />
                                    CSS Selectors
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="music"
                                    />
                                    Box Model & CSS Grid
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="music"
                                    />
                                    Images in CSS
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="music"
                                    />
                                    FlexBox
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="music"
                                    />
                                    Responsive UI & Critical Render Path
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="topic[]"
                                      value="music"
                                    />
                                    Robot Animation
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingThree"
                            >
                              <a
                                className="panel-title accordion-toggle collapsed"
                                role="button"
                                data-toggle="collapse"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                section3: Bootstrap 4
                              </a>
                            </div>
                            <div
                              id="collapseThree"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingThree"
                            >
                              <div className="panel-body">
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="format[]"
                                      value="magazine"
                                    />
                                    Bootstrap 4 Introduction & Bootstrap Grid
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="format[]"
                                      value="website"
                                    />
                                    Using Templates
                                  </label>
                                </div>
                                {/* <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="format[]"
                                    value="vine"
                                  />
                                  Vine
                                </label>
                              </div> */}
                                {/* <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="format[]"
                                    value="tweet"
                                  />
                                  Tweet
                                </label>
                              </div> */}
                              </div>
                            </div>
                          </div>

                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingFour"
                            >
                              <a
                                className="panel-title accordion-toggle collapsed"
                                role="button"
                                data-toggle="collapse"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                Section 4:Javascript
                              </a>
                            </div>
                            <div
                              id="collapseFour"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingFour"
                            >
                              <div className="panel-body">
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="status[]"
                                      value="single"
                                    />
                                    Introduction of Javascript
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="status[]"
                                      value="married"
                                    />
                                    variables,loops and functions, es6 features
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="status[]"
                                      value="its_complicated"
                                    />
                                    Javascript full tutorial
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingFour"
                            >
                              <a
                                className="panel-title accordion-toggle collapsed"
                                role="button"
                                data-toggle="collapse"
                                href="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                Section 5: React
                              </a>
                            </div>
                            <div
                              id="collapseFive"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingFour"
                            >
                              <div className="panel-body">
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="status[]"
                                      value="single"
                                    />
                                    React full tutorial
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="status[]"
                                      value="married"
                                    />
                                    exercise:react
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="status[]"
                                      value="its_complicated"
                                    />
                                    state and props
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <footer className="footer-right"> */}
        {/* <div className="container-fluid"> */}
        {/* <p className="small">
            Created with{" "}
            <span
              className="glyphicon glyphicon-heart"
              aria-hidden="true"
            ></span>{" "}
            by Savanah
          </p> */}
        {/* </div> */}
        {/* </footer> */}
      </div>
    </div>
  );
}
export default Curriculum;
