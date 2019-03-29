import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    efiData: []
  };

  componentDidMount() {
    this.getEfiData();
  }

  getEfiData() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then(res => {
        this.setState({ efiData: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.efiData.map(country => (
          <div key={country.countryid}>
            <h1>{country.country_name}</h1>
            <span>{country.region}</span>
            <br />
            <span>{country.world_rank}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
