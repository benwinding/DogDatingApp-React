import React, {Component} from 'react';
import Draggable from 'react-draggable';

import './SwiperView.css';

class Doggy extends Component {
  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        id="container"
      >
        <div className="handle"
          style={{
            height:this.props.height,
            width:this.props.width,
          }}
        >
          <div id="infoi" >
            <h2>{this.props.text}</h2>
            <div
              style={{
                width:"100%",
                height:"100%",
                "backgroundImage": "url("+this.props.img+")",
                "backgroundRepeat": "no-repeat"
              }}
            />
          </div>
        </div>
      </Draggable>
    )
  }
}

class SwiperView extends Component {
  render() {
    return (
      <div>
        <Doggy text="Rex"
           img="./profiles/dogm1.jpg"
           height={"500px"}
           width={"400px"}
        />
      </div>
    );
  }
}

SwiperView.propTypes = {};
SwiperView.defaultProps = {};

export default SwiperView;
