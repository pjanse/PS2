import React from "react";

function Friends(props){
    return(
        <a>
            <i className="user icon"></i>
               {props.num} friends
      </a>
    );
}

export default Friends;