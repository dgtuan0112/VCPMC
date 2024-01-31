import React, { useState } from "react";
import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";
import "./FogotPass.css";

const FogotPass = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(null);

  const handleFocus = () => {
    setIsFocused(true);
    setError(null);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements["firt-name"].value;

    if (username !== "tuan") {
      setError("Vui lòng nhập địa chỉ email đã đăng kí để khôi phục mật khẩu");
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
          <img className="lgoimg" src={logoImage} alt="Logo" />
          <h3 className="title">Khôi phục mật khẩu</h3>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="error-messagefogot">
                {error} {""}
              </div>
            )}
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
              Đăng nhập
            </button>
          </form>
          <div classNam="forgot-pass">
            <p className="linkpage">Quên mật khẩu?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FogotPass;
