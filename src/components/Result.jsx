import React, { Component } from "react";
class Result extends Component {
  state = {};
  render() {
    let { Profilefigure } = this.props;
    return (
      <>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={Profilefigure.img} alt='Avatar' />
            </div>
            <div className='flip-card-back'>
              <h1>{Profilefigure.name}</h1>
              <p>Actor Name:{Profilefigure.portrayed} </p>
              <p>Nickname:{Profilefigure.nickname}</p>
              <p>Birthday: {Profilefigure.birthday}</p>
              <p>Status {Profilefigure.status} </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
