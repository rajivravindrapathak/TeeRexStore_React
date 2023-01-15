import React from 'react'
import Product from './Product'

const Sidebar = () => {
    return (
        <div className="submainDiv">
            <div className='leftDiv'>
                <p>color</p>
                <div className='redCheckDiv'>
                    <input type='checkbox'  />
                    <p> Red </p>
                </div>
                <div className='blueCheckDiv'>
                    <input type='checkbox'  />
                    <p> Blue </p>
                </div>
                <div className='greenCheckDiv'>
                    <input type='checkbox'  />
                    <p> Green </p>
                </div>

                <p>Gender</p>
                <div className='redCheckDiv'>
                    <input type='checkbox'  />
                    <p> Men </p>
                </div>
                <div className='womenCheckDiv'>
                    <input type='checkbox'  />
                    <p> Women </p>
                </div>

                <p>Price</p>
                <div className='rsCheckDiv'>
                    <input type='checkbox'  />
                    <p> 0 - Rs250 </p>
                </div>
                <div className='womenCheckDiv'>
                    <input type='checkbox'  />
                    <p> Rs251-450 </p>
                </div>
                <div className='womenCheckDiv'>
                    <input type='checkbox'  />
                    <p> Rs250 </p>
                </div>

                <p>Type</p>
                <div className='rsCheckDiv'>
                    <input type='checkbox'  />
                    <p> Polo </p>
                </div>
                <div className='womenCheckDiv'>
                    <input type='checkbox'  />
                    <p> Hoodie </p>
                </div>
                <div className='womenCheckDiv'>
                    <input type='checkbox'  />
                    <p> Basic </p>
                </div>

            </div>

            <Product />

        </div>
    )
}

export default Sidebar
