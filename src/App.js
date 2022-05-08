import Theme from './Styles/Theme';
import Stats from './Components/Stats/Stats';
import Backstory from './Components/Backstory/Backstory';
import Equipment from './Components/Equipment/Equipment';
import Map from './Components/Map/Map';

function App() {
	return (
		<Theme>
			<Stats/>
			<Backstory/>
			<Equipment/>
			<Map/>
		</Theme>
	);
}

export default App;
