import React from "react";
import user from "../APIs/user";
import "./style.css";
import User from "./user";
import "@fortawesome/fontawesome-free/js/all.js";

class mainClass extends React.Component {
  constructor() {
    super();
    this.state = { userData: [], searchVal: "" };
  }
  componentDidMount() {
    user.getRandomUserNames().then((response) => {
      this.setState({ userData: response.data.results });
    });
  }

  handleChange = (event) => {
    const { searchVal } = event.target;
    this.setState({ searchVal });
  };

  render() {
    return (
      <div>
        <User userData={this.state.userData}></User>
        {}
      </div>
    );
  }
}

export default mainClass;
