import React from 'react';
import DehazeSharpIcon from '@material-ui/icons/DehazeSharp';
import './Header.css';
import { Button } from '@material-ui/core';
function SubHeader() {
	return (
		<div className="subHeader">
			<div className="_headerOptionsNav">
				<div className="_subheaderCollapse">
					<DehazeSharpIcon className="_subHeader" />
					<span>All</span>
				</div>
				<div className="_subHeaderOptions">
					<Button class="_subHeaderlink" href="#text-buttons">
						Today's Deals
					</Button>

					<Button class="_subHeaderlink" href="#text-buttons">
						Customer Service
					</Button>

					<Button class="_subHeaderlink" href="#text-buttons">
						Gift Card
					</Button>

					<Button class="_subHeaderlink" href="#text-buttons">
						Sell
					</Button>
					<Button class="_subHeaderlink" href="#text-buttons">
						Registry
					</Button>
				</div>
			</div>
		</div>
	);
}

export default SubHeader;
