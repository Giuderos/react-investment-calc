import InputField from "./InputField";

export default function UserInput() {
	return (
		<div id="user-input">
			<div className="input-group">
				<InputField label={"INITIAL INVESTMENT"} />
				<InputField label={"ANNUAL INVESTMENT"} />
			</div>
			<div className="input-group">
				<InputField label={"EXPECTED RETURN"} />
				<InputField label={"DURATION"} />
			</div>
		</div>
	);
}
