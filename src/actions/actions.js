const addValue = num => {
  return {
    type: 'ADD_VALUE',
    payload: num,
  };
};

const addDupaText = () => {
  return {
    type: 'ADD_TEXT',
    payload: 'dupa',
  };
};

export const addValueWithThunk = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addValue(num));
    }, 3000);
  };
};

export const addTextWithThunk = num => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter === 4) {
      dispatch(addDupaText());
      dispatch(addValue(-1 * counter));
    } else {
      dispatch(addValue(num));
    }
  };
};
