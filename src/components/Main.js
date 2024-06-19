import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    dispatch(productList());
  }, []);

  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  return (
    <div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img src={item.photo} alt="" />
            <div>Name: {item.name} </div>
            <div>Color: {item.color} </div>
            <div>Price: {item.price} </div>
            <div>Brand: {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove from Cart
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
