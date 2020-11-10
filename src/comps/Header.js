import React from 'react';
import logo from '../Images/logo.png';
import caretDown from '../Images/caret-down-solid.svg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Header.css';
function Header() {
	return (
		<div className="header">
			<img className="header_logo" src={logo} alt="logo" />
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
				<div className="_headerCartOption">
					<span className="_headerOptionLine2 _headerCartOption _cartCount">
						0
					</span>
					<ShoppingCartIcon />
				</div>
			</div>
		</div>
	);
}

export default Header;
