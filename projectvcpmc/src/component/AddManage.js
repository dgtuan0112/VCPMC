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
        <div className="row">
          <div className="row mag">
            <div className="col-2">
              <p className="labelmag1">Quyền sở hữu</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magonef"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag2">Đính kèm tệp:</p>
            </div>

            <div className="col-2">
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
              <p className="text1">Mức nhuận bút</p>
            </div>
          </div>
          <div className="row mag2">
            <div className="col-2">
              <p className="labelmag3">Tên hợp đồng</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="mag3"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-5"></div>
            <div className="col-3">
              <p className="text2">Quyền tác giả:</p>
            </div>
            <div className="col-1">
              <p className="num1">0%</p>
            </div>
          </div>
          <div className="row mag3">
            <div className="col-2">
              <p className="labelmag4">Ngày hiệu lực</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <input
                  type="text"
                  id="mag4"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
              <p className="text3">Quyền liên quan:</p>
            </div>
          </div>
          <div className="row mag4">
            <div className="col-2">
              <p className="labelmag5">Ngày hết hạn</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="mag5"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-5"></div>
            <div className="col-3">
              <p className="text4">Quyền của người biểu diễn:</p>
            </div>
            <div className="col-1">
              <p className="num2">50%</p>
            </div>
          </div>
          <div className="row mag3">
            <div className="col-2">
              <p className="labelmag4"></p>
            </div>
            <div className="col-2">
              <div className="mag1"></div>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
              <p className="text5">Quyền của nhà sản xuất:</p>
            </div>
            <div className="col-2">
              <p className="num3">50%</p>
            </div>
          </div>
          <div className="row mag3">
            <div className="col-2">
              <p className="labelmag4"></p>
            </div>
            <div className="col-2">
              <div className="mag1"></div>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
              <p className="text6">Bản ghi/video</p>
            </div>
          </div>

          {/* SAU */}

          <p className="titlelate">Thông tin pháp nhân ủy quyền</p>
          <div className="row mag">
            <div className="col-2">
              <p className="labelmag11">Pháp nhân ủy quyền</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Cá nhân
                </label>
              </div>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Tổ chức
                </label>
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag66">CMND/CCCD:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magonee"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag66">Email:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magonee"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>

          <div className="row mag">
            <div className="col-2">
              <p className="labelmag22">Tên người ủy quyền:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone1"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag6">Ngày cấp:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone1"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag6">Tên đăng nhập:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone1"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>

          <div className="row mag">
            <div className="col-2">
              <p className="labelmag33">Giới tính</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                {/* <label className="form-check-label2" for="flexRadioDefault1">
                  Cá nhân
                </label> */}
              </div>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                {/* <label className="form-check-label2" for="flexRadioDefault1">
                  Tổ chức
                </label> */}
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag66">Nơi cấp:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magoneee"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag66">Mật khẩu:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magoneee"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
          <div className="row mag">
            <div className="col-2">
              <p className="labelmag44">Ngày sinh</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone2"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag6">Mã số thuế:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone2"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag6">Số tài khoản:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone2"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
          <div className="row mag">
            <div className="col-2">
              <p className="labelmag55">Quốc tịch</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone3"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag6">Nơi cư trú:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone3ct"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag6">Ngân hàng:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone3"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
          <div className="row mag">
            <div className="col-2">
              <p className="labelmag666">Số điện thoại:</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone4"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>

            <div className="col-1">
              <div className="mag1">
                <input
                  type="text"
                  id="magone4"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
          <div className="row mag">
            <div className="col-3">
              <p className="labelmag77fot">
                là những trường thông tin bắt buộc
              </p>
            </div>
          </div>

          <div className="row foot">
            <div className="col-3">
              <button type="submit" className="cancel">
                hủy
              </button>
            </div>
            <div className="col-3">
              <button type="submit" className="save">
                lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
