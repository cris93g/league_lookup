import React, { Component } from "react";
import axios from "axios";
import champion from "../../champion";

class ChampRotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: []
    };
  }
  componentDidMount() {
    axios.get(`/api/champrotation`).then(response =>
      this.setState({
        rotation: response.data.freeChampionIds
      })
    );
  }
  render() {
    let champs = Object.values(champion.data);
    let { rotation } = this.state;
    console.log(this.state.rotation);
    return (
      <div>
        {rotation ? (
          rotation.map(rotate => {
            console.log(rotate);
            return (
              <div>
                {champs.map(champ => {
                  if (champ.key == rotate) {
                    return (
                      <div>
                        <img
                          className="iconpic"
                          src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${
                            champ.id
                          }.png`}
                        />

                        <p>{champ.name}</p>
                      </div>
                    );
                  }
                })}
              </div>
            );
          })
        ) : (
          <h1>not any matches</h1>
        )}
      </div>
    );
  }
}
export default ChampRotation;
