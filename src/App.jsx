import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

const defaultInput = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10,
};

function App() {
	const [userInput, setUserInput] = useState(defaultInput);
	const inputIsValid = userInput.duration >= 1;

	/** Per una funzione più smart si può passare in input direttamente l'id ed il valore
	 * andando ad utilizzare una anonymous function sulla prop onInputChange.
	 * Es. (event) => handleChange("initial", event.target.value)
	 */
	function handleChange(event) {
		setUserInput((prevInput) => {
			const newInput = { ...prevInput };
			if (event.target.id === "initial") {
				newInput.initialInvestment = +event.target.value;
			}
			if (event.target.id === "annual") {
				newInput.annualInvestment = +event.target.value;
			}
			if (event.target.id === "return") {
				newInput.expectedReturn = +event.target.value;
			}
			if (event.target.id === "duration") {
				newInput.duration = +event.target.value;
			}
			return newInput;
		});
	}
	return (
		<>
			<Header />
			<UserInput onUserInput={handleChange} userInput={userInput} />
			{!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
			{inputIsValid && <Result input={userInput} />}
		</>
	);
}

export default App;
