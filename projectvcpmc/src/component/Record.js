import exampleImage from "../images/n.png";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
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

import "@fortawesome/fontawesome-free/css/all.min.css";

const Record = () => {
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
            <div className="col-1">
              <p>STT</p>
            </div>
            <div className="col-1">
              <p>Tên bản ghi</p>
            </div>
            <div className="col-1">
              <p>Mã isrc</p>
            </div>
            <div className="col-1">
              <p>Thời lượng</p>
            </div>
            <div className="col-1">
              <p>Ca sĩ</p>
            </div>
            <div className="col-2">
              <p>Tác giả</p>
            </div>
            <div className="col-1">
              <p>Thể loại</p>
            </div>
            <div className="col-1">
              <p>Định dạng</p>
            </div>
            <div className="col-1">
              <p>Thời hạn sử dụng</p>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>

          <div className="row contentframe">
            <div className="col-1">
              <p>2</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>3</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>4</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>5</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>5</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>6</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>7</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>8</p>
            </div>
            <div className="col-1">
              <p>Mất em</p>
            </div>
            <div className="col-1">
              <p>KRA0105463</p>
            </div>
            <div className="col-1">
              <p>04:27</p>
            </div>
            <div className="col-1">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-2">
              <p>Phan Mạnh Quỳnh</p>
            </div>
            <div className="col-1">
              <p>Ballad</p>
            </div>
            <div className="col-1">
              <p>Audio</p>
            </div>
            <div className="col-1">
              <p>Còn thời gian</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  cập nhật
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  nghe
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
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <div className="col-8 footcor">
                  <p>hàng trong mỗi trang </p>
                </div>
                <div className="col-2 footcor">
                  <p>1 2 3 _100 </p>
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

export default Record;
