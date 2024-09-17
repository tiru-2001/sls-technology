import React from "react";
import "./Clients.scss";
import Carousel from "../carousel/Carousel";
import { client_carousel_items } from "../utilities";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Clients = () => {
	useGSAP(() => {
		let t1 = gsap.timeline();
		t1.from(".clients-top h1", {
			x: 70,
			opacity: 0,
			duration: 2,
			delay: 0.5,
		});
	});
	const handleImageHover = (imgRef) => {
		gsap.to(imgRef, {
			scale: 1.3,
			duration: 0.5,
			x: 20,
			ease: "power1.out",
		});
	};

	const handleImageHoverOut = (imgRef) => {
		gsap.to(imgRef, {
			scale: 1,
            duration: 0.5,
            x:0,
			ease: "power1.out",
		});
	};
	return (
		<>
			<section className="clients-main">
				<section className="clients-top">
					<h1>Trusted By</h1>
				</section>
				<section className="clients-bottom">
					<Carousel className="carousel">
						{client_carousel_items.map((item) => (
							<section
								key={item.id}
								className="img-container"
								onMouseEnter={(e) =>
									handleImageHover(e.currentTarget.querySelector("img"))
								}
								onMouseLeave={(e) =>
									handleImageHoverOut(e.currentTarget.querySelector("img"))
								}
							>
								<img className="" src={item.img} alt={item.img} />
							</section>
						))}
					</Carousel>
				</section>
			</section>
		</>
	);
};

export default Clients;
