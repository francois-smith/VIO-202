import Theme from './styles/theme';
import { Background } from './components/background';
import Tip from './components/tip/tip'
import Page1 from './components/page-1/page-1'
import Page2 from './components/page-2/page-2'
import Page3 from './components/page-3/page-3'
import Page4 from './components/page-4/page-4'
import Page5 from './components/page-5/page-5'
import './yeet.css';

function App() {
	const style={
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}

	//function to link to another website
	function openLink(link){
		window.open(link, "_self");
	}

	return (
		<Theme>
			<div style={style}>
				{/* greater that symbol */}
				<button onClick={()=>openLink("https://francois-smith.netlify.app/#ProjectsSection")} className='float-button'><span><i className="fa-solid fa-arrow-left arrow"></i> PORTFOLIO</span></button>
				<Background/>
				<Tip/>
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
