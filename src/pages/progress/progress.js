import React, { Component } from "react";
import PropTypes from "prop-types";
import "./progress.scss";

class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 1,
      stepValue: this.props.stepList.value,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    let stepValue = this.state.currentValue;

    switch (value) {
      case "Prev":
        if (stepValue === 1) {
          this.setState({
            currentValue: 1,
          });
        } else {
          this.setState({
            currentValue: --stepValue,
          });
        }
        break;
      case "Next":
        if (stepValue === this.props.stepList.length) {
          this.setState({
            currentValue: this.props.stepList.length,
          });
        } else {
          this.setState({
            currentValue: ++stepValue,
          });
        }
        break;
    }
  }

  render() {
    const progressBar = ((this.state.currentValue - 1) / (this.props.stepList.length - 1)) * 100 + "%";
  
    return (
      <div className="container">
        <div className="progress-container">
          <div
            className="progress"
            style={{ width: progressBar }}
          ></div>
          {this.props.stepList.map((item, index) => {
            return (
              <div
                className={`circle ${
                              index == 0
                                ? "active"
                                : this.state.currentValue > index
                                ? "active"
                                : ""
                            }`}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="barContainer" onClick={this.handleClick}>
          <input
            type="button"
            className={`button ${
              this.state.currentValue === 1  ? "disable" : ""
            }`}
            value="Prev"
          />
          <input
            type="button"
            className={`button ${
              this.state.currentValue === this.props.stepList.length
                ? "disable"
                : ""
            }`}
            value="Next"
          />
        </div>
      </div>
    );
  }
}

/**
 * props????????????
 */
Progress.propTypes = {
  stepList: PropTypes.array.isRequired,
};

/**
 * props???????????????
 */
Progress.defaultProps = {
  stepList: [1, 2, 3, 4, 5],
};

export default Progress;
