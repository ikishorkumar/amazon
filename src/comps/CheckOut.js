import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './CheckOut.css';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import LabelIcon from '@material-ui/icons/Label';
import SubTotal from './SubTotal';
import { useStateValue } from '../config/StateProvider';
import { getTotalCart } from '../config/reducer';
import CheckOutProduct from './CheckOutProduct';

function CheckOut() {
	const [{ cart, user }, dispatch] = useStateValue();
	const items_cart = cart?.length;
	const [count, setCount] = useState(0);

	return (
		<div className="_checkOut">
			<div className="_CheckOutLeft">
				<img
					className="_AddBanner"
					src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/ASV/holi_d_slideshow_GCLP_EN_v2_1024x180_20201021.jpg"
					alt="Add banner"
				/>
				<div className="_ShoppingCart">
					<div className="_ShoppingCartTitle">
						<h1>Shopping Cart : {user?.email}</h1>
						<p>Price</p>
					</div>

					{cart.map((item) => {
						return (
							<CheckOutProduct
								id={item.id}
								title={item.title}
								image={item.img}
								rating={item.rating}
								price={item.price}
							/>
						);
					})}

					<div className="_priceSubTotal">
						<h4>Subtotal ({items_cart} items):</h4>
						<p>
							<strong>$ {getTotalCart(cart)}</strong>
						</p>
					</div>
				</div>
				<div className="_Addhere"></div>
				<div className="_checkouttext">
					The price and availability of items at Amazon.com are subject to
					change. The Cart is a temporary place to store a list of your items
					and reflects each item's most recent price. Shopping CartLearn more Do
					you have a gift card or promotional code? We'll ask you to enter your
					claim code when it's time to pay.
				</div>
			</div>
			<div className="_CheckOutRight">
				<SubTotal />
			</div>
		</div>
	);
}

export default CheckOut;
