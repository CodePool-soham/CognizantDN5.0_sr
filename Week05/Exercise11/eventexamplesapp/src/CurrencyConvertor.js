import React, { Component } from "react";

class CurrencyConvertor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rupees: "",
      euro: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    let euroValue = this.state.rupees / 90;

    this.setState({
      euro: euroValue.toFixed(2)
    });
  }


 render() {
  return (
    <div style={{ color: "green" }}>

      <h2>Currency Converter</h2>

      <form onSubmit={this.handleSubmit}>

        <label>
          Enter Rupees:
        </label>

        <input
          type="number"
          value={this.state.rupees}
          onChange={(e) =>
            this.setState({ rupees: e.target.value })
          }
        />

        <br /><br />

        <button type="submit">
          Convert
        </button>

      </form>

      <h3>
        Euro: {this.state.euro}
      </h3>

    </div>
  );
}
}
export default CurrencyConvertor;