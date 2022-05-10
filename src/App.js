import Theme from './Styles/Theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import Town from './Components/Town/Town';
import Dungeon from './Components/Dungeon/Dungeon';

function App() {
	return (
		<ParallaxProvider>
			<Theme>
				<Town/>
				<Dungeon/>
			</Theme>
		</ParallaxProvider>
	);
}

export default App;
