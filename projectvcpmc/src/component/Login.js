import React, { useState } from "react";
import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";
import "./Login.css";

const SelectExample = () => {
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
    const password = event.target.elements["conform-password"].value;

    if (username !== "tuan" || password !== "112") {
      setError("Sai tên đăng nhập hoặc mật khẩu");
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
          <h3 className="title">Đăng nhập</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firt-name" className="form-label">
                Tên đăng nhập
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
            <div className="mb-2">
              <label htmlFor="conform-password" className="form-label">
                Password
              </label>

              <input
                id="conform-password"
                className={isFocused ? "custom-input foucused" : "custom-input"}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="password"
                placeholder=""
              />
            </div>
            {error && (
              <div className="error-message">
                {error} {""}
              </div>
            )}
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
            <a className="linkpage" href="/#">
              Quên mật khẩu?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExample;
