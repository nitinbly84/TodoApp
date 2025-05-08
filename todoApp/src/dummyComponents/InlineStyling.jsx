import '../cssSheets/DummyStyle.css'
export default function InlineStyling() {
	return (
		<div>
			<div style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}>
				Inline Styling
			</div>
			<div className="header">
				External CSS styling
			</div>
			<div className="sample">
				Another External CSS styling
			</div>
		</div>
	)
}