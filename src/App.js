import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import MoneyDisplay from "./components/MoneyDisplay";
import InputForm from "./components/InputForm";
import { wallet } from "./wallet.json";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      wallet
    };
  }

  handleWallet(amount, currency) {
    const change = {
      dollar: 59.88,
      euro: 67.22,
      real: 14.9
    };

    this.setState({
      wallet: {
        amountCurrency: amount,
        currency: currency,
        pesos: amount * change[currency]
      }
    });
  }

  render() {
    const symbols = {
      dollar: "U$S",
      euro: "U€",
      real: "R$"
    };
    return (
      <div className="App">
        <Navigation title="My Holidays Wallet" />
        <div className="container">
          <div className="row justify-content-center">
            <InputForm onWallet={this.handleWallet.bind(this)} />
          </div>
          <div className="row justify-content-center">
            <MoneyDisplay
              currency="pesos"
              amountCurrency={this.state.wallet.pesos}
              symbolCurrency="AR$"
              onWallet={this.handleWallet.bind(this)}
              mainCurrency={true}
            />
            <MoneyDisplay
              currency={this.state.wallet.currency}
              amountCurrency={this.state.wallet.amountCurrency}
              symbolCurrency={symbols[this.state.wallet.currency]}
              onWallet={this.handleWallet.bind(this)}
              mainCurrency={false}
            />
          </div>
          <footer className="mt-5">
            <p className="text-white">Hecho por Lauti</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
