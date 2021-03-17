import React from "react";

function Profile(props) {
  return (
    <>
      <p>Email</p>
      <b>{props.user.name}+"!!!!!!!!!!!!!"</b>
    </>
  );
}

export default Profile;
