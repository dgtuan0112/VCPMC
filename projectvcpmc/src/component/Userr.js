import exampleImage from "../images/n.png";
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
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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

      {/* <div className="container"> */}
      <div className="row">
        {/* <div className=""> */}
        <div className="col-2s">
          {" "}
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
        {/* </div> */}

        <div className="col-3">
          <h4>Danh sách hợp đồng</h4>
          <div className="col-1">
            <div class="p-container">
              <p className="mana1">Hợp đồng ủy quyền </p>
              <p className="mana1">Hợp đồng ủy quyền </p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="row">sdaasdas</div>{" "}
          {/* <form>
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
          </form> */}
        </div>

        <div className="col-2 mag">
          <ul class="navbar-nav flex-column ">
            <li class="nav-item">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ff6600" }} />
              <a class="nav-link" href="/#">
                Thêm Hợp đồng
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Userr;
