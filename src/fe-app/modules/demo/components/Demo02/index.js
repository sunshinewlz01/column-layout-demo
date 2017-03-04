import './style.css';
import React,{Component} from 'react';

class Demo02 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-two">
          <div className="left-two">
              Left area!
          </div>
          <div className="main-two">
              Main area!
          </div>
          <div className="right-two">
              Right area!
          </div>
      </div>
    );
  }
}

export default Demo02;
