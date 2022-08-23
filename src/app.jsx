import Theme from './styles/theme';
import { Background } from './components/background';
import Tip from './components/tip/tip'
import Page1 from './components/page-1/page-1'
import Page2 from './components/page-2/page-2'
import Page3 from './components/page-3/page-3'
import Page4 from './components/page-4/page-4'

function App() {
	const style={
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}

	return (
		<Theme>
			<div style={style}>
				<Background/>
				<Tip/>
				<Page1/>
				<Page2/>
				<Page3/>
				<Page4/>
			</div>
		</Theme>
	);
}

export default App;
