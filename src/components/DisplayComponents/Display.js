import React from 'react';

//Define component, display takes data through props
const Display = (props) => {
	console.log('Display', props.number);
	return (
		<div className="display">
			{/* Display any props data here */}
			{props.number}
		</div>
	);
};

//exporting display.js component so I can import and use it in other files
export default Display;
