import React from "react";
import winner from "./Smash.PNG";
import faker from "faker";
import Friends from "./SubComponents/Friends";
import Image from "./SubComponents/Image";
import Description from "./SubComponents/Description";

function Card(props) {
  if(props.mackey){
    return (
      <div className="ui card">
        <Image source={winner} />
        <Description
          mackey={true}
          name={"Mackey"}
          date={"2020"}
          description={"Super smash bros champion"}
        />
        <div className="extra content">
          <Friends num={1} />
        </div>
      </div>
    );
  }else{
    return (
      <div className="ui card">
        <Image source={faker.image.avatar()} />
        <Description
          mackey={false}
          name={faker.name.findName()}
          date={faker.date.past().toDateString()}
          description={faker.name.jobTitle}
        />
        <div className="extra content">
          <Friends num={faker.random.number(1000)} />
        </div>
      </div>
    );
  }
}

export default Card;
