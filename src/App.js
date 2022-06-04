import {Greet} from './components/Greet';
import './App.css';


function App() {
	return (
		<div className="App">
			<Greet name="Bruce" heroName="Batman"/>
			<Greet name="Clark" heroName="Superman"/>
			<Greet name="Diana" heroName="Wonder Woman"/>
			
		</div>
	);
}

export default App;
