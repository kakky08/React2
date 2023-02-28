/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux"
import { QUESTION } from "../consts/question";
import { setQuestionFirst } from "../stores/interviewSlice";


export const QuestionFirst = () => {
	const dispatch = useDispatch();
	const questionFirst = useSelector(state => state.interview.questionnaire.questionFirst);

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
			<label css={label} htmlFor="questionFirst">{ QUESTION.FIRST_TITLE }</label>
			<input
				css={input}
				type="radio"
				className=""
				name="questionFirst"
				checked={"はい" === questionFirst}
				value="はい"
				onChange={(e) => dispatch(setQuestionFirst(e.target.value))}
			/>はい
			<input
				css={input}
				type="radio"
				className=""
				name="questionFirst"
				checked={"いいえ" === questionFirst}
				value="いいえ"
				onChange={(e) => dispatch(setQuestionFirst(e.target.value))}
			/>いいえ
		</div>
	)
}
