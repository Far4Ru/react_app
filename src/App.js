import React from 'react';

function App() {
	let number = 0;
	return (
		<div className="App">
			<h1>{number}</h1>
			<button onclick={() => number += 1}>Увеличить</button>
			<button onclick={() => number -= 1}>Уменьшить</button>
		</div>
	);
}

export default App;
