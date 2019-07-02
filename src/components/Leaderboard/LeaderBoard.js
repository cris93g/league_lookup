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
      this.setState({ leaderboards: response.data.entries });
    });
  }

  render() {
    const { leaderboards } = this.state;
    console.log(leaderboards);
    return (
      <div>
        {leaderboards
          ? leaderboards.map(people => (
              <div>
                <p>{`name: ${people.summonerName}`}</p>
                <p>{`rank: ${people.rank}`}</p>
                <p>{`wins :${people.wins}`}</p>
                <p>{`losses:${people.losses}`}</p>
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default LeaderBoard;
