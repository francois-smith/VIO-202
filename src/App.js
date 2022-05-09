import Theme from './Styles/Theme';
import Stats from './Components/Stats/Stats';
import Backstory from './Components/Backstory/Backstory';
import Equipment from './Components/Equipment/Equipment';
import Map from './Components/Map/Map';
import { ParallaxProvider } from 'react-scroll-parallax';
import Town from './Components/Town/Town';
import Dungeon from './Components/Dungeon/Dungeon';

function App() {
	return (
		<ParallaxProvider>
			<Theme>
				<Town/>
				<Dungeon/>
				{/* <Stats/>
				<Backstory/>
				<Equipment/>
				<Map/> */}
			</Theme>
		</ParallaxProvider>
	);
}

export default App;
