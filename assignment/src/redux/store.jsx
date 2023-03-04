import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./rootReducer"

export const store = createStore(rootReducer, composeWithDevTools())
/* 


 touch ./redux/manageData/actions.jsx
 touch ./redux/manageData/actionTypes.jsx
 touch ./redux/manageData/reducer.jsx
 touch ./redux/manageData/initialState.jsx




*/
