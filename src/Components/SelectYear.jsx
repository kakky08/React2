/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch } from "react-redux";
import { setYear } from "../stores/interviewSlice";

export const SelectYear = () => {

	const dispatch = useDispatch();

    const yearOptions = () => {
        const year = [];
        for (let i = 1926; i <= 2022; i++) {
            if (i <= 1988) {
				year.push(<option key={i} value={i}>{ i }年 昭和{ i - 1925 }</option>)
                }
            else if (i <= 2018) {
				year.push(<option key={i} value={i}>{ i }年 平成{ i - 1998 }</option>)
                }
            else if (i <= 2022) {
                year.push(<option key={i} value={ i }>{ i }年 令和{ i - 2018 }</option>)
            }
        }
        return year;
	}

	const select = css`
		display: flex;
		align-items: center;
		width: 30%;

	`
	const medium = css`
		width: 100%;
		height: 30px;
		font-size: 1rem;
		margin-right: 5px;
		border: 1px solid #ddd;
	`
	const text = css`
		margin-right: 12px;
		margin-left: 4px;
	`

	return(
		<div css={select}>
			<select
				css={medium}
				className="select _medium"
				name="year"
				onChange={(e) => dispatch(setYear(e.target.value))}
			>
				<option selected>----</option>
				{ yearOptions() }
			</select>
			<p css={text}>年</p>
		</div>
	)
}
