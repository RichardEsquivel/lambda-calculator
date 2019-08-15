import React, { useState } from 'react';

//import any components needed
import NumberButton from './NumberButton';
import "../../../App.css";
//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = (props) => {
	// STEP 2 - add the imported data to state
	const [buttonNumbers, setButtonNumbers] = useState(numbers);
	return (

		< div className="numberContainer" >
			{buttonNumbers.map(number => {
				return <NumberButton key={number} text={number} addNumber={props.addNumber} />
			})
			}
		</div >
	);
};

export default Numbers;
