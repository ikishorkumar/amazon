import React from 'react';
import Banner from './Banner';
import './Home.css';
import Product from './Product';
function Home() {
	return (
		<div className="_home">
			<div className="_homeContainer">
				<div className="_homeBanner">
					<img
						alt="Shop Sports and Outdoor"
						src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
						className="_heroImage"
					/>
				</div>
			</div>
			<div className="_home__row">
				<Product
					id="011"
					title="Amazon Basics Lightning to USB Cable - Advanced Collection, MFi Certified Apple iPhone Charger, Black, 6-Foot"
					price={19.29}
					rating={4}
					img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
				/>
				<Product
					id="012"
					title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
					price={29.49}
					rating={5}
					img="https://images-na.ssl-images-amazon.com/images/I/71IdKRlm8%2BL._AC_SX679_.jpg"
				/>
			</div>
			<div className="_home__row">
				<Product
					id="021"
					title="MakeUp Kit"
					price={69.19}
					rating={5}
					img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
				/>
				<Product
					id="022"
					title="14 inch Led"
					price={229}
					rating={5}
					img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
				/>
				<Product
					id="023"
					title="AmazonBasics Blue, White, and Yellow Microfiber Home Bad"
					price={59.39}
					rating={3}
					img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
				/>
			</div>
			<div className="_home__row">
				<Product
					id="031"
					title="VR Glass Kit"
					price={129.49}
					rating={4}
					img="https://m.media-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
