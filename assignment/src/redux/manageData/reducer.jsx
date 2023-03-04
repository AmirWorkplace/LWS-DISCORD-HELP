import {
  CART_DATA,
  DECREMENT_DATA,
  INCREASE_DATA,
  INCREMENT_DATA,
} from "./actionTypes"
import initialState from "./initialState"

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA:
      const findProductExsistingIndex = state.findIndex(
        (product) => product.id === action.payload.id
      )

      if (findProductExsistingIndex !== -1) {
        state.map((product, index) => {
          if (index === findProductExsistingIndex) {
            return { ...product, qty: product.qty - 1 }
          } else return product
        })
      } else
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            category: action.payload.category,
            img: action.payload.img,
            qty: action.payload.qty,
            cartQty: 1,
            price: action.payload.price,
            rating: action.payload.rating,
            featured: action.payload.featured,
          },
        ]

    case INCREASE_DATA:
      // console.log("Add Cart :", action)
      return state.map((product) => {
        if (product.id === action.payload.id) {
          console.log("Cart Quantity:\t" + product.cartQty)
          return { ...product, cartQty: product.cartQty + 1 }
        } else return product
      })

    case INCREMENT_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, cartQty: product.cartQty + 1 }
        } else return product
      })

    case DECREMENT_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, cartQty: product.cartQty - 1 }
        } else return product
      })

    default:
      return state
  }
}

export default reducer
