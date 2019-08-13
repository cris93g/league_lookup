import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD
import styled from "styled-components";
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
					? leaderboards.map(people => {
							console.log(people);
							return (
								<div>
									<Cards>
										<Link to={`/account/${people.summonerName}`}>
											<p>{people.summonerName}</p>{" "}
										</Link>
										<p>{`wins ${people.wins}`}</p>
										<p>{`looses ${people.losses}`}</p>
										<p>{`lp ${people.leaguePoints}`}</p>
									</Cards>
								</div>
							);
					  })
					: "no entries"}
			</div>
		);
	}
=======
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
>>>>>>> 971b5001b63741580fb7d41755be9cb8d80a88c5
}

export default LeaderBoard;

const Cards = styled.section`
	margin: auto;
	width: 1000px;
	height: 100px;
	border: 0.5px solid black;
	background-color: lightskyblue;
`;
