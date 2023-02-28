/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch } from "react-redux"
import { setQuestionFirst } from "../stores/interviewSlice";


export const QuestionFirst = () => {
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
			<label css={label} htmlFor="questionFirst">現在、生命保険に加入されていますか？</label>
			<input
				css={input}
				type="radio"
				className=""
				name="questionFirst"
				value="はい"
				onChange={(e) => dispatch(setQuestionFirst(e.target.value))}
			/>はい
			<input
				css={input}
				type="radio"
				className=""
				name="questionFirst"
				value="いいえ"
				onChange={(e) => dispatch(setQuestionFirst(e.target.value))}
			/>いいえ
		</div>
	)
}
