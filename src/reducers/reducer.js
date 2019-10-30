const initialState = { counter: 0 };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};
