import exampleImage from "../images/n.png";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Userr.css";
import "./Playlist.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Calendarr = () => {
  return (
    <div className="contract_page">
      <div className="Logo">
        <img className="logocontract" src={logoImage} alt="Logo" />
      </div>

      <div className="select_contract">
        <label htmlFor="firt-name" className="form-select ">
          Việt Nam
          <img className="vnimg" src={exampleImage} alt="Example" />
        </label>
      </div>

      <div className="paging">
        <h4 className="paging2">Danh sách lịch phát</h4>

        <div className="row sele">
          <div className="col-2">
            {/* <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            /> */}
          </div>
          <div className="col-2">
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
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
              <a class="nav-link" href="/calendar">
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

      <div className="row">
        <div className="col-9 frame">
          <div className="row firtframe">
            <div className="col-1">
              <p>STT</p>
            </div>
            <div className="col-2">
              <p>Tên lịch</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-3">
              <p>Thời gian phát</p>
            </div>
            <div className="col-2 firtdate">
              <p className="firtdate"></p>
            </div>
            <div className="col-2">
              <p></p>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 1</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>2</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 2</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>3</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 3</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="row contentframe">
            <div className="col-1">
              <p>4</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 4</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="row contentframe">
            <div className="col-1">
              <p>5</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 5</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="row contentframe">
            <div className="col-1">
              <p>6</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 6</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="row contentframe">
            <div className="col-1">
              <p>7</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 7</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="row contentframe">
            <div className="col-1">
              <p>8</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 8</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>9</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 9</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>10</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 10</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>11</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 11</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>12</p>
            </div>
            <div className="col-2">
              <p>Lịch phát số 12</p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-1">
              <p></p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 cate1">
                  <p>22/5/2021 -30/5/2021</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p></p>
            </div>
            <div className="col-1 er">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xem Chi tiết
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Xóa
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" footframecor">
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
          </div>
        </div>
        <div className="col-2 contract ">
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ff8614" }} />
              <a class="nav-link" href="/#">
                Thêm lịch phát
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendarr;
