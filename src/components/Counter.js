import React from 'react';

import { connect } from 'react-redux';
import { addValueWithThunk, addTextWithThunk } from '../actions/actions';

const Counter = ({ counter, addValueWithThunk, text, addTextWithThunk }) => {
  return (
    <div>
      <h1>Counter {counter}</h1>
      <h1>{text}</h1>
      <button onClick={() => addValueWithThunk(1)}>KLIK ASYCNC ADD</button>
      <button onClick={() => addTextWithThunk(1)}>KLIK conditional add</button>
    </div>
  );
};

const mapStateToProps = state => ({ counter: state.counter, text: state.text });
const actions = { addValueWithThunk, addTextWithThunk };
export default connect(
  mapStateToProps,
  actions,
)(Counter);
