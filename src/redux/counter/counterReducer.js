import { DECREMENT, INCREMENT } from "./actionTypes";

// define initial state value;
export const initialState = {
    value: 5
}


// create counter reducer
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
         return {
             ...state,
             value: state.value + 1
         }
        case DECREMENT:
          return {
              ...state,
              value: state.value - 1
          }
        default:
          return state;
      }
}


export default counterReducer;