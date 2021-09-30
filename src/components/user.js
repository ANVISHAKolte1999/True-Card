import React from "react";
import "./style.css";
import Intro from "./intro";
import "@fortawesome/fontawesome-free/js/all.js";
import FilterResults from "react-filter-search";
class mainClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Whole">
        <Intro />
        <input
          className="searchBox"
          type="text"
          placeholder="🔍 Search"
          value={value}
          onChange={this.handleChange}
        />
        <div>
          <FilterResults
            value={value}
            data={this.props.userData}
            renderResults={(results) => (
              <div className="CardContainer">
                {results.map((item, index) => (
                  <div key={index}>
                    <div className="CardWrapper">
                      <div className="ColImg">
                        <img
                          className="Img"
                          src={item.picture.large}
                          alt={"Invalid"}
                        />
                      </div>
                      <div className="ColDetail">
                        <div className="UHeader">
                          <div className="UserName">
                            {item.name.first} {item.name.last}
                          </div>
                        </div>
                        <div className="UserUserName">
                          {"@" + item.login.username}
                        </div>
                        <div className="UserLocation">
                          {"📍 " + item.location.country}
                        </div>
                        <div className="UserGender">
                          <i id="icons" className={"fas fa-" + item.gender}></i>
                          {" " + item.dob.age}
                        </div>
                        <a className="UserMail" href={"mailto:" + item.email}>
                          <span role="img" aria-label="mail">
                            📧
                          </span>{" "}
                          Send mail
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default mainClass;
