import React, { useState, useEffect } from "react";
import "./App.css";
import { FaHandPaper } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";

function App() {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [winner, setWinner] = useState("");

  function handleUserInput(userChoice) {
    setUserChoice(userChoice);
    handleComputerInput();
  }

  function handleComputerInput() {
    setComputerChoice(Math.floor(Math.random() * 3));
  }
   
  useEffect(()=>
    {
      function compareInputs() {
        if (
          (userChoice === 0 && computerChoice === 1) ||
          (userChoice === 1 && computerChoice === 2) ||
          (userChoice === 2 && computerChoice === 0)
        ) {
          setWinner("User Won");
        }
        else if(
          userChoice === computerChoice
        ){
          setWinner("Draw");
        }
        else {
          setWinner("Computer Won");
        }
      }
      compareInputs();
    }
  , [computerChoice , userChoice]);

  return (
    <div className="bdy">
      <div className="container">
        <div className="playerbox">
          <h4 className="player">PLAYER</h4>
          <div className="icon">
          {userChoice === 0 ? <FaHandPaper size={70} /> : (userChoice === 1 ? <FaFistRaised size={70} /> : (userChoice === 2 ? <FaHandPeace size={70} />: ""))}
          </div>
        </div>
        <div className="playerbox">
          <h4 className="player">COMPUTER</h4>
          <div className="icon">
          {computerChoice === 0 ? <FaHandPaper size={70} /> : (computerChoice === 1 ? <FaFistRaised size={70} /> : (computerChoice === 2 ? <FaHandPeace size={70} />: ""))}
        </div>
        </div>
      </div>
     
     <div className="buttnbox">
      <button onClick={() => handleUserInput(0)} className="butn">
        <FaHandPaper size={20} />
      </button>
      <button onClick={() => handleUserInput(1)}  className="butn">
        <FaFistRaised size={20}/>
      </button>
      <button onClick={() => handleUserInput(2)}  className="butn">
        <FaHandPeace size={20}/>
      </button>
    </div>
   <p className="Result">{userChoice !== undefined && winner}</p>
    </div>
  );
}

export default App;
