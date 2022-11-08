import * as actionTypes from "../constants/cartConstants";
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    console.log(data)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name:data.name,
            imageUrl:data.imageUrl,
            price:data.price,
            count:data.count,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItem));
}

export const removeFromCart = (id) => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItem));
}