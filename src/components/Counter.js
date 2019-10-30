import React from 'react';

import { connect } from 'react-redux';
import { addValue } from '../actions/actions';

const Counter = ({ counter, addValue }) => {
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => addValue(1)}>KLIK</button>
    </div>
  );
};

const mapStateToProps = state => ({ counter: state.counter });
const actions = {addValue};
export default connect(
  mapStateToProps,
  actions,
)(Counter);
