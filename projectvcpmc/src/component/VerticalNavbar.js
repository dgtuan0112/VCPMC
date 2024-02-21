import React from "react";

class VerticalNavbar extends React.Component {
  render() {
    return (
      <div className="vertical-navbar">
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index} onClick={() => this.props.onItemClick(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VerticalNavbar;
