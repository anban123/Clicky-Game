import React, { Component } from "react";
import CartoonCard from "./components/cartoonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cartoons from "./cartoons.json";

class App extends Component {
  state = {
    cartoons,
    userScore: 0
  };

  handleClickEvent = (id,) => {
    console.log("id", id)
    let userGuess = false;
    let cartoonArray = this.state.cartoons.map(cartoon => {

      //checking if the id of the clicked cartoon is equal to the current cartoon of the loop (cartoon[i])
      if (cartoon.id === id && cartoon.click === false) {
        cartoon.click = true;
        userGuess = true;
      } 
      return cartoon;
    })
    this.shuffleCards(cartoonArray);
    this.handleGuess(userGuess);
  }

  handleGuess = (userGuess) => {
    if (userGuess === true) {
      this.setState({ userScore: this.state.userScore + 1 })
      if (this.state.userScore > 11) {
        alert("You Win!!!!!!!")
        this.state.cartoons.map((cartoon) => {
          cartoon.click = false;
          return cartoon;
        })
      }
    } else {
      this.setState({ userScore: 0 })
      alert("You lose")
      this.state.cartoons.map((cartoon) => {
        cartoon.click = false;
        return cartoon;
      })
    }
  }

  shuffleCards = array => {
    const shuffledDeck = array.sort(function(a, b){ return 0.5 - Math.random()})
    this.setState({
      cartoons: shuffledDeck
    })
  }

  render() {
    return ( 
      <>
      <Title score={this.state.userScore}>Clicky Game!</Title>
      <Wrapper>
        {this.state.cartoons.map(cartoon => (
          <CartoonCard
            id={cartoon.id}
            key={cartoon.id}
            image={cartoon.image}
            handleClick={() => this.handleClickEvent(cartoon.id)}
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;
