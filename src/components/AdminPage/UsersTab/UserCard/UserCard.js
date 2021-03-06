import React, { Component } from "react";
import UserModifier from "./UserModifier/UserModifier";
import "../../general.css";

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false
    };
  }
  setPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="cardBody">
        {this.state.showPopup && (
          <UserModifier
            user={this.props.user}
            setDisplay={this.setPopup.bind(this)}
            updateList={this.props.updateUsers}
          />
        )}
        <div
          className="userCardContent"
          onClick={() => {
            this.setPopup();
          }}
        >
          <div className="userCardImage">
            <img src={this.props.user.profilePic} alt="" />
          </div>
          <div>
            <b>Name:</b> {this.props.user.name} {this.props.user.lastName}{" "}
            {this.props.user.isAdmin === 1 && <b>(Admin)</b>}
            <br />
            <b>Email:</b> {this.props.user.email}
            <br />
            <b>2FA:</b> {this.props.user.twoFacAut === 1 && "Enabled"}
            {this.props.user.twoFacAut === 0 && "Disabled"}
          </div>
        </div>
      </div>
    );
  }
}
export default UserCard;
