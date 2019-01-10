import React, {Component} from 'react';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.getPageId = props.getPageId;
    this.incrementPageId = props.incrementPageId;
    this.decrementPageId = props.decrementPageId;
  }

  render() {
    return (
        <div className="Controls">
          {this.getPageId() !== 1 && <button type='button' className='prev' onClick={()=> this.decrementPageId()} >prev</button>}
          {this.getPageId() !== 5 && <button type='button' className='next' onClick={()=> this.incrementPageId()} >next</button>}
        </div>
    );
  }

}

export default Controls;
