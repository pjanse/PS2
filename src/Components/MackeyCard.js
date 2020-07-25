import React from "react";
import winner from "./Smash.PNG";
import faker from "faker";
import Image from "./SubComponents/Image";
import Friends from "./SubComponents/Friends";
import Description from "./SubComponents/Description";

function MackeyCard() {
    return (
      <div className="ui card">
        <Image source={winner} />
        <Description
          name={"Mackey"}
          date={"Wed Jan 1 2020"}
          description={"Super smash bros champion"}
        />
        <div className="extra content">
          <Friends num={0} />
        </div>
      </div>
    );
}

export default MackeyCard;