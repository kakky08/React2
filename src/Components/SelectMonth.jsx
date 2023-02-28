/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux";
import { setMonth } from "../stores/interviewSlice";

export const SelectMonth = () => {

    const dispatch = useDispatch();
	const month = useSelector(state => state.interview.questionnaire.month);

    const monthOptions = () => {
        const month = [];
        for (let i = 1; i <= 12; i++) {
            month.push(<option key={i} value={ i }>{ i }月</option>)
        }
        return month;
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
				name="month"
				value={month}
				onChange={(e) => dispatch(setMonth(e.target.value))}
			>
				<option selected>----</option>
				{ monthOptions() }
			</select>
			<p css={text}>月</p>
		</div>
	)
}
