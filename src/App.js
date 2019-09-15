
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroCard from "./components/HeroCard";
//import Score from "./components/Score";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import characters from "./character.json"
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0
  }
  //clickCount function to count clicks, and randomize cards
  //gameOver function to reset game, and show win or loss
  gameOver = () => {
    if (this.state.score === 10) {
      alert(`You won!!! \nscore: ${this.state.score}`);
      this.state.characters.forEach(character => {
        character.count = 0;
        this.setState({ score: 0 });
        return true;
      });
    } else {
      alert(`Game Over :( \nscore: ${this.state.score}`);
      this.state.characters.forEach(character => {
        character.count = 0;
        this.setState({ score: 0 });
        return true;
      });
    };
  };

  clickCount = id => {
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        if (characters[i].count === 0) {
          characters[i].count = characters[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.characters.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      };
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Navbar>
              <p className="score">Score: {this.state.score} <strong>|</strong> 10</p>
            </Navbar>
            <br></br>
            <Header />
          </div>
        </div>
        <div className="row">
          <Wrapper>
            {this.state.characters.map(character => (
              <HeroCard
                clickCount={this.clickCount}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    )
  }
};


export default App;
