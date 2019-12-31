import React, { Component } from "react";

class MoneyDisplay extends Component {
  constructor() {
    super();
    this.state = {
      amountOperation: 0
    };
  }

  handleInput(e) {
    const amountOperation = e.target.value;
    this.setState({
      amountOperation
    });
  }

  handleAddMoney(e) {
    var amount =
      parseFloat(this.props.amountCurrency) +
      parseFloat(this.state.amountOperation);
    this.props.onWallet(amount, this.props.currency);
  }

  handleSubstractMoney(e) {
    var amount =
      parseFloat(this.props.amountCurrency) -
      parseFloat(this.state.amountOperation);
    this.props.onWallet(amount, this.props.currency);
  }

  footer() {
    if (this.props.mainCurrency) {
      return (
        <div className="card-footer row justify-content-center align-items-center">
          <h3>No te lo gastes todo!</h3>
        </div>
      );
    } else {
      return (
        <div className="card-footer row justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-danger col-2 col-md-1"
            onClick={this.handleSubstractMoney.bind(this)}
          >
            -
          </button>
          <div className="form-group col-5 col-md-3 my-0">
            <input
              type="number"
              className="form-control"
              placeholder="0"
              onChange={this.handleInput.bind(this)}
            ></input>
          </div>
          <button
            type="button"
            className="btn btn-success col-2 col-md-1"
            onClick={this.handleAddMoney.bind(this)}
          >
            +
          </button>
        </div>
      );
    }
  }

  render() {
    const names = {
      pesos: "pesos",
      dollar: "dólares",
      euro: "euros",
      real: "reales"
    };
    return (
      <div className="card bg-light col-md-5 mx-4 mt-4 p-0">
        <div className="card-header">
          <h3 className="text-capitalize">{names[this.props.currency]}</h3>
        </div>
        <div className="card-body">
          <h2>
            <small class="text-muted">{this.props.symbolCurrency + " "}</small>
            {parseFloat(this.props.amountCurrency).toFixed(2)}
          </h2>
        </div>
        {this.footer()}
      </div>
    );
  }
}

export default MoneyDisplay;
