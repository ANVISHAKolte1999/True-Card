import React, { Component } from "react";
import "./intro.css";

export class intro extends Component {
  render() {
    return (
      <header id="t-header">
        <div className="Top">
          
          <p className="para">
            {"Your search for the right person has never been easier!"}
          </p>
          <p className="para">{"Try typing in a name, country or username"}</p>
        </div>
      </header>
    );
  }
}

export default intro;
