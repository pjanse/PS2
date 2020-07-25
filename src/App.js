import React, { Component } from "react";
import Card from "./Components/Card";
import MackeyCard from "./Components/MackeyCard";
import "./App.css";


class App extends Component { 
  state = {
    cards: [<Card/>,<Card/>,<Card/>],
    mackeyCards: [<MackeyCard/>,<MackeyCard/>,<MackeyCard/>],
    mackey: false,
  };

  mackeyClick = () =>{
    if(this.state.mackey===false){
      this.setState((prevState)=>({
        mackey: true,
        cards: [...prevState.cards]
      }));
    }else{
      this.setState((prevState)=>({
        mackey: false,
        cards: [...prevState.cards]
    }));
    }
  }

  hideCards = () =>{
    var x = document.getElementById("users");
    if (x.style.display === "none"){
      x.style.display = "inline";
    }else{
      x.style.display = "none";
    }
  };

  loadCards = () =>{
    if(this.state.mackey===false){
      return(
        <div>
          {this.state.cards.map((card,index) => {
            return(
              <div key ={index}>
                {card}
              </div>
            );
          })}
        </div>
      );
    }else{
      return(
        <div>
          {this.state.mackeyCards.map((mackeyCard,index) => {
            return(
              <div key ={index}>
                {mackeyCard}
              </div>
            );
          })}
        </div>
        );
    }  
  }
  
  render(){
    return (
      <div className="userApp" id = "user">
        <span id = "users">
          {this.loadCards()}
         </span>
        <button onClick={() => this.mackeyClick()}>Mackey</button>       
        <button onClick={() => this.hideCards()}>Display</button>
      </div>
    );
  }
}

export default App;
