import React from "react"
import { useDispatch } from "react-redux"
import { decreaseData } from "../redux/addData/actions"
import { cartData, increaseData } from "../redux/manageData/actions"

export const DisplayProducts = ({ product }) => {
  const dispatech = useDispatch()
  const { id, name, category, price, img, qty, rating, featured } = product

  function addCartHandler() {
    dispatech(decreaseData(product))
    dispatech(cartData(product))
    dispatech(increaseData(product))
  }

  return (
    <div className='flex flex-row gap-5 max-w-6xl p-5 ring-1 ring-slate-500 m-3'>
      <p>{id}</p>
      <div>
        <p>{name}</p>
        <p>{category}</p>
        <p>{price}</p>
      </div>
      <img src={img} className='w-52 h-20 rounded-lg ring-1 ring-slate-400' />
      <div>
        <p>Qty: {qty}</p>
        <p>Rating: {rating}</p>
      </div>
      <p>{featured ? "featured" : "normal"}</p>
      <button
        className='ring-2 bg-slate-300 rounded-lg text-center h-8 w-20 font-extrabold'
        onClick={addCartHandler}>
        add cart
      </button>
    </div>
  )
}

export default DisplayProducts
