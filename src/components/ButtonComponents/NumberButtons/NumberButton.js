import React from 'react';

//display takes data through props
const NumberButton = (props) => {
	return (
		<button>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			{props.text}
		</button>
	);
};

//exporting Number Button component to use elsewhere
export default NumberButton;
