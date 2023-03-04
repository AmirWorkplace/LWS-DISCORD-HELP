import {
  ADD_DATA,
  DECREASE_DATA,
  DELETE_DATA,
  EDIT_DATA,
  FILTER_DATA,
  INCREASE_DATA,
  DECREMENT_DATA,
} from "./actionTypes"
import initialState from "./initialState"

const getId = (states) => {
  const maxId = states.reduce((maxid, state) => Math.max(state.id, maxid), -1)
  return states.length < 1 ? 1 : maxId + 1
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      // console.log(action)
      return [
        ...state,
        {
          id: getId(state),
          name: action.payload.name,
          category: action.payload.category,
          price: action.payload.price,
          img: action.payload.img,
          qty: action.payload.qty,
          rating: action.payload.rating,
          featured: action.payload.featured,
        },
      ]

    case EDIT_DATA:
      return state

    case FILTER_DATA:
      return state

    case DECREASE_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, qty: product.qty - 1 }
        } else return product
      })

    case INCREASE_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, qty: product.qty + 1 }
        } else return product
      })

    case DECREMENT_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, qty: product.qty - 1 }
        } else return product
      })

    case DELETE_DATA:
      return state

    default:
      return state
  }
}

export default reducer
