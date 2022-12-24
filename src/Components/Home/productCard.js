import React from 'react'

const ProductCard = ({product}) => {
    const {name,price,img,category,rating}=product
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{category}</p>
    <p>{rating}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard