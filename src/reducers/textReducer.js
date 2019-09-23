export default (state={text: ""}, action) => {

    switch (action.type) {
          
        case 'CHANGE_TEXT':
           const newState = {}
           newState.text = action.payload;
           return newState.text
        default:
          return state;
     }
    };