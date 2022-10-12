import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

class Burger extends React.Component<{}, {menuOpen: false}> {
	constructor(props: any) {
		super(props)
		this.state = {
		  	menuOpen: false
		}
	}

	handleStateChange(state: any) {
		this.setState({menuOpen: state.isOpen}) ;
	}

	closeMenu() {
		this.setState({menuOpen: false});
	}

  	render () {
		return (
	  		<Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right customBurgerIcon={<img src="/Media/SVG/burger-icon.svg" alt="Burger Icon" /> }>
				<a href='/' className="menu-logo"><img src="/Media/Images/Logo-Main.png" alt="Main Logo"/></a>
				<a onClick={() => this.closeMenu()} className="menu-item" href="#ProjectsSection">Projects</a>
				<a onClick={() => this.closeMenu()} className="menu-item" href="#TechnologiesSection">Technologies</a>
				<a onClick={() => this.closeMenu()} className="menu-item" href="#AboutSection">About Me</a>
				<a onClick={() => this.closeMenu()} className="menu-item" href="#ContactSection">Contact</a>
                <div>
                    <a href='https://github.com/francois-smith'>
                        <AiFillGithub className='svg_icon'></AiFillGithub>
                    </a>
                    <a href='https://instagram.com/_francois.smith_'>
                        <AiFillInstagram className='svg_icon'></AiFillInstagram>              
                    </a>
                    <a href='https://www.linkedin.com/in/francois-smith-b02609210/'>
                        <AiFillLinkedin className='svg_icon'></AiFillLinkedin>
                    </a>
                </div>
				<a href="/Media/CV/Francois-Smith-CV.pdf" id="CV" target="_blank">
					<div className="bm-cv-button">
						<div>
							<span className="Text-Gradient">View CV</span>
						</div>
					</div>
				</a>
	  		</Menu>
		);
  	}
}

export default Burger;