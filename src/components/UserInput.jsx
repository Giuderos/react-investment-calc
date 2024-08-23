import InputField from "./InputField";

export default function UserInput({ onUserInput, userInput }) {
	return (
		<div id="user-input">
			<div className="input-group">
				<InputField
					id="initial"
					label={"INITIAL INVESTMENT"}
					value={userInput.initialInvestment}
					onInputChange={onUserInput}
				/>
				<InputField
					id="annual"
					label={"ANNUAL INVESTMENT"}
					value={userInput.annualInvestment}
					onInputChange={onUserInput}
				/>
			</div>
			<div className="input-group">
				<InputField
					id="return"
					label={"EXPECTED RETURN"}
					value={userInput.expectedReturn}
					onInputChange={onUserInput}
				/>
				<InputField id="duration" label={"DURATION"} value={userInput.duration} onInputChange={onUserInput} />
			</div>
		</div>
	);
}
