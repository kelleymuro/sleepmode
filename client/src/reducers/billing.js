import { USER_PAID } from '../actions/types';

const initialState = {
   charged: null,
   transaction: {}
}

export default function(state = initialState, action) {
   const { type, payload } = action;
   
   switch(type) {
      case USER_PAID:
         return {
            ...state,
            charged: true,
            transaction: payload
         };
      default:
         return state;
   }
}