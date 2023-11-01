
const ProductCard = ( { title, price, discount, description } ) =>
{
  return (
    <div className='bg-green-400 flex items-center p-1'>
      <div className='flex-1 text-center'>
        <p className='py-2'>{title}</p>
        <p className='py-2'>{price}</p>
        <p className='py-2'>{discount}</p>
        <p className='py-2'>{description}</p>
      </div>
    </div>
  )
}

export default ProductCard