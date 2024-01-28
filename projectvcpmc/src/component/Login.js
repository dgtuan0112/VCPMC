import React from "react";

export default function LoginPage() {
  return (
    <div className="login_page">
      <div className="login-form-container">
        <h1 className="title">Đăng Nhập</h1>
        <form>
          <div>
            <label htmlFor="firt-name" className="form-label">
              Tên đăng nhập
            </label>
            <input type="text" placeholder="Email" />
          </div>
        </form>
      </div>
    </div>
  );
}
