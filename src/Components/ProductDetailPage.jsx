import React from 'react'

const ProductDetailPage = ({storeData}) => {
    return (
            <div className='submapDiv'>
                <div>{storeData.name}</div>
                <div><img src={storeData.imageURL}/></div>
                <div className='priceDiv'>
                    <span>Rs: {storeData.price}</span>
                    <button className='addtocartbtn'>add to cart</button>
                </div>
            </div>
    )
}

export default ProductDetailPage
