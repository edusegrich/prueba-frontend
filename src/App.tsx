import React from 'react';
import foto from './foto.jpg';
import './App.css';
import TextInput from './components/TextInput';
import Avatar from './components/Avatar/Avatar';
import Main from './pages/Main';

function App() {
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		{/* <img src={foto} className="App-logo" alt="logo" /> */}
		// 		<TextInput placeholder='Buscar o ir a...' onChange={() => ''} />
		// 		<Avatar src={foto} />
		// 	</header>
		// 	<main>
		// 	</main>
		// </div>
		<Main/>
	);
}

export default App;
