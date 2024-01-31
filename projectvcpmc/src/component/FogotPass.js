import React, { useState } from "react";
import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";
import "./FogotPass.css";

const FogotPass = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "tuan@gmail.com") {
      setIsSubmitSuccessful(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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

          {isSubmitSuccessful ? (
            <div className="success-message">
              <p className="success-text">
                Mật khẩu đã được khôi phục thành công!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="restoremail">
                Vui lòng nhập địa chỉ email đã đăng ký để khôi phục mật khẩu
              </p>
              <div>
                <label htmlFor="firt-name" className="form-label">
                  Email
                </label>
                <input
                  id="firt-name"
                  className={
                    isFocused ? "custom-input focused" : "custom-input"
                  }
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  type="text"
                  placeholder=""
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />

                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Xác nhận
              </button>
            </form>
          )}

          <div className="forgot-pass">
            {!isSubmitSuccessful && (
              <p className="linkpagefogot">Quay lại đăng nhập</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FogotPass;
