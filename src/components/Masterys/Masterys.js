import React, { Component } from "react";

class Masterys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mastery: []
    };
  }
  componentDidMount() {
    axios
      .post(`/api/mastery`, {
        id: this.props.match.params.id
      })
      .then(response => {
        this.setState({ mastery: response.data });
      });
  }
  render() {
    return <div>Masteri</div>;
  }
}

export default Masterys;
