import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Paper } from '@material-ui/core';

function Banner(props) {
	var items = [
		{
			name: 'Random Name #1',
			description: 'Probably the most random thing you have ever seen!',
		},
		{
			name: 'Random Name #2',
			description: 'Hello World!',
		},
	];

	return (
		<Carousel>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}
function Item(props) {
	return (
		<Paper>
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>

			<Button className="CheckButton">Check it out!</Button>
		</Paper>
	);
}

export default Banner;

//
// {
//     src:
//         'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg',
//     alt: 'Amazone Banner',
// },
// {
//     src:
//         'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg',
//     alt: 'Amzone Prime',
// },
// {
//     src:
//         'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
//     alt: 'Shop Computers and Accessories',
// },
