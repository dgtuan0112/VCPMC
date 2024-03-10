import exampleImage from "../images/n.png";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
import recordImage from "../images/nghebanghi.jpg";
import imagePlay1 from "../images/play1.jpg";
import imagePlay2 from "../images/play2.jpg";
import imagePlay3 from "../images/play3.jpg";
import imagePlay4 from "../images/play4.jpg";
import imagePlay5 from "../images/play5.jpg";
import imagePlay6 from "../images/play6.jpg";
import imagePlay7 from "../images/play7.jpg";
import imagePlay8 from "../images/play8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./Record.css";
import "./Playlistvideo.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import "./RecordCard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Playlistvideo = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setShowImage(true);
    setSelectedImage(imageSrc);
  };
  return (
    <div className="record_page">
      <div className="Logo">
        <img className="logocontract" src={logoImage} alt="Logo" />
      </div>

      <div className="select_record">
        <label htmlFor="firt-name" className="form-select ">
          Việt Nam
          <img className="vnimg" src={exampleImage} alt="Example" />
        </label>
      </div>

      {/* <div className="container"> */}
      <div className="paging">
        <h4 className="paging2">Playlist</h4>

        <div className="row sele">
          <div className="col-2">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="col-8">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <div className="col-1">
            <FontAwesomeIcon icon={faListUl} />
          </div>
          <div className="col-1">
            <NavLink to="/playlistvideo">
              {" "}
              <FontAwesomeIcon icon={faTableCellsLarge} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="menu-left">
          <ul className="navbar-nav flex-column ">
            <li className="nav-item">
              <NavLink to="/record">
                <FontAwesomeIcon icon={faSliders} />
                <a className="nav-link record" href="/#">
                  Kho bản ghi
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/playlist">
                <FontAwesomeIcon icon={faList} />
                <a className="nav-link record" href="/#">
                  Playlist
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/calendarr">
                <FontAwesomeIcon icon={faCalendarDays} />
                <a className="nav-link record" href="/#">
                  Lập lịch phát
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/manage">
                <FontAwesomeIcon icon={faFile} />
                <a className="nav-link record" href="/#">
                  Quản lý
                </a>
              </NavLink>
            </li>
            <li class="nav-item">
              <FontAwesomeIcon icon={faDollarSign} />
              <a className="nav-link record" href="/#">
                Doanh thu
              </a>
            </li>
            <li class="nav-item">
              <FontAwesomeIcon icon={faGear} />
              <a className="nav-link record" href="/#">
                Cài đặt
              </a>
            </li>
            <li class="nav-item">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <a className="nav-link record" href="/#">
                Hỗ trợ
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <div className="row">
        <div className="col-9 frame">
          <div className="row firtframe">
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay1)}
              >
                <img className="imagerecord" src={imagePlay1} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay2)}
              >
                <img className="imagerecord" src={imagePlay2} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay3)}
              >
                <img className="imagerecord" src={imagePlay3} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay4)}
              >
                <img className="imagerecord" src={imagePlay4} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row firtframe">
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay5)}
              >
                <img className="imagerecord" src={imagePlay5} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay6)}
              >
                <img className="imagerecord" src={imagePlay6} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay7)}
              >
                <img className="imagerecord" src={imagePlay7} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imagePlay8)}
              >
                <img className="imagerecord" src={imagePlay8} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col cardd">
                      {" "}
                      <div className="row">
                        <div className="col-4 ">
                          <div className="chude ">
                            {" "}
                            <p className="pop-vid1">chủ đề ví dụ</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tloai vid">
                            {" "}
                            <p className="pop-vid">Pop</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="ddang vid">
                            <p className="au-vid">Trending</p>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <div className="tluong vid">
                            <p className="timee-vid">Good</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Người tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composervid">Admin</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Ngày tạo:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">12/12/2021</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">số bản ghi</p>
                        <p className="pop">20</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang2">
                        <p className="ttau">Thời lượng</p>
                        <p className="au2">1:03:00</p>
                      </div>
                    </div>

                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faCircleExclamation}
                        style={{ color: "#f27c0d" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="row">
            <div className=" footframecor">
              <div className="row">
                {" "}
                <div className="col-1 footcor">
                  <p>Hiển thị </p>
                </div>
                <div className="col-1 footip">
                  {" "}
                  <input
                    type="text"
                    className="form-control footercor"
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                </div>
                <div className="col-7 footcor">
                  <p>hàng trong mỗi trang </p>
                </div>
                <div className="col-1 footcornumber">
                  <p>1 </p>
                </div>
                <div className="col-1 footcornumber">
                  <p className="twoo">2 </p>
                </div>
                <div className="col-1 footcornumber">
                  <p className="three">3 ... 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2 contract ">
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ff8614" }} />
              <a class="nav-link" href="/#">
                Sửa thông tin
              </a>
            </li>
          </ul>
        </div>
        {showImage && selectedImage && (
          <div className="fullscreen-image-container">
            <div
              className="fullscreen-image-overlay"
              onClick={() => setShowImage(false)}
            ></div>
            <div className="fullscreen-image-wrapper">
              <img
                className="fullscreen-image"
                src={selectedImage}
                alt="Fullscreen"
              />
            </div>
          </div>
        )}

        {showImage && (
          <div className="overlay" onClick={() => setShowImage(false)}></div>
        )}
      </div>
    </div>
  );
};

export default Playlistvideo;
