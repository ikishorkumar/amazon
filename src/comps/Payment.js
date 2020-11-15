import React, { useEffect, useState } from 'react';
import { useStateValue } from '../config/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import './Payment.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getTotalCart } from '../config/reducer';
import axios from '../config/axios';
function Payment() {
	const [{ cart, user }, dispatch] = useStateValue();

	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// genreate the special stripe secret which allowas us to charge
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				// Stripe axcepts the total in currencies sub units (currency sub units)
				url: `/payments/create?total=${getTotalCart(cart) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [cart]);

	console.log('the secret is >', clientSecret);

	const handleSubmit = async (event) => {
		// stripe submition
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentInent = payemnt confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				history.replace('/orders'); // history is not used becuse we don''t want to come back to process page
			});
	};
	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};

	return (
		<div className="_Payment">
			<div className="_Payment_Container">
				<h1 className="link1">
					CheckOut (<Link to="/CheckOut">{cart?.length} items</Link>)
				</h1>
				<div className="_Payemnt_Section">
					<div className="Payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="_Payemnt_Address">
						<p>{user?.email}</p>
						<p>C-29/1</p>
						<p>KArachi , Pakistan</p>
					</div>
				</div>
				<div className="_Payemnt_Section">
					<div className="Payment_title">
						<h3>Review Items and Delivery</h3>
					</div>
					<div className="_Payment_Items">
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
					</div>
				</div>
				<div className="_Payemnt_Section">
					<div className="Payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="_Payment_Details">
						{/* stripe form */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="_payment_PriceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total : {value}</h3>}
									decimalScale={2}
									value={getTotalCart(cart)}
									displayType={'text'}
									thousandSeprator={true}
									prefix={'$'}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : 'Buy Now'} </span>
								</button>
							</div>
							{/* Error  */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
