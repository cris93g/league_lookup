import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SpecificGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: []
    };
  }
  componentDidMount() {
    axios
      .post(`/api/match`, {
        matchId: this.props.match.params.gameId
      })
      .then(response => {
        this.setState({ game: response.data });
      });
  }
  render() {
    let { game } = this.state;
    console.log(game);
    return (
      <div>
        <p>{game.gameMode}</p>
        <p>{game.gameType}</p>
        <div>
          {game.participantIdentities ? (
            game.participantIdentities.map(participant => (
              <div>
               <Link to={`/account/${participant.player.summonerName}`}> <p>{participant.player.summonerName}</p></Link>
                <img
                  className="iconpic"
                  src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
                    participant.player.profileIcon
                  }.png`}
                />
              </div>
            ))
          ) : (
            <h1>not any matches</h1>
          )}
        </div>
      </div>
    );
  }
}
export default SpecificGame;
