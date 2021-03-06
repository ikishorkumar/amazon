import React from 'react';
import './CheckOut.css';
import { Button } from '@material-ui/core';
// import LabelImportantIcon from '@material-ui/icons/LabelImportant';
// import LabelIcon from '@material-ui/icons/Label';
// import SubTotal from './SubTotal';
import { useStateValue } from '../config/StateProvider';
// import { getTotalCart } from '../config/reducer';

function CheckOutProduct({ id, title, image, rating, price, hideBtn }) {
	const [{ cart }, dispatch] = useStateValue();
	// console.log('this is the cart', cart);
	const removefromCart = () => {
		const removefromCart = 'REMOVE_FROM_CART';

		dispatch({
			type: removefromCart,
			id: id,
		});
	};
	return (
		<div className="_productCheckOut">
			<img src={image} alt={id} className="_ProductChekoutImage" />
			<div className="_productcheckoutInfo">
				<h1>{title}</h1>
				<span className="_bannerICons">
					<span className="_productAddBanner0">#1 Best Seller</span>
				</span>
				<div className="_product_Rating">
					{Array(rating)
						.fill()
						.map((__, i) => (
							<p>⭐</p>
						))}
				</div>
				{!hideBtn && <Button onClick={removefromCart}>Remove from Cart</Button>}
			</div>
			<h1 className="_productchekoutPrice">
				<strong>$</strong>
				{price}
			</h1>
		</div>
	);
}

export default CheckOutProduct;
