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
import "./DetailManage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DetailManage = () => {
  return (
    <div className="addma_page">
      <div className="pagess"></div>
      <div className="addmag">
        <p className="addmag1">quản lý - quản lý hợp đồng - chi tiết</p>
        <h4 className="addmag2">Chi tiết hợp đồng ủy quyền bài hát- BH123</h4>
        <div className="row">
          <div className="col-1 ">
            <p className="detail1">Thông tin hợp dồng</p>
          </div>
          <div className="col-2 ">
            <p className="detail2">Tác phầm ủy quyền</p>
          </div>
        </div>
        <div className="row">
          <div className="row mag">
            <div className="col-2">
              <p className="detailmag1">Quyền sở hữu</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <p className="textdetail1">BH123</p>
              </div>
            </div>
            <div className="col-3">
              <p className="labelmag2">Đính kèm tệp:</p>
            </div>

            <div className="col-2">
              <div className="mag2">
                <p className="file1">hetthuongcannho.doc</p>
              </div>
            </div>
            <div className="col-2">
              <p className="text1">Mức nhuận bút</p>
            </div>
          </div>
          <div className="row mag2">
            <div className="col-2">
              <p className="detailmag3">Tên hợp đồng</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail2">
                  Hợp đồng ủy quyền tác phẩm âm nhạc
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="mag2">
                <p className="file2">hetthuongcannho.doc</p>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-3">
              <p className="textde2">Quyền tác giả:</p>
            </div>
            <div className="col-1">
              <p className="num1">0%</p>
            </div>
          </div>
          <div className="row mag3">
            <div className="col-2">
              <p className="detailmag4">Ngày hiệu lực</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail3">1/5/2021</p>
              </div>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
              <p className="textde3">Quyền liên quan:</p>
            </div>
          </div>
          <div className="row mag">
            <div className="col-2">
              <p className="detailmag5">Ngày hết hạn</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <p className="textdetail4">1/12/2021</p>
              </div>
            </div>
            <div className="col-5"></div>
            <div className="col-3">
              <p className="textde4">Quyền của người biểu diễn:</p>
            </div>
            <div className="col-1">
              <p className="numde2">50%</p>
            </div>
          </div>
          <div className="row mag late">
            <div className="col-2">
              <p className="detailmag6">Tình trạng</p>
            </div>
            <div className="col-1">
              <div className="mag1">
                <p className="textdetail5">Còn thời gian</p>
              </div>
            </div>
            <div className="col-5"></div>
            <div className="col-3">
              <p className="textde5">Quyền của người biểu diễn:</p>
            </div>
            <div className="col-1">
              <p className="numde2">50%</p>
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
              <p className="textde6">Bản ghi/video</p>
            </div>
          </div>

          {/* SAU */}

          <p className="titlelate"></p>
          <div className="row mag">
            <div className="col-2">
              <p className="detailmag1">Pháp nhân ủy quyền</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail1">Cá nhân</p>
              </div>
            </div>
            <div className="col-2">
              <p className="labelmagla2">Số CMND/CCCD:</p>
            </div>

            <div className="col-2">
              <div className="mag2">
                <p className="filela1">123456789012</p>
              </div>
            </div>
            <div className="col-2">
              <p className="textla1">Email:</p>
            </div>
            <div className="col-2">
              <div className="mag2">
                <p className="la1">nguyenvana@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="row magla2">
            <div className="col-2">
              <p className="detailmag1">Tên người ủy quyền</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail1">Nguyễn Văn A</p>
              </div>
            </div>
            <div className="col-2">
              <p className="labelmagla2">Ngày cấp:</p>
            </div>

            <div className="col-2">
              <div className="mag2">
                <p className="filela1">10/07/2011</p>
              </div>
            </div>
            <div className="col-2">
              <p className="textla1">Tài khoản đăng nhập: </p>
            </div>
            <div className="col-2">
              <div className="mag2">
                <p className="la1">nguyenvana@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="row magla2">
            <div className="col-2">
              <p className="detailmag1">Ngày sinh:</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail1">10/01/1984</p>
              </div>
            </div>
            <div className="col-2">
              <p className="labelmagla2">Nơi cấp:</p>
            </div>

            <div className="col-2">
              <div className="mag2">
                <p className="filela1">Tp.HCM, Việt Nam</p>
              </div>
            </div>
            <div className="col-2">
              <p className="textla1">Mật khẩu:</p>
            </div>
            <div className="col-2">
              <div className="mag2">
                <p className="la1">.........</p>
              </div>
            </div>
          </div>
          <div className="row magla2">
            <div className="col-2">
              <p className="detailmag1">Giới tính:</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail1">Nam</p>
              </div>
            </div>
            <div className="col-2">
              <p className="labelmagla2">Mã số thuê:</p>
            </div>

            <div className="col-2">
              <div className="mag2">
                <p className="filela1">92387489</p>
              </div>
            </div>
            <div className="col-2">
              <p className="textla1">Số tải khoản</p>
            </div>
            <div className="col-2">
              <div className="mag2">
                <p className="la1">123112223213333</p>
              </div>
            </div>
          </div>
          <div className="row magla2">
            <div className="col-2">
              <p className="detailmag1">Quốc tịch:</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail1">Việt Nam</p>
              </div>
            </div>
            <div className="col-2">
              <p className="labelmagla2">Nơi cư trú:</p>
            </div>

            <div className="col-2">
              <div className="mag2">
                <p className="filela1">
                  69/53, Nguyễn Gia Trí,Phường 25,Quận Bình Thạnh,Thành Phố Hồ
                  Chí Minh
                </p>
              </div>
            </div>
            <div className="col-2">
              <p className="textla1">Ngân hàng:</p>
            </div>
            <div className="col-2">
              <div className="mag2">
                <p className="la1">ACB-Ngân hàng Á Châu</p>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <div className="mag2"></div>
            </div>
          </div>
          <div className="row magla2">
            <div className="col-2">
              <p className="detailmag1">Số điện thoại:</p>
            </div>
            <div className="col-2">
              <div className="mag1">
                <p className="textdetail1">(+84)345 678 901</p>
              </div>
            </div>
            <div className="col-3"></div>

            <div className="col-2">
              <div className="mag2"></div>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <div className="mag2"></div>
            </div>
          </div>

          <div className="row foot">
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailManage;
