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

const Playlist = () => {
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

      <div className="row">
        <div className="col-9 frame">
          <div className="row firtframe">
            <div className="col-1">
              <p>STT</p>
            </div>
            <div className="col-2">
              <p>Tiêu đề</p>
            </div>
            <div className="col-1">
              <p>Số bản ghi</p>
            </div>
            <div className="col-1">
              <p>Thời lượng</p>
            </div>
            <div className="col-3">
              <p>Chủ đề</p>
            </div>
            <div className="col-2 firtdate">
              <p className="firtdate">Ngày tạo</p>
            </div>
            <div className="col-2">
              <p>Người tạo</p>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="row contentframe">
            <div className="col-1">
              <p>1</p>
            </div>
            <div className="col-2">
              <p>Top ca khúc 2023</p>
            </div>
            <div className="col-1">
              <p>20</p>
            </div>
            <div className="col-1">
              <p>01:04:27</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-1 cate1">
                  <p>Pop</p>
                </div>
                <div className="col-1 cate2">Chill </div>
                <div className="col-1 cate3">
                  <p className="dingg">Dingga</p>
                </div>
                <div className="col-1 cate4">
                  <p className="song">Songs</p>
                </div>
                <div className="col-1 cate5">
                  <p className="lofi">Lofi</p>
                </div>
                <div className="col-1 cate6">
                  <p>...</p>
                </div>
              </div>
            </div>
            <div className="col-1 date">
              <p>8/4/2024</p>
            </div>
            <div className="col-1 er">
              <p>Cindy Cường</p>
            </div>
            <div className="col-1">
              <div className="detail">
                {" "}
                <a class="nav-link" href="/#">
                  Chi tiết
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

export default Playlist;
