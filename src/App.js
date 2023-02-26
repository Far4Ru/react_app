import React, {useState} from 'react';

function App() {
	const [number, setNumber] = useState(0);
	
	function increment() {
		setNumber(number + 1)
	}
	
	function decrement() {
		setNumber(number - 1)
	}
	
	return (
		<div className="App">
			<h1>{number}</h1>
			<button onClick={increment}>Увеличить</button>
			<button onClick={decrement}>Уменьшить</button>
		</div>
	);
}

export default App;
