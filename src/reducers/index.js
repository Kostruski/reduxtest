import { combineReducers } from "redux";
import  direction  from './directionReducer' ;
import value from './valueReducer';
import text from './textReducer';



export default combineReducers({
    direction,
    value,
    text 
   });