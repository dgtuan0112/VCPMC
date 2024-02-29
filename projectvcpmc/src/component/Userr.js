import exampleImage from "../images/n.png";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Userr.css";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Userr = () => {
  return (
    <div className="infor_page">
      <div className="select_user">
        <label htmlFor="firt-name" className="form-select">
          Việt Nam
          <img className="vnimg" src={exampleImage} alt="Example" />
        </label>
      </div>

      <div className="row">
        <div className="col-2s">
          {" "}
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
              <img className="logo" src={logoImage} alt="Logo" />
              <div className="prototype"></div>
              <NavLink to="/record">
                <FontAwesomeIcon icon={faSliders} />
                <a class="nav-link" href="/#">
                  Kho bản ghi
                </a>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/playlist">
                <FontAwesomeIcon icon={faList} />
                <a class="nav-link" href="/#">
                  Playlist
                </a>
              </NavLink>
            </li>
            <li class="nav-item">
              <FontAwesomeIcon icon={faCalendarDays} />
              <a class="nav-link" href="/#">
                Lập lịch phát
              </a>
            </li>
            <li class="nav-item">
              <NavLink to="/Manage">
                <FontAwesomeIcon icon={faFile} />
                <a class="nav-link" href="/#">
                  Quản lý
                </a>
              </NavLink>
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

        <div className="col-3">
          <h4>Thông tin cơ bản</h4>
          <img className="avar" src={logoAvar} alt="Avar" />
          <h5>Tuấn</h5>
        </div>
        <div className="col-6">
          {" "}
          <form>
            <div className="em-add double">
              <div className="em-add db1 ">
                <label for="exampleInputEmail1" className="form-label">
                  Họ:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="em-add db2 ">
                <label for="exampleInputEmail1" className="form-label">
                  Ngày Sinh:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="pass-add1">
              <label for="exampleInputPassword1" className="form-label">
                Email:
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="pass-add2">
              <label for="exampleInputPassword1" className="form-label">
                Tên Đăng Nhập
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="pass-add2">
              <label for="exampleInputPassword1" className="form-label">
                Phân quyền
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary 1">
                hủy
              </button>
              <button type="submit" className="btn btn-primary 2">
                lưu
              </button>
            </div>
          </form>
        </div>

        <div className="col-2 action">
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
              <NavLink></NavLink>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                style={{ color: "#ff8614" }}
              />
              <a class="nav-link" href="/#">
                Sửa thông tin
              </a>
            </li>
            <li class="nav-item">
              <FontAwesomeIcon icon={faLock} style={{ color: "#ff8614" }} />
              <a class="nav-link" href="/#">
                Đổi mật khẩu
              </a>
            </li>
            <li class="nav-item">
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#ff8614" }}
              />
              <a class="nav-link" href="/#">
                Đăng suất
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Userr;
