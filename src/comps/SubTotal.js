import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CurrencyFormat from 'react-currency-format';

import React, { useState } from 'react';
import './SubTotal.css';
import { useStateValue } from '../config/StateProvider';
import { getTotalCart } from '../config/reducer';
import { useHistory } from 'react-router-dom';
function SubTotal() {
	const history = useHistory();
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
							<Checkbox aria-label="checkbox" color="primrary" />
							<label> This order contains a gift</label>
						</small>
						<Button onClick={(e) => history.push('/Payment')}>
							Procced to checkout
						</Button>
					</>
				)}
				decimalScale={2}
				value={getTotalCart(cart)}
				// getBasketTotal(basket)
				displayType={'text'}
				thousandSeprator={true}
				prefix={'$'}
			/>
		</div>
	);
}

export default SubTotal;
// here we will react-curreny-format
