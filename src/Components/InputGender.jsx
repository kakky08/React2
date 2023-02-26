/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch } from "react-redux";
import { setGender } from "../stores/interviewSlice";

export const InputGender = () => {
	const dispatch = useDispatch();

	const box = css`
		margin-bottom: 16px;
	`
	const label = css`
		display: block;
		margin-bottom: 12px;
		color: steelblue;
	`
	const input = css`
		margin-left: 12px;
	`
	return(
		<div css={box}>
			<label css={label} htmlFor="gender">- 性別 -</label>
			<input
				css={input}
				type="radio"
				className=""
				name="gender"
				value="男性"
				onChange={() => dispatch(setGender('男性'))}
			/>男性
			<input
				css={input}
				type="radio"
				className=""
				name="gender"
				value="女性"
				onChange={() => dispatch(setGender('女性'))}
			/>女性
		</div>
	)
}
