import React, { Component } from "react";
import axios from "axios";
import "./Status.css";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      circle: ""
    };
    // this.online = this.online.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/leagueserver`).then(response => {
      this.setState({ status: response.data.services[0].status });
    });
  }

  render() {
    let circle = "";
    // console.log(this.state.status);
    const { status } = this.state;
    console.log(status);
    function online(arr) {
      console.log(arr);
      if (status === "online") {
        circle = "limegreen";
      } else {
        circle = "red";
      }
    }
    online(this.state.status);
    console.log(circle);
    return (
      <div>
        <div className="dot" style={{ background: circle }} />
        {/* {status
          ? status.map(stats => {
              return (
                <div>
                  <p>{stats.name}</p>
                  <p>{stats.status}</p>
                  <div
                    className="dot"
                    style={{ background: this.state.circle }}
                  />
                </div>
              );
            })
          : ""} */}
      </div>
    );
  }
}

export default Status;
