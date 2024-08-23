import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
	const annualData = calculateInvestmentResults(input);
	console.log(annualData);
	const listItems = annualData.map((annualData) => {
		const totalInvestment = annualData.valueEndOfYear - annualData.annualInvestment * annualData.year;
		return (
			<tr key={annualData.year}>
				<td>{annualData.year}</td>
				<td>{formatter.format(annualData.valueEndOfYear)}</td>
				<td>{formatter.format(annualData.interest)}</td>
				<td>{formatter.format(totalInvestment)}</td>
				<td>{formatter.format(annualData.annualInvestment)}</td>
			</tr>
		);
	});
	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>{listItems}</tbody>
		</table>
	);
}
