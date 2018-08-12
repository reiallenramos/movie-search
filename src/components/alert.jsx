import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className={this.getAlertClasses()}>
      {this.props.message}
      </div>
    );
  }

  getAlertClasses() {
    let classes = "alert m-2 alert-"
    classes += (this.props.type)
    return classes;
  }
}
export default Alert;
