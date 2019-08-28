import axios from 'axios';
import { setAlert } from './alert';
import { USER_PAID, REGISTER_FAIL } from './types';

export const handleToken = ( token ) => async dispatch => {

   try {
      const res = await axios.post('/api/stripe', token);

   dispatch({
      type: USER_PAID,
      payload: res.data
   }); 

   console.log(res.data);
   } catch (err) {
      const errors = err.response.data.errors;

      if(errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
         type: REGISTER_FAIL
      });
   }
  
  
};
