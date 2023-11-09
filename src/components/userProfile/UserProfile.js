import React, { Component } from "react";
import "./userProfile.css";
import Aftab3 from "../../images/aftab.jpg"
export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
          <img src={Aftab3}></img>
          </div>
          <h4>Aftab Ahmed</h4>
          <p>4th Year Student at Sukkur IBA University</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
          Front-end Developer with React.js, HTML5, CSS3, JavaScript, Bootstrap5, other Skills Java, C++, Database Management System, SQL, Python, Machine Learning,
          </div>
        </div>
      </div>
    );
  }
}
