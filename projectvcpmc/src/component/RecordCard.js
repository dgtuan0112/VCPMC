import exampleImage from "../images/n.png";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
import recordImage from "../images/nghebanghi.jpg";
import imageRecord from "../images/13c.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Record.css";
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

const RecordCard = () => {
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
        <h4 className="paging2">Kho bản ghi</h4>
        <div className="row tab">
          <div className="col-2">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="col-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="col">
          <div className="row selecor">
            <div className="col-1">
              <p className="labelselecor1">Thể loại</p>
            </div>
            <div className="col-1">
              <div className="selecor1">
                <select
                  id="seleone"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>tất cả</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-1">
              <p className="labelsele2">Định dạng</p>
            </div>

            <div className="col-1">
              <div className="sele2">
                <select
                  id="selecortwo"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>tất cả</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-2">
              <p className="labelselecor2">Thời hạn sử dụng</p>
            </div>

            <div className="col-1">
              <div className="selecor2">
                <select
                  id="selecortwotime"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>tất cả</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-2">
              <p className="labelselecor2sta">Trạng thái</p>
            </div>

            <div className="col-1">
              <div className="selecor2">
                <select
                  id="selecortwostatus"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>tất cả</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-1">
              <FontAwesomeIcon icon={faListUl} />
            </div>
            <div className="col-1">
              <NavLink to="/recordcard">
                {" "}
                <FontAwesomeIcon icon={faTableCellsLarge} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="menu-left">
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
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
      {/* </div> */}
      <div className="row">
        <div className="col-9 frame">
          <div className="row firtframe">
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card "
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row twoframe">
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                onClick={() => handleImageClick(imageRecord)}
              >
                <img className="imagerecord" src={imageRecord} alt="Logo" />
                <div class="card-body">
                  <h5 class="card-title">Handcraft Fresh Bacon Multy</h5>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text">Ca sĩ:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" singer">Bella Poarch</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text st">Sáng tác:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" composer">Leilani Zulauf</p>
                    </div>
                  </div>
                  <div className="row cardd">
                    <div className="col-4 cardd">
                      {" "}
                      <p className="card-text hd">Số hợp đồng:</p>
                    </div>{" "}
                    <div className="col cardd">
                      {" "}
                      <p className=" contest">HD395738503</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col ">
                      <div className="tloai">
                        {" "}
                        <p className="ttpop">Thể loại</p>
                        <p className="pop">Pop</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="ddang">
                        <p className="ttau">Định dạng</p>
                        <p className="au">Audio</p>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="tluong">
                        <p className="tttime">Thời lượng</p>
                        <p className="timee">03:00</p>
                      </div>
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        id="pencor"
                        icon={faPenToSquare}
                        style={{ color: "#ff9d2e" }}
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

export default RecordCard;
