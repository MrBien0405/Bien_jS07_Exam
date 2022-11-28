import React, { Component } from "react";
import "./App.css";
import CharactersContainer from "./components/CharactersContainer";
class App extends Component {
  state = {
    Profilefigure: [],
    inputValue: "",
  };

  handleChange = (e) => {
    
  };
  componentDidMount = (e) => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          Profilefigure: data,
        });
      })
      .catch((err)=>{
        console.log(err);
      })
  };

  render() {
    return (
      <div className="container">
        <CharactersContainer
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          Profilefigure={this.state.Profilefigure}
        />
      </div>
    );
  }
}

export default App;
