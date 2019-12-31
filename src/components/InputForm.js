import React, { Component } from "react";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      currency: "dollar"
    };
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onWallet(this.state.amount, this.state.currency);
  }

  render() {
    const names = {
      dollar: "dólares",
      euro: "euros",
      real: "reales"
    };
    return (
      <div className="card mt-4 p-0 col-md-5 mx-4">
        <div className="card-header">
          <h3>Ingresá tus fondos para estas vacaciones</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="number"
              name="amount"
              className="form-control"
              placeholder={"Cantidad en " + names[this.state.currency]}
              onChange={this.handleInput.bind(this)}
            />
          </div>
          <select
            className="form-group form-control"
            name="currency"
            onChange={this.handleInput.bind(this)}
          >
            <option value="dollar">Dólar</option>
            <option value="euro">Euro</option>
            <option value="real"> Real</option>
          </select>
          <button
            type="submit"
            className="btn btn-dark mt-3"
            onClick={this.handleOnSubmit.bind(this)}
          >
            GUARDAR
          </button>
        </div>
      </div>
    );
  }
}

export default InputForm;
