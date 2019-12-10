import React, { Component, useState } from "react";
import UserModifier from "./UserModifier/UserModifier";
import "../../general.css";

const UserCard = (props: any) => {
  let [showPopup, setShowPopUp] = useState(false)

  return (
    <div className="cardBody">
      {showPopup && (
        <UserModifier
          user={props.user}
          setDisplay={setShowPopUp}
          updateList={props.updateUsers}
        />
      )}
      <div
        className="userCardContent"
        onClick={() => {
          setShowPopUp(true)
        }}
      >
        <div className="userCardImage">
          <img src={props.user.profilePic} alt="" />
        </div>
        <div>
          <b>Name:</b> {props.user.name} {props.user.lastName}{" "}
          {props.user.isAdmin === 1 && <b>(Admin)</b>}
          <br />
          <b>Email:</b> {props.user.email}
          <br />
          <b>Region:</b> {props.user.region}
          <br />
          <b>Vacation:</b> {props.user.onVacation === 1 && "Yes"}
          {props.user.onVacation === 0 && "No"}
        </div>
      </div>
    </div>
  )
}
export default UserCard;