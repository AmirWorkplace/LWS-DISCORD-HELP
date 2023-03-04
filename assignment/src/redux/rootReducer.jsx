import { combineReducers } from "redux"
import addDataReducer from "./addData/reducer"
import manageDataReducer from "./manageData/reducer"

export const rootReducer = combineReducers({
  productsData: addDataReducer,
  manageData: manageDataReducer,
})

export default rootReducer
