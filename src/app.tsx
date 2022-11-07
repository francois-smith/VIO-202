import React from 'react';
import Theme from './Styles/theme';
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Project from './Components/Projects/Projects'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Theme>
      <main>
        <div className='overlay'></div>
        <Navigation />
        <Hero />
        <Project />
        <About />
      </main>
      <Footer/>
    </Theme>
  );
}

export default App;
