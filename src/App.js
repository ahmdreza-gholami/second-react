import React, {Component} from "react";
import Hi from "./Hi"
// you can change Hi name to anything like (Hig) because we export 
// default that it means 1 thing return.(if change here change in div)
import Car from "./Car";


class App extends Component {
  num = 10;
  render() {
    return (
      <>
        {/* ---------------------- reusable component & functional ----------------------- */}

        {/* <> this can run html without extra div and correctly */}
        <div className='main'>
          {/* don't use class instead of use className */}
          <h1>ahmadreza</h1>
          <Hi />
          {/* <Hi></Hi> we can write this way if we want write between there*/}
          <p>hi traver</p>
          {/* we can't use two brother in return. we should use one parent. */}
          <Hi />
          {/* we can use it many times*/}
        </div>


        {/* ----------------------- dynamic Content ---------------------- */}

        <p>math = {Math.random() * this.num}</p>
        {/* we can use js code in here with {} */}
        {/* don't forget to put (this) */}


        {/* ----------------------- props in class ---------------------- */}

        <div>
          <h1>
            my cars :
          </h1>
          <Car brand="BMW" color="RED"/>
          <Car brand="FERRARI" color="WHITE"/>
          <Car brand="BUGATTI" color="BLUE">Super car</Car>
        </div>


      </>
    
  );
};
};

export default App;
