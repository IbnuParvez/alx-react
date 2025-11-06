import React, { useState } from 'react';

function Counter (){
	const [ count, setCount ] = useState(0);
	return (
		<div>
		<h2> Counter: {count}</h2>
		<button onClick={() => setCount(count + 1)}>Increment yo!</button>
		<button onClick={() => setCount(count - 1)}>Decrement with regret</button>
		<button onClick={() => setCount(0)}>Back to normal u boss!!!</button>
		</div>
	);
}

export default Counter;
