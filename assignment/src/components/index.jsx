import React from "react"
import ProductAddForm from "./ProductAddForm"
import DisplayProducts from "./DisplayProducts"
import CartProducts from "./CartProducts"
import { useSelector } from "react-redux"

export const Index = () => {
  const productsData = useSelector((state) => state.productsData)
  const manageData = useSelector((state) => state.manageData)
  // console.log("Products Data :", productsData)
  // console.log("Carts Data :", manageData)
  // console.log(productsData.qty)
  return (
    <div className='w-full h-auto min-h-screen flex flex-row items-center justify-center gap-5 text-[17px] leading-5 font-normal text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900'>
      <div className='w-full h-auto flex flex-col items-center justify-center gap-5'>
        <div>
          <ProductAddForm />
        </div>

        <div className='ring-1 rounded-md p-3 w-auto'>
          <h1 className='font-bold my-5 w-full flex items-center justify-center text-3xl '>
            <span className='ring-4 rounded-md p-3'> Product Items</span>
          </h1>
          {productsData.map((product) => (
            <DisplayProducts key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className='w-full ring-1 rounded-md p-3 h-auto flex flex-col items-center justify-center'>
        <h1 className='font-bold my-5 w-auto text-3xl ring-4 rounded-md p-3'>
          Cart Items
        </h1>
        <div>
          {manageData.map((product) => (
            <CartProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
