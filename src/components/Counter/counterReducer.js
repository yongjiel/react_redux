import { DECREMENT, INCREMENT, RESET } from './actions';

const initialStateCount = {
  count: 0
};
// see how to hookup actions.js.
export default function reducer(state = initialStateCount, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
  return state;
}