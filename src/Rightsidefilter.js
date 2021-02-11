import React, { useState } from "react";
import "./Rightsidefilter.css";

function Rightsidefilter() {
  return (
    <div>
      <br />

      <header className="header">
        <div className="container-fluid">
          {/* <h1 className="page-header">/h1> */}
        </div>
      </header>

      <div className="primary">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
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
                      <div className="panel-body">
                        <button className="btn btn-default" type="submit">
                          Apply Filters
                        </button>
                        <a
                          className="btn btn-sm btn-link pull-right visible-sm-inline"
                          href="#"
                        >
                          Clear Selections
                        </a>
                        <a
                          className="btn btn-sm btn-link pull-right hidden-sm"
                          href="#"
                        >
                          Reset
                        </a>
                      </div>
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
                              Course Categories
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
                                  IT & SOFTWARE
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="career_state[]"
                                    value="imposter_syndrome"
                                  />
                                  Front end
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="career_state[]"
                                    value="wise_old_head"
                                  />
                                  Backend
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="career_state[]"
                                    value="wise_old_head"
                                  />
                                  Business
                                </label>
                              </div>
                              <div className="checkbox">
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
                              </div>
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
                              Price
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
                                  All
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="topic[]"
                                    value="religion"
                                  />
                                  Free
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="topic[]"
                                    value="music"
                                  />
                                  Paid
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
                              Rating
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
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked">(5*)</span>
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="format[]"
                                    value="website"
                                  />
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star ">(4*)</span>
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="format[]"
                                    value="website"
                                  />
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star "></span>
                                  <span class="fa fa-star ">(3*)</span>
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="format[]"
                                    value="website"
                                  />
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star "></span>
                                  <span class="fa fa-star "></span>
                                  <span class="fa fa-star ">(2*)</span>
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="format[]"
                                    value="website"
                                  />
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star "></span>
                                  <span class="fa fa-star "></span>
                                  <span class="fa fa-star "></span>
                                  <span class="fa fa-star ">(5)</span>
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

                        {/* <div className="panel panel-default">
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
                              Status
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
                                  Single
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="status[]"
                                    value="married"
                                  />
                                  Married
                                </label>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    name="status[]"
                                    value="its_complicated"
                                  />
                                  It's complicated
                                </label>
                              </div>
                            </div>
                          </div>
                        </div> */}
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
  );
}
export default Rightsidefilter;
