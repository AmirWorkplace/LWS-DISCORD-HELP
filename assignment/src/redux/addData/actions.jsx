import {
  ADD_DATA,
  DECREASE_DATA,
  DELETE_DATA,
  EDIT_DATA,
  FILTER_DATA,
  INCREASE_DATA,
  DECREMENT_DATA,
} from "./actionTypes"

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  }
}
export const editData = (data) => {
  return {
    type: EDIT_DATA,
    payload: data,
  }
}
export const filterData = (data) => {
  return {
    type: FILTER_DATA,
    payload: data,
  }
}
export const deleteData = (data) => {
  return {
    type: DELETE_DATA,
    payload: data,
  }
}
export const increaseData = (data) => {
  return {
    type: INCREASE_DATA,
    payload: data,
  }
}
export const decreaseData = (data) => {
  return {
    type: DECREASE_DATA,
    payload: data,
  }
}
export const decrementData = (data) => {
  return {
    type: DECREASE_DATA,
    payload: data,
  }
}
export const decreaseQtyData = (data) => {
  return {
    type: DECREASE_DATA,
    payload: data,
  }
}
