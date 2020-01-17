import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import MobileApp from "./MobileApp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  //var client = MobileApp();
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data + 1}));
  }

  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature in Florence is: {response} °F
              </p>
              : <p>Loading...</p>}
        </div>
    );
  }
}

export default App;