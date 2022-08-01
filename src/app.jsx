import Theme from './styles/theme';
import { Background } from './components/background';
import Page1 from './components/page-5/page-5'
import Page2 from './components/page-5/page-5'
import Page3 from './components/page-5/page-5'
import Page4 from './components/page-5/page-5'
import Page5 from './components/page-5/page-5'

function App() {
	return (
		<Theme>
			<div>
				<Background/>
				<Page1/>
				<Page2/>
				<Page3/>
				<Page4/>
				<Page5/>
			</div>
		</Theme>
	);
}

export default App;
