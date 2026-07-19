import React, { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }


  increment() {
    this.setState({
      count: this.state.count + 1
    });

    this.sayHello();
  }


  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }


  sayHello() {
    alert("Hello! Welcome to React Event Handling");
  }


  render() {
    return (
      <div>

        <h2>Counter Example</h2>

        <h3>Count: {this.state.count}</h3>

        <button onClick={this.increment}>
          Increase
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

      </div>
    );
  }
}

export default Counter;