export default function InputField({ label }) {
	return (
		<p>
			<label>{label}</label>
			<input type="number" value="0" required></input>
		</p>
	);
}
