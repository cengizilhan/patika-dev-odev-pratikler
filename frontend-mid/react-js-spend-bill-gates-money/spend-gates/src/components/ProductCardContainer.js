import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'


//import { decrement, increment } from '../services/redux/menuSlicer'

function ProductCardContainer() {
  const products = useSelector((state) => state.menu.products)
  //const dispatch = useDispatch()
  console.table(products)

  return (
    <section className='mt-5' >
    <div className="row g-2">
   
   {
   products.map((product, index) => ( <ProductCard props={product} key={index} ></ProductCard>))
   }
    </div>
    </section>
  )
}

export default ProductCardContainer