import React, { Component } from "react";
import axios from "axios";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboards: []
    };
  }
  componentDidMount() {
    axios.get(`/api/leaderboards`).then(response => {
      this.setState({ leaderboards: response.data });
    });
  }

  render() {
    const { leaderboards } = this.state;
    console.log(leaderboards);
    return (
      <div>
        {/* {leaderboards
          ? leaderboards.entries.map(summoner => {
              return (
                <div>
                  <p>{summoner.summonerName}</p>
                </div>
              );
            })
          : ""} */}
      </div>
    );
  }
}

export default LeaderBoard;
