import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Method to increment count
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>React Counter using Class Component</h2>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default CounterButton;
