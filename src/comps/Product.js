import { Button } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../config/StateProvider';
import './Product.css';
function Product({ id, title, price, rating, img }) {
	const [{ cart }, dispatch] = useStateValue();
	// console.log('this is the cart', cart);
	const addToCart = () => {
		const addToCart = 'ADD_TO_CART';
		// const removefromCart = 'REMOVE_FROM_CART';

		// disptach the item into reducer data layer
		dispatch({
			type: addToCart,
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				img: img,
			},
		});
	};
	return (
		<div className="_product">
			<div className="_product_Info">
				<p>{title}</p>
				<p>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="_product_Rating">
					{Array(rating)
						.fill()
						.map((__, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={img} alt="" className="_product_image" />
			<div className="_product_AddtoCart">
				<Button onClick={addToCart}>Add to Cart</Button>
			</div>
		</div>
	);
}

export default Product;
