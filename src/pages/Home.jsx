import { MoveOnButton } from "../Components/common/MoveOnButton";

export const Home = () => {

	return(
		<div>
			<h1>診察を始める</h1>
			<div className="button_wrapper">
                <MoveOnButton
                    endpoint={'/step1'}
                />
			</div>
		</div>
	)
}
