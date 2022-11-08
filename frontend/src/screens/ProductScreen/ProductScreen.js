import './ProductScreen.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
//Actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions'

const ProductScreen = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
 

  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;

 
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  }, [dispatch, product, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history('/cart')
  }

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p className="left__name">Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status: <span>{product.count > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>

              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(product.count).keys()].map(
                    (x) => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )
                  )}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>Add To Cart</button>
              </p>
            </div>
          </div></>
      )}

    </div>
  )
}

export default ProductScreen