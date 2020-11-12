import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CurrencyFormat from 'react-currency-format';

import React, { useState } from 'react';
import './SubTotal.css';
import { useStateValue } from '../config/StateProvider';
import { getTotalCart } from '../config/reducer';
function SubTotal() {
	const [{ cart }, dispatch] = useStateValue();
	const items_cart = cart?.length;
	const [count, setCount] = useState(0);
	return (
		<div className="_subTotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ( {items_cart} items) : <strong>{value}</strong>
						</p>

						<small className="_subTotalGift">
							<Checkbox
								aria-label="primrary checkbox"
								varient="primrary"
								color="primrary"
							/>
							<label> This order contains a gift</label>
						</small>
						<Button>Procced to checkout</Button>
					</>
				)}
				decimalScale={2}
				value={getTotalCart(cart)}
				// getBasketTotal(basket)
				displayType={'text'}
				thousandSeprator={true}
				prefix={'$'}
			/>
			{/* <div className="_subTotalTitle">
				<h2>Subtotal (2 items):</h2>
				<p>
					<strong>$19.48</strong>
				</p>
				<Checkbox
					aria-label="primrary checkbox"
					varient="primrary"
					color="primrary"
				/>
				<label> This order contains a gift</label>
				<Button>Procced to checkout</Button>
			</div> */}
		</div>
	);
}

export default SubTotal;
// here we will react-curreny-format
