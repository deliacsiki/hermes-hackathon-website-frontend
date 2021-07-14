import React from "react";
import Card from "./UI/Card/Card";

class App extends React.Component {
  state = {
    name: "Elena",
    buttonText: "Hereeee",
    list: ["Delia", "Bianca", "Elena"],
  };

  changeName = (name) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        example: name,
        list: [...prevState.list, "Dorin"],
      };
    });

    // daca exista field-ul stie automat sa il updateze
    // this.setState({ name: name });
  };

  render() {
    return (
      <div>
        Hello + {this.state.name}
        {this.state.list.map((user) => {
          return <Card key={user} name={user}/>;
        })}
        <br />
        {/* 
          if(this.state.example)
            return this.state.example;
          else return null;
        */}
        {this.state.example ? this.state.example : null}
        <br />
        <button onClick={() => this.changeName("Delia")}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default App;
