import{
  INCREMENT,
  DECREMENT,
}from '../actions';

const initialize = { value : 0 };
export default (count = initialize, action) => {
  switch(action.type){
    case INCREMENT:
    return{value:count.value + 1};
    case DECREMENT:
    return {value:count.value -1};
    default:
    return count;
  }
}
