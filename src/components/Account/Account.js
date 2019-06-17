import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      picture: []
    };
    // this.getpic = this.getpic.bind(this);
  }
  componentDidMount() {
    axios
      .post(`/api/account`, {
        name: this.props.match.params.name
      })
      .then(response => {
        this.setState({ account: response.data });
      });

    axios
      .post(`/api/picture	`, {
        name: this.props.match.params.name
      })
      .then(response => {
        this.setState({ picture: response.data });
      });
  }

  render() {
    console.log(this.state.picture);
    const { account } = this.state;
    let displayAccount = account.map(info => {
      console.log(info);
      return (
        <div key={info.leagueId}>
          {/* <Wrapper> */}
          <img
            className="iconpic"
            src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
              this.state.picture.profileIconId
            }.png`}
          />
          <p>{`Summoner Name: ${info.summonerName}`}</p>
          <p>{`queue type: ${info.queueType}`}</p>
          <p>{`tier: ${info.tier} ${info.rank}`}</p>
          <p>{`wins: ${info.wins}`}</p>
          <p>{`losses: ${info.losses}`}</p>
          <Link to={`/ingame/${info.summonerId}`}>
            <button>IN GAME</button>
          </Link>
          <Link to={`/matchHistory/${this.state.picture.accountId}`}>
            <button>Match History</button>
          </Link>
          {/* </Wrapper> */}
        </div>
      );
    });
    return <div>{displayAccount}</div>;
  }
}
export default Account;
// const Wrapper = styled.section`
//   /* display: flex; */
//   margin: auto;
//   width: 250px;
//   height: 280px;

//   border-radius: 10px;
//   box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.2);
//   transition: all 0.5s ease;
// `;
