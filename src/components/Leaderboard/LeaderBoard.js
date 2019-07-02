import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                <Link to={`/account/${people.summonerName}`}>
                  {" "}
                  <p>{`name: ${people.summonerName}`}</p>
                </Link>
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
