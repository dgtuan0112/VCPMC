import exampleImage from "../images/n.png";
import logoImage from "../images/logo.jpg";
import logoAvar from "../images/avatar.jpg";
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

const Record = () => {
  return (
    <div className="contract_page">
      {/* <div className="select_user">
        <label htmlFor="firt-name" className="form-select">
          Việt Nam
          <img className="vnimg" src={exampleImage} alt="Example" />
        </label>
      </div> */}

      {/* <div className="row">
      
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
      </div> */}

      <div className="Logo">
        <img className="logocontract" src={logoImage} alt="Logo" />
      </div>

      <div className="select_contract">
        <label htmlFor="firt-name" className="form-select ">
          Việt Nam
          <img className="vnimg" src={exampleImage} alt="Example" />
        </label>
      </div>

      {/* <div className="container"> */}
      <div className="paging">
        <h4 className="paging2">Kho bản ghi</h4>
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
        <div className="col-9 frame"></div>
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
