import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./User.css";

const User = () => {
  return (
    <div className="page_user">
      <div className="select_user">
        <label htmlFor="firt-name" className="form-select">
          Việt Nam
          <img className="vnimg" src={exampleImage} alt="Example" />
        </label>
        <div className="menubar">
          <nav class="navbar navbar-expand navbar-light ">
            <div class="container">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav flex-column ">
                  <li class="nav-item">
                    <img className="logo" src={logoImage} alt="Logo" />
                    <div className="prototype"></div>
                    <FontAwesomeIcon icon={faSliders} />
                    <a class="nav-link" href="/#">
                      Kho bản ghi
                    </a>
                  </li>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faList} />
                    <a class="nav-link" href="/#">
                      Playlist
                    </a>
                  </li>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <a class="nav-link" href="/#">
                      Lập lịch phát
                    </a>
                  </li>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faFile} />
                    <a class="nav-link" href="/#">
                      Quản lý
                    </a>
                  </li>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <a class="nav-link" href="/#">
                      Doanh thu
                    </a>
                  </li>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faGear} />
                    <a class="nav-link" href="/#">
                      Cài đặt
                    </a>
                  </li>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                    <a class="nav-link" href="/#">
                      Hỗ trợ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default User;
