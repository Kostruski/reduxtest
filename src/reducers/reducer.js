const initialState = { counter: 0, text: null };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return { ...state, counter: state.counter + action.payload };
    case 'ADD_TEXT':
      return { ...state, text: action.payload };

    default:
      return state;
  }
};
