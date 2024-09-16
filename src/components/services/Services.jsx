
import React, { useRef } from "react";
import "./Services.scss";
import {
	FaInfinity,
	FaUserCheck,
	FaConnectdevelop,
	FaDiceD20,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
	const containerRef = useRef(null);
	const circleRefs = useRef([]);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top top",
				end: "bottom top",
				scrub: 2,
				pin: true,
			},
		});

		if (window.innerWidth <= 360) {
			tl.to(".center-circle", {
				y: "-25vh", 
				duration: 2,
				ease: "power1.out",
			});

			tl.to(circleRefs.current, {
				opacity: 1,
				scale: 1,
				duration: 2,
				ease: "power1.out",
				y: (i) => `${i * 200}px`, 
			});
		} else {
			tl.from(".center-circle", {
				opacity: 1,
				scale: 1.5,
				duration: 2,
				ease: "power1.out",
			});

			tl.to(circleRefs.current, {
				opacity: 1,
				scale: 1,
				duration: 2,
				ease: "power1.out",
				x: (i) =>
					i === 0 ? "-25vw" : i === 1 ? "25vw" : i === 2 ? "-25vw" : "25vw",
				y: (i) =>
					i === 0 ? "-25vh" : i === 1 ? "-25vh" : i === 2 ? "25vh" : "25vh",
			});
		}
	});

	return (
		<section ref={containerRef} className="services-main">
			<section className="center-circle">
				<h2>Services</h2>
			</section>
			<section
				ref={(el) => (circleRefs.current[0] = el)}
				className="side-circle"
			>
				<h2>
					<FaUserCheck />
					3D Printing Services
				</h2>
				<p>
					We have state of the art Industrial grade machine to cater all your 3D
					printing needs.
				</p>
			</section>
			<section
				ref={(el) => (circleRefs.current[1] = el)}
				className="side-circle"
			>
				<h2>
					<FaInfinity />
					Reverse Engineering
				</h2>
				<p>
					The process of where a man-made object is deconstructed to reveal its
					designs, architecture.
				</p>
			</section>
			<section
				ref={(el) => (circleRefs.current[2] = el)}
				className="side-circle"
			>
				<h2>
					<FaConnectdevelop />
					Prototyping
				</h2>
				<p>
					Now that we can easily 3D Print complex components, you can avail
					additively manufactured functional prototypes.
				</p>
			</section>
			<section
				ref={(el) => (circleRefs.current[3] = el)}
				className="side-circle"
			>
				<h2>
					<FaDiceD20 />
					3D Scanning
				</h2>
				<p>
					3D scanning services are offered as a fast and accurate way of
					digitizing physical objects for use in design, inspection and
					visualization.
				</p>
			</section>
		</section>
	);
};

export default Services;
