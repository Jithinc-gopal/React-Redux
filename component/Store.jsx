import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const appReducer = (prevState={value:0},action)=>{
  switch(action.type){
    case 'INCREMENT':
      return{
      ...prevState,
      value:prevState.value+1

    }
     case 'DECREMENT':
      return{
      ...prevState,
      value:prevState.value-1

    }
    default:
      return prevState

  }

}

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export const store = createStore(appReducer,devTools,applyMiddleware(logger))
store.getState()

