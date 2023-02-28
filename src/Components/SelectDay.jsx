/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux";
import { setDay } from "../stores/interviewSlice";

export const SelectDay = () => {

	const dispatch = useDispatch();
	const day = useSelector(state => state.interview.questionnaire.day);

    const dayOptions = () => {
        const day = [];
        for (let i = 1; i <= 31; i++) {
            day.push(<option key={i} value={ i }>{ i }日</option>)
        }
        return day;
	}

	const select = css`
		display: flex;
        align-items: center;
		width: 15%;
	`
	const small = css`
		width: 100%;
		height: 30px;
		font-size: 1rem;
		border: 1px solid #ddd;
	`
	const text = css`
		margin-right: 12px;
		margin-left: 4px;
	`

	return(
		<div css={select}>
			<select
				css={small}
				className="select _small"
				name="day"
				value={day}
				onChange={(e) => dispatch(setDay(e.target.value))}
			>
				<option selected>----</option>
				{ dayOptions() }
			</select>
			<p css={text}>日</p>
		</div>
	)
}
