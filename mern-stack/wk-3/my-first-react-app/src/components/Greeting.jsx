import React from 'react';

function Greeting(props) {
	return(
	<div>
		<h1>Hello, {props.name} </h1>
		<p>Welcome to our react deep-dive session</p>
	</div>
	);
}

export default Greeting;
