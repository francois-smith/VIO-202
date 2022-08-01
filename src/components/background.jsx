import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

export class Background extends React.Component{
	async particlesInit(main) {
		await loadFirePreset(main);
	}

	render() {
		const options = {
			fpsLimit: 40,
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						area: 800,
					},
				},
				color: {
					value: ["#fdcf58", "#757676", "#f27d0c", "#2e4546", "#414042"],
				},
				opacity: {
					value: { min: 0.1, max: 0.5 },
				},
				size: {
					value: { min: 1, max: 3 },
				},
				move: {
					enable: true,
					speed: 1,
					random: false,
				},
			},
			background: {
				image: "radial-gradient(#151616 25%, #151616 75%)",
			},
		};

		return <Particles options={options} init={this.particlesInit} />;
	}
}