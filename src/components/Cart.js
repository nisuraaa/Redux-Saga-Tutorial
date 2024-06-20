import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartData = useSelector((state) => state.cartData)
    return (<>
        <Link to="/"> Go to Home</Link>
        <div>
            <h1>Cart Page</h1>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Color</th>
                        <th>Product Brand</th>
                        <th>Product Catergory</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.color}</td>
                            <td>{data.brand}</td>
                            <td>{data.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2>Total Price: {cartData.reduce((acc, current) => acc + current.price, 0)}</h2>
            </div>
        </div>
    </>
    )
}

export default Cart
