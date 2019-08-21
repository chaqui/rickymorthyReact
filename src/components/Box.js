import React from 'react';
import './css/box.css'
class Box extends React.Component{
  render()
  {
    return(
      <div className="cubo">
        <img src={this.props.element.image} alt="foto"/>
        <h1>{this.props.element.name}</h1>
      </div>
      
      
    )
  }
}
export default Box