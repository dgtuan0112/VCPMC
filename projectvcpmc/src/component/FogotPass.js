import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";

import "./FogotPass.css";

const FogotPass = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements["firt-name"].value;

    if (email === "tuan@gmail.com") {
      navigate("/success-pass");
    } else {
    }
  };

  return (
    <div className="select_page">
      <label htmlFor="firt-name" className="form-select">
        Việt Nam
        <img className="vnimg" src={exampleImage} alt="Example" />
      </label>

      <div className="login_page">
        <div className="login-form-container">
          <img className="lgoimgfogot" src={logoImage} alt="Logo" />
          <h3 className="title">Khôi phục mật khẩu</h3>
          <form onSubmit={handleSubmit}>
            <p className="restoremailfogot">
              Vui lòng nhập địa chỉ email đã đăng kí để khôi phục mật khẩu
            </p>
            <div>
              <label htmlFor="firt-name" className="form-label">
                Email
              </label>
              <input
                id="firt-name"
                className={isFocused ? "custom-input focused" : "custom-input"}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text"
                placeholder=""
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />

              <label className="form-check-label" for="flexCheckDefault">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Xác nhận
            </button>
          </form>
          <div classNam="forgot-pass">
            <NavLink to="/">
              <p className="linkpagefogot">Quay lại đăng nhập</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FogotPass;
