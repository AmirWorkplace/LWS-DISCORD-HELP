import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { decreaseData, decreaseQtyData } from "../redux/addData/actions"
import { decrementData, incrementData } from "../redux/manageData/actions"

export const CartProducts = ({ product }) => {
  const dispatech = useDispatch()
  const { id, name, category, price, img, qty, rating, cartQty } = product

  function incrementProductHandler() {
    dispatech(incrementData(product))
    dispatech(decreaseData(product))
  }
  function decrementProductHandler() {
    dispatech(decrementData(product))
    dispatech(decreaseQtyData(product))
  }

  // useEffect(() => console.log(cartQty), [product])

  return (
    <div className='w-full m-3 p-3 ring-1 ring-slate-400 h-auto flex flex-row items-center justify-between'>
      <div>
        <p>{name}</p>
        <p>{category}</p>
        <p>{price}</p>
      </div>
      <div>
        <img src={img} className='w-52 h-16 ring-1 ring-slate-400 rounded-xl' />
      </div>
      <div className='flex gap-2'>
        <button
          className='text-xl font-extrabold h-7 w-7 flex items-center justify-center text-center bg-slate-300 rounded-full tracking-[-0.1rem]'
          onClick={decrementProductHandler}>
          ---
        </button>
        <b>{cartQty}</b>
        <button
          className='text-xl font-extrabold h-7 w-7 flex items-center justify-center text-center bg-slate-300 rounded-full'
          onClick={incrementProductHandler}>
          +
        </button>
      </div>
      <div className='flex gap-2 ml-3'>
        <p>Total:</p>
        <p>{parseInt(price) + cartQty}</p>
      </div>
    </div>
  )
}

export default CartProducts
