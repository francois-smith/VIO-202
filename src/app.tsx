import React from 'react';
import Theme from './Styles/theme';
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Project from './Components/Projects/Projects'
import Technologies from './Components/Technologies/Technologies'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Theme>
      <Navigation />
      <Hero />
      <Project />
      <Technologies />
      <About />
      <Contact />
      <Footer/>
    </Theme>
  );
}

export default App;
