import React from "react";



  // handleIncrement increases this.state.count by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };


 
const Counter = props => (

<div className="navbar text-center">
        <div className=" bg-primary text-white">
          <h3 className="navbar"> Click Counter!</h3>
        </div>
        
          <p className="card-text">Clicky Count: {props.count}</p>
          {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "} */}
        
      </div>

);
      


export default Counter;
