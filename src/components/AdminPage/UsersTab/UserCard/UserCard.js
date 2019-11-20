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
          className="cardContent"
          onClick={() => {
            this.setPopup();
          }}
        >
          Name: {this.props.user.name} {this.props.user.lastName}
          <br />
          Email: {this.props.user.email}
          <br />
          Admin: {this.props.user.isAdmin === 1 && "True"}
          {this.props.user.isAdmin === 0 && "False"}
          <br />
          2FA: {this.props.user.twoFacAut === 1 && "True"}
          {this.props.user.twoFacAut === 0 && "False"}
        </div>
      </div>
    );
  }
}
export default UserCard;
