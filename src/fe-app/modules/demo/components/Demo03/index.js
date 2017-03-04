import './style.css';
import React,{Component} from 'react';

class Demo03 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap03">
          <div className="main03">
              <div className="main-content03">
                  Main area!
              </div>
          </div>
          <div className="left03">
              Left area!
          </div>
          <div className="right03">
              Right area!
          </div>
      </div>
    );
  }
}

export default Demo03;
