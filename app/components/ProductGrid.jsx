import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () =>
{
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-slate-400 py-2 md:gap-2">

      <div className='w-full mx-auto p-1'>
        <ProductCard title="title a" price="123£" discount="-10%" description="Product 1 description" />
      </div> {/* 1st col - product 1 */}

      <div className='w-full mx-auto p-1'>
        <ProductCard title="title b" price="257£" discount="-15%" description="Product 2 description" />
      </div> {/* 2nd col - product 2 */}

      <div className='w-full mx-auto p-1'>
        <ProductCard title="title c" price="573£" discount="-30%" description="Product 3 description" />
      </div> {/* 3rd col - product 3 */}

      <div className='w-full mx-auto p-1'>
        <ProductCard title="title d" price="1183£" discount="-50%" description="Product 4 description" />
      </div> {/* 4th col - product 4 */}

    </div>
  )
}

export default ProductGrid