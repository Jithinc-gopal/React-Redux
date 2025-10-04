import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";


const appreducer = (prevSate={value:0},action)=>{
  switch(action.type){
    case "increment":
      return{
        ...prevSate,
        value:prevSate.value+action.payload
      }
      case "decrement":
        return{
          ...prevSate,
          value:prevSate.value-action.payload

        }
        default:
          return prevSate
      
  }

}



 export const store = createStore(appreducer, applyMiddleware(logger))