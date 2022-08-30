import React from "react";
import Player from "./Player";

function Display() {
  return (
    <div className="display">
      <Player avatarUrl="/avatar/user.jpeg" name="User" />
      <div className="fighter">VS</div>
      <Player avatarUrl="/avatar/computer.jpeg" name="Computer" />
    </div>
  );
}

export default Display;
