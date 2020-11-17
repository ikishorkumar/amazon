import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from 'react-currency-format';
function Order({ order }) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:ma')} </p>
			<p className="order_id">
				<small>{order.id} </small>
			</p>
			{order.data.cart?.map((item) => (
				<CheckOutProduct
					id={item.id}
					title={item.title}
					image={item.img}
					rating={item.rating}
					price={item.price}
					hideBtn={true}
				/>
			))}

			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order_total">Order Total : {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={'text'}
				thousandSeprator={true}
				prefix={'$'}
			/>
		</div>
	);
}

export default Order;
