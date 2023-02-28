/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux"
import { QUESTION } from "../consts/question";
import { setQuestionSecond } from "../stores/interviewSlice";


export const QuestionSecond = () => {
	const dispatch = useDispatch();
	const questionSecond = useSelector(state => state.interview.questionnaire.questionSecond);

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
			<label css={label} htmlFor="questionSecond">{ QUESTION.SECOND_TITLE }</label>
			<input
				css={input}
				type="radio"
				className=""
				name="questionSecond"
				checked={"はい" === questionSecond}
				value="はい"
				onChange={(e) => dispatch(setQuestionSecond(e.target.value))}
			/>はい
			<input
				css={input}
				type="radio"
				className=""
				name="questionSecond"
				checked={"いいえ" === questionSecond}
				value="いいえ"
				onChange={(e) => dispatch(setQuestionSecond(e.target.value))}
			/>いいえ
		</div>
	)
}
