import React from 'react';
import "../../../App.css";

//display takes data through props
const NumberButton = (props) => {
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="button buttonBlue">{props.text}
			</button>
		</>
	)
};

//exporting Number Button component to use elsewhere
export default NumberButton;
