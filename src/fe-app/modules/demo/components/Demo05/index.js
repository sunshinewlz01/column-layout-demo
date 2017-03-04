import './style.css';
import React,{Component} from 'react';

class Demo05 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrap05">
          <div className="left05">
              <div className="inner-content">
                  Left area!
              </div>
          </div>
          <div className="main05">
              <div className="inner-content">
                  Main area!
              </div>
          </div>
          <div className="right05">
              <div className="inner-content">
                  Right area!
              </div>
          </div>
      </div>
    );
  }
}

export default Demo05;
