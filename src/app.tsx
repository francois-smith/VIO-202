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
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Footer/>
    </Theme>
  );
}

export default App;
