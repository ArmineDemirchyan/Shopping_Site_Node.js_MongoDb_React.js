import './SideDrawer.css'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const SideDrawer = ({show}) => {

  const sideDrawerClass = ['sidedrawer'];

  const cart = useSelector(state => state.cart)
  const {cartItem} = cart;

  const getCartCount = () => {
    return cartItem.reduce((qty,item) => qty + Number(item.qty), 0)
  }
  if(show){
    sideDrawerClass.push('show');
  }
  return  <div className={sideDrawerClass.join(" ")}>
    <ul className="sidedrawer__links">
    <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart 
              <span className='sidedrawer__cartbadge'>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            Shop
          </Link>
        </li>
    </ul>
  </div>
}

export default SideDrawer