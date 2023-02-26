/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch } from "react-redux"
import { setQuestionThird } from "../stores/interviewSlice";


export const QuestionThird = () => {
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

	return (
		<div css={box}>
			<label css={label} htmlFor="questionThird">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</label>
			<input
				css={input}
				type="radio"
				className=""
				name="questionThird"
				value="はい"
				onChange={(e) => dispatch(setQuestionThird(e.target.value))}
			/>はい
			<input
				css={input}
				type="radio"
				className=""
				name="questionThird"
				value="いいえ"
				onChange={(e) => dispatch(setQuestionThird(e.target.value))}
			/>いいえ
		</div>
	)
}
