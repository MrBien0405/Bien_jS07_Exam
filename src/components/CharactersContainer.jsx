import React, { Component } from "react";
import Result from "./Result";
import SearchBox from "./SearchBox";
class CharactersContainer extends Component {
  state = {};
  render() {
    let { Profilefigure, handleChange, inputValue } = this.props;
    return (<div>
          <SearchBox
            handleChange={handleChange}
            inputValue={inputValue}
            Profilefigure={Profilefigure}
          />
          <div className="result"> 
          {Profilefigure.map((e, i) => (
            <Result key={i} Profilefigure={e} />
          ))}
          </div>
  </div>
    );
  }
}

export default CharactersContainer;
