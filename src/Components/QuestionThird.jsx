/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux"
import { QUESTION } from "../consts/question";
import { setQuestionThird } from "../stores/interviewSlice";


export const QuestionThird = () => {
	const dispatch = useDispatch();
	const questionThird = useSelector(state => state.interview.questionnaire.questionThird);

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
			<label css={label} htmlFor="questionThird">{ QUESTION.THIRD_TITLE }</label>
			<input
				css={input}
				type="radio"
				className=""
				name="questionThird"
				checked={"はい" === questionThird}
				value="はい"
				onChange={(e) => dispatch(setQuestionThird(e.target.value))}
			/>はい
			<input
				css={input}
				type="radio"
				className=""
				name="questionThird"
				checked={"いいえ" === questionThird}
				value="いいえ"
				onChange={(e) => dispatch(setQuestionThird(e.target.value))}
			/>いいえ
		</div>
	)
}
