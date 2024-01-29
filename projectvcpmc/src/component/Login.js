import React, { useState } from "react";
import logoImage from "../images/logo.jpg";
import exampleImage from "../images/n.png";
import "./Login.css";

<style>.login_page{}</style>;
const SelectExample = () => {
  //   const [selectedOption, setSelectedOption] = useState("option1");

  //   const handleSelectChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
          <form>
            <div>
              <label htmlFor="firt-name" className="form-label">
                Tên đăng nhập
              </label>
              <input
                id="firt-name"
                className={isFocused ? "custom-input foucused" : "custom-input"} //form-control
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
                className={isFocused ? "custom-input foucused" : "custom-input"} //form-control
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="password"
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
