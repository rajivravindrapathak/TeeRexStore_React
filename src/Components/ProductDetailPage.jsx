import React from 'react'

const ProductDetailPage = ({storeData, products, onAddToCart}) => {

    const handleAddToCart = () => {
            onAddToCart(storeData.id, 1);
    }

    return (
        <div className='submapDiv' id="products">
            <div>{storeData.name}</div>
            <div><img src={storeData.imageURL}/></div>
            <div className='priceDiv'>
                <span>Rs: {storeData.price}</span>
                <button 
                    className='addtocartbtn'
                    onClick={handleAddToCart}
                >add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetailPage
