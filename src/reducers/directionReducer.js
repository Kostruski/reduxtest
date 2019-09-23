


export default (state={direction: 1}, action) => {

switch (action.type) {
      
    case 'CHANGE_DIRECTION':
       const newState = {}
       newState.direction = action.payload;
       return newState.direction
    default:
      return state;
 }
};


