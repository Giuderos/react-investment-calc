export default function InputField({ id, label, value, onInputChange }) {
	return (
		<p>
			<label>{label}</label>
			<input type="number" id={id} value={value} required onChange={onInputChange}></input>
		</p>
	);
}
