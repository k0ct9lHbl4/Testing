import React from "react";

export const User = ({ user, onDelete }) => {
  return (
    <div>
      {user.name}
      <button id="user-delete" type="button" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  );
};
