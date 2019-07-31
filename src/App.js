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

  handleClickEvent = (id) => {
    console.log("id", id)
    let click = false;
    let cartoonArray = this.state.cartoons.map(cartoon => {

      if (cartoon.id !== id) {
        click = true;
        this.shuffleCards(this.state.cartoons);
        this.setState({ userScore: this.state.userScore + 1 })
      } else   
        click = true;
        this.setState({ userScore: 0, });
        this.state.click = false;
    })
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
