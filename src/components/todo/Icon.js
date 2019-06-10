import React, { Component } from "react";

class Icon extends Component {
  render() {
    console.log(this.props.icon);
    return (
      <button
        className="btn btn--icon task-item__button edit-icon"
        type="button"
      >
        <i className={this.props.icon} />
      </button>
    );
  }
}

export default Icon;
