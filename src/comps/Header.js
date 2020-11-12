import React from 'react';
import logo from '../Images/logo.png';
import caretDown from '../Images/caret-down-solid.svg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../config/StateProvider';
function Header() {
	const [{ cart }, dispatch] = useStateValue();
	const items_cart = cart?.length;

	return (
		<div className="header">
			<Link to="/" className="header_logo">
				<img className="header_logo" src={logo} alt="logo" />
			</Link>
			<div className="locationLogo">
				<LocationOnIcon className="locationping" />
				<span className="deliveryCountry">
					<p>Delivery to</p>
					<h1>Pakistan</h1>
				</span>
			</div>

			<div className="_headerSearch">
				<button className="_headerDropDownButton">
					All
					<img src={caretDown} alt="dropdwon" />
				</button>
				<input className="_headerSearchInput" type="text" />

				<SearchIcon className="_headerSearchInputBtn" />
			</div>

			<div className="_headerOptionsNav">
				<div className="_headerOptions">
					<span className="_headerOptionLine1"> Flag</span>
					<span className="_headerOptionLine2"> PAK</span>
				</div>
				<div className="_headerOptions">
					<span className="_headerOptionLine1">Hello, Sign In</span>
					<span className="_headerOptionLine2">Accounts & Lists</span>
				</div>
				<div className="_headerOptions">
					<span className="_headerOptionLine1">Returns</span>
					<span className="_headerOptionLine2">& Orders</span>
				</div>

				<div className="_headerOptions">
					<span className="_headerOptionLine1">Your</span>
					<span className="_headerOptionLine2">Prime</span>
				</div>
				<Link to="/CheckOut">
					<div className="_headerCartOption">
						<span className="_headerOptionLine2 _headerCartOption _cartCount">
							{items_cart}
						</span>
						<ShoppingCartIcon />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
