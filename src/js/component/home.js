import React from "react";
import "../../styles/home.scss";

export function Home() {
	let numero = [];
	const generatorRandomNumber = () => {
		let numbers = [
			"A",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"J",
			"Q",
			"K"
		];

		let indexNumbers = Math.floor(Math.random() * numbers.length);
		return numero.push(numbers[indexNumbers]);
	};
	generatorRandomNumber();
	console.log(numero);

	let simbolo = [];
	const generatorRandomSuit = () => {
		let suit = ["diamond", "spade", "heart", "club"];
		let indexSuit = Math.floor(Math.random() * suit.length);

		return simbolo.push(suit[indexSuit]);
	};
	generatorRandomSuit();
	console.log(simbolo);

	return (
		<div className="container-fluid text-center">
			<div className=""></div>
			{simbolo == "spade" ? (
				<div className="card spade">
					{" "}
					<span className="number">{numero}</span>
				</div>
			) : (
				""
			)}

			{simbolo == "diamond" ? (
				<div className="card diamond">
					{" "}
					<span className="number">{numero}</span>
				</div>
			) : (
				""
			)}

			{simbolo == "club" ? (
				<div className="card club">
					{" "}
					<span className="number">{numero}</span>
				</div>
			) : (
				""
			)}

			{simbolo == "heart" ? (
				<div className="card heart">
					{" "}
					<span className="number">{numero}</span>
				</div>
			) : (
				""
			)}
		</div>
	);
}
