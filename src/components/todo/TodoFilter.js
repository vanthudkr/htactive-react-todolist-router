import React, { Component } from "react";

class TodoFilter extends Component {
  render() {
    return (
      <ul class="task-filters">
        <li>
          <a class="active" href="#">
            View All
          </a>
        </li>
        <li>
          <a href="active.html">Active</a>
        </li>
        <li>
          <a href="completed.html">Completed</a>
        </li>
      </ul>
    );
  }
}

export default TodoFilter;
