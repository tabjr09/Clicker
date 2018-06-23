import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleIncrement = (event) => {
    // We always use the setState method to update a component's state
    // this.setState({ count: this.state.count + 1,
    //                 [this.state.friends.filter =]: 'true'
    // });

    if(!this.state.friends[event].clicked){
      //const friends = this.state.friends.filter(friend => friend[event].clicked = true);

      this.setState({ count: this.state.count + 1,
                      [this.state.friends[event-1].clicked]: true,
                      [this.state.friends[event-1].name]: "test"
                      
                      
        });

        
        console.log([this.state.friends[event-1].clicked]);
        console.log(this.state.friends[event-1].name);
    }
    else{
      this.setState({ count: 0,
      });
      console.log("game over")
    }

    
    console.log(this.state.friends[event].clicked);
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });

    
  };

  handleChange = (event) => {
    // console.log(event.target.name); // title or another
   
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Counter count={this.state.count}/>
        <Title>The Clicker</Title>
          {this.state.friends.map(friend => (
          <FriendCard
            //removeFriend={this.removeFriend}
            name={friend.name}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            removeFriend={this.handleIncrement}
            //onClick={this.handleIncrement}
          />
        ))}
         <button onClick={this.handleIncrement}>Change Increment</button>
      </Wrapper>
    );
  }
}

export default App;
