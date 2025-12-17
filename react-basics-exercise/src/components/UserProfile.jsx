import React from "react";
import PropTypes from "prop-types";

function UserProfile({ userData, theme = "light" }) {
  const { name, email, avatarUrl, imageSize } = userData;

  return (
    <div className={`profile-card theme-${theme}`}>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <img
        className="profile-avatar"
        src={avatarUrl}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
  theme: PropTypes.string,
};

export default UserProfile;
