import React, { Component } from "react";
import axios from "axios";
import "./Status.css";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      circle: "red"
    };
  }
  componentDidMount() {
    axios.get(`/api/leagueserver`).then(response => {
      this.setState({ status: response.data.services });
    });
  }

  render() {
    // console.log(this.state.status);
    const { status } = this.state;
    console.log(status);

    return (
      <div>
        {status
          ? status.map(stats => {
              return (
                <div>
                  <p>{stats.name}</p>
                  <p>{stats.status}</p>
                  {/* <div
                    className="dot"
                    style={{ background: this.state.color }}
                  /> */}
                  {/* <div style={{ background: this.state }} /> */}
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}

export default Status;
