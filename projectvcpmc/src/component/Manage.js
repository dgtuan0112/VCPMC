import exampleImage from "../images/n.png";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Userr.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Manage = () => {
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
        <p className="paging1">quản lý - quản lý hợp đồng</p>
        <h4 className="paging2">Danh sách hợp đồng</h4>
        <div className="row tab">
          <div className="col-1">
            <p className="tab1">hợp đồng ủy quyền</p>
          </div>

          <div className="col-2">
            <p className="tab2">hợp đồng ủy quyền</p>
          </div>
        </div>

        <div className="row sele">
          <div className="col-2">
            <p className="labelsele1">Quyền sở hữu</p>
          </div>
          <div className="col-1">
            <div className="sele1">
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
          <div className="col-2">
            <p className="labelsele2">Hiệu lực hợp đồng</p>
          </div>

          <div className="col-1">
            <div className="sele2">
              <select
                id="seletwo"
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
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>HĐ123</p>
            </div>
            <div className="col-2">
              <p>hợp đồng ủy quyền bài hát</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Người biểu diễn</p>
            </div>
            <div className="col-2">
              <p>Còn thời hạn</p>
            </div>
            <div className="col-1">
              <p>14/2/2024</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  xem chi tiết
                </a>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Manage;
