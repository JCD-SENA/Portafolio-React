import { StudiesList } from "../StudiesList/StudiesList"

const doggo = "https://i.redd.it/deo7caizgvx41.jpg"

export const Studies = () => {
	return (
		<>
			<h2 className="title">Estudios</h2>
			<div className="twoSides" id="studies">
				<StudiesList />
				<img src={doggo} className="studiesImage"/>
			</div>
		</>
	)
}