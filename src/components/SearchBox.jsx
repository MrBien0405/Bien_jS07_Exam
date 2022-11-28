import React, { Component } from "react";
import img from "../assets/logo.png";
class SearchBox extends Component {
  state = {};
  render() {
    let { handleChange, inputValue } = this.props;
    return (
      <div className='wrapper-character'>
        <div className='boximg'>
          <img src={img} alt='' />
        </div>
        <input
          value={inputValue.name}
          onChange={handleChange}
          type='text'
          name='name'
          id=''
          placeholder='Search characters'
        />
      </div>
    );
  }
}

export default SearchBox;
