import {
  CART_DATA,
  DECREMENT_DATA,
  INCREASE_DATA,
  INCREMENT_DATA,
} from "./actionTypes"

export const cartData = (data) => {
  return {
    type: CART_DATA,
    payload: data,
  }
}
export const increaseData = (data) => {
  return {
    type: INCREASE_DATA,
    payload: data,
  }
}
export const incrementData = (data) => {
  return {
    type: INCREMENT_DATA,
    payload: data,
  }
}

export const decrementData = (data) => {
  return {
    type: DECREMENT_DATA,
    payload: data,
  }
}
