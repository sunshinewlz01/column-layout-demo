import './style.css';
import React,{Component} from 'react';

class Demo04 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap04">
          <div className="left04">
              Left area!
          </div>
          <div className="main04">
              Main area!
          </div>
          <div className="right04">
              Right area!
          </div>
      </div>
    );
  }
}

export default Demo04;
