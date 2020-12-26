import React from 'react';
import MyApp from './components/MyApp';
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<MyApp />
		</BrowserRouter>
	);
}

export default App;
