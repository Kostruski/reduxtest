
export default (state = {value :1}, action) => {

    switch (action.type) {
          
        case 'CHANGE_VALUE':
                 const newState = {};
                  newState.value = state + action.payload
                 return newState.value
        default:
          return state;
     }
    };