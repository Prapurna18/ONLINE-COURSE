import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Comment.css";

function Comment() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="d-flex row">
          <div className="col-md-8">
            <div className="d-flex flex-column comment-section" id="myGroup">
              <div className="bg-white p-2">
                <div className="d-flex flex-row user-info">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/RpzrMR2.jpg"
                    width="40"
                  />
                  <div className="d-flex flex-column justify-content-start ml-2">
                    <span className="d-block font-weight-bold name">
                      Marry Andrews
                    </span>
                    <span className="date text-black-50">
                      Shared publicly - Jan 2020
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="bg-white p-2">
                <div className="d-flex flex-row fs-12">
                  <div className="like p-2 cursor">
                    <i className="fa fa-thumbs-o-up"></i>
                    <span className="ml-1">Like</span>
                  </div>
                  <div
                    className="like p-2 cursor action-collapse"
                    data-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                    href="#collapse-1"
                  >
                    <i className="fa fa-commenting-o"></i>
                    <span className="ml-1">Comment</span>
                  </div>
                  <div
                    className="like p-2 cursor action-collapse"
                    data-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="collapse-2"
                    href="#collapse-2"
                  >
                    <i className="fa fa-share"></i>
                    <span className="ml-1">Share</span>
                  </div>
                </div>
              </div>
              <div
                id="collapse-1"
                className="bg-light p-2 collapse"
                data-parent="#myGroup"
              >
                <div className="d-flex flex-row align-items-start">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/RpzrMR2.jpg"
                    width="40"
                  />
                  <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                </div>
                <div className="mt-2 text-right">
                  <button
                    className="btn btn-primary btn-sm shadow-none"
                    type="button"
                  >
                    Post comment
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm ml-1 shadow-none"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div
                id="collapse-2"
                className="bg-light p-2 collapse"
                data-parent="#myGroup"
              >
                <div className="d-flex flex-row align-items-start">
                  <i className="fa fa-facebook border p-3 rounded mr-1"></i>
                  <i class="fa fa-twitter border p-3 rounded mr-1"></i>
                  <i class="fa fa-linkedin border p-3 rounded mr-1"></i>
                  <i class="fa fa-instagram border p-3 rounded mr-1"></i>
                  <i class="fa fa-dribbble border p-3 rounded mr-1"></i>{" "}
                  <i class="fa fa-pinterest-p border p-3 rounded mr-1"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
