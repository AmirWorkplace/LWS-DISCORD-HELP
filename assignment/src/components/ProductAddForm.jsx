import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addData } from "../redux/addData/actions"
import { cartData } from "../redux/manageData/actions"

export const ProductAddForm = () => {
  const dispatech = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    img: "",
    qty: "",
    rating: "",
    featured: false,
  })

  function formInputHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      featured: event.target.checked,
    })
  }

  function formSubmitHandler(event) {
    event.preventDefault()
    dispatech(addData(formData))
    // dispatech(cartData(formData))
    // console.log(formData)
  }

  return (
    <div className='ring-[0.1px] ring-[#9e9e9e] rounded-md p-5 shadow-[1px_5px_20px_5px_rgba(0,0,0,0.1)]'>
      <form className='w-full max-w-lg' onSubmit={formSubmitHandler}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'>
              Product Name
            </label>

            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700
            border border-gray-500 rounded py-3 px-4 mb-3 leading-tight
            focus:outline-none focus:bg-white'
              id='grid-first-name'
              required
              placeholder='Jane'
              type='text'
              value={formData.name}
              name='name'
              onChange={formInputHandler}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-last-name'>
              Category
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              value={formData.category}
              name='category'
              onChange={formInputHandler}
              type='text'
              required
              placeholder='Doe'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'>
              Product Image
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-password'
              value={formData.img}
              name='img'
              onChange={formInputHandler}
              type='text'
              required
              placeholder='Paste Image Link Here!'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-city'>
              Price
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='price'
              value={formData.price}
              name='price'
              onChange={formInputHandler}
              type='number'
              min={1}
              required
              placeholder='Albuquerque'
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='price'>
              Quantity
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-city'
              value={formData.qty}
              name='qty'
              onChange={formInputHandler}
              type='number'
              min={1}
              required
              placeholder='Add Price'
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-zip'>
              Rating
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-zip'
              value={formData.rating}
              name='rating'
              onChange={formInputHandler}
              min={1}
              max={5}
              type='number'
              required
              placeholder='Rating'
            />
          </div>
        </div>

        <div className='flex items-center border-b border-teal-500 py-2 mt-4'>
          <div className='flex flex-row items-center justify-start gap-4 w-full h-auto'>
            <input
              className='bg-transparent border-none text-gray-700 mr-3 py-1 pl-4
              w-5 h-5 leading-tight focus:outline-none'
              name='featured'
              onChange={formInputHandler}
              checked={formData.featured}
              type='checkbox'
            />
            <label className='uppercase text-slate-500 text-[15px]'>
              Click Add Featured Items.
            </label>
          </div>
          <div className='flex flex-row w-full items-center justify-end gap-2'>
            <button
              className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded duration-500'
              type='submit'>
              ADD PRODUCT
            </button>
            <button
              className='flex-shrink-0 border-transparent border-4 text-red-300 hover:text-red-500 font-semibold uppercase duration-300 py-1 px-2 rounded'
              type='button'>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductAddForm
