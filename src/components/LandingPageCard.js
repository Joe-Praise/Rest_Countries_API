import React from "react";
import { Link } from "react-router-dom";

const LandingPageCard = ({img, alt, country, population, Region,capital, name}) => {
	function addComma(n) {
		const digits = n;
		return digits.toLocaleString('en-US');
	}

	return (
		<Link to={`/${name}`} className="card--container links">
			<figure>
				<img src={img} alt={alt} />
			</figure>
			<div className="card--details--container">
				<h2>{country}</h2>
				<div className="card--details">
					<p><span>
						Population:
						</span>{" "}
						 {addComma(population)}</p>
					<p><span>
						Region: 
						</span>{" "}
						{Region}</p>
					<p><span>
						Capital: </span>{" "}
						{capital}</p>
				</div>
			</div>
		</Link>
	);
};

export default LandingPageCard;
