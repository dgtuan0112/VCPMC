import React, { useState } from "react";
import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";
import "./SuccessPass.css";

const SuccessPass = () => {
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
          <img className="lgoimgsucc" src={logoImage} alt="Logo" />
          <h3 className="title">Khôi phục mật khẩu</h3>

          {isSubmitSuccessful ? (
            <div className="success-message">
              <p className="success-text">
                Mật khẩu đã được khôi phục thành công!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="restoremailsucc">
                Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng
                kiểm tra mail.
              </p>
              <p className="restoremailsucc">
                Click vào đường link được đính kèm trong mail để chuyển đến
                trang đặt lại mật khẩu.
              </p>
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

export default SuccessPass;
