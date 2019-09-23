import { connect } from 'react-redux';
import { changeDirection } from './actions/changeDirection';
import { changeValue } from './actions/changeValue';
import { changeText } from './actions/changeText';
import React from 'react';


function Bars(props) {

    console.log(props)
    return (
      <div>
        <button onClick={() => props.changeDirection(1)}>UP</button>
        <button onClick={() => props.changeDirection(-1)}>DOWN</button>
        <button onClick={() =>  props.changeValue(1)}>Incresa 1</button>
        <button onClick={() => props.changeValue(-1)}>Decrease 1</button>
        <h1>{`${props.direction}`}</h1>  
        <h1>{`${props.value}`}</h1>  
        <input type="tex" placeholder="text" onChange={(e) => props.changeText(e.target.value)  } value={`${props.text}`}></input>      
      </div>
    )
  }
  
  
  
  const mapStateToProps = state => ({
    direction: state.direction,
    value: state.value,
    text: state.text
  });
  
  
  
  
  
   export default connect(mapStateToProps, {changeDirection, changeValue, changeText} )(Bars);