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
import "./Addmanage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Manage = () => {
  return (
    <div className="addma_page">
      <div className="pagess"></div>
      <div className="addmag">
        <p className="addmag1">quản lý - quản lý hợp đồng - Thêm hợp đồng</p>
        <h4 className="addmag2">Thêm hợp đồng ủy quyền mới</h4>

        <div className="row mag">
          <div className="col-2">
            <p className="labelmag1">Quyền sở hữu</p>
          </div>
          <div className="col-1">
            <div className="mag1">
              {/* <select
                id="magone"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>tất cả</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select> */}
              <input
                type="text"
                id="magone"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>
          <div className="col-2">
            <p className="labelmag2">Hiệu lực hợp đồng</p>
          </div>

          <div className="col-1">
            <div className="mag2">
              <select
                id="magtwo"
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
    </div>
  );
};

export default Manage;
