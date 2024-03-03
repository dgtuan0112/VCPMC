import exampleImage from "../images/n.png";
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
        <div className="col-11">
          <div className="row selecor">
            <div className="col-2">
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
            <div className="col-2">
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
              <p className="labelselecor2">Trạng thái</p>
            </div>

            <div className="col-1">
              <div className="selecor2">
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
              <p>Số hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Tên hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Người ủy quyền</p>
            </div>
            <div className="col-1">
              <p>Quyền sở hữu</p>
            </div>
            <div className="col-2">
              <p>Hiệu lực hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>STT</p>
            </div>
            <div className="col-1">
              <p>Số hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Tên hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Người ủy quyền</p>
            </div>
            <div className="col-1">
              <p>Quyền sở hữu</p>
            </div>
            <div className="col-2">
              <p>Hiệu lực hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-1">
              <p>Số hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Tên hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Người ủy quyền</p>
            </div>
            <div className="col-1">
              <p>Quyền sở hữu</p>
            </div>
            <div className="col-2">
              <p>Hiệu lực hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>STT</p>
            </div>
            <div className="col-1">
              <p>Số hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Tên hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Người ủy quyền</p>
            </div>
            <div className="col-1">
              <p>Quyền sở hữu</p>
            </div>
            <div className="col-2">
              <p>Hiệu lực hợp đồng</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
            </div>
            <div className="col-1">
              <p>Ngày tạo</p>
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
