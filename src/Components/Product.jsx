import React, { useEffect, useState } from 'react'
import ProductDetailPage from './ProductDetailPage';

const Product = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {    
    getData()
  }, []);

  const getData = () => {
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
    .then((res) => res.json())
    .then((res) => {
        setData(res)
    })
    .catch((err) => console.log(err))
  }

  console.log(data)

  // search funnality
  const searchRecords = () => {
    fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json/?name=${search}`)
    .then((res) => res.json())
    .then((res) => {
        setData(res)
    })
  }  

    return (
        <div className="mainDiv">
                <div className='srarchDiv'>
                    <input type='text' 
                        placeholder='search for product' 
                        onChange={(e)=> setSearch(e.target.value)}  
                    />
                    <button className='btn' onClick={searchRecords}> search </button>
                </div>

                <div className='mapDiv'>
                    {
                        data.map((item) => {
                            return (
                                <ProductDetailPage storeData={item} key={item.id} />
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Product
