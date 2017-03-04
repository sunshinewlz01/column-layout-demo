import './style.css';
import React,{Component} from 'react';

class Demo01 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap-one">
          <div className="left-one">
              Left area!
          </div>
          <div className="right-one">
              Right area!
          </div>
          <div className="main-one">
              Main area!
          </div>
      </div>
    );
  }
}

export default Demo01;
