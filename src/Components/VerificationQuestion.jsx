/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useSelector } from "react-redux"
import { QUESTION } from "../consts/question";


export const VerificationQuestion = () => {
	const questionFirst = useSelector(state => state.interview.questionnaire.questionFirst);
	const questionSecond = useSelector(state => state.interview.questionnaire.questionSecond);
	const questionThird = useSelector(state => state.interview.questionnaire.questionThird);

	const title = css`
		display: block;
		margin-bottom: 12px;
		color: steelblue;
		text-align: start;
	`

	const text = css`
		margin-left: 16px;
		text-align: start;
	`

	return (
		<>
		<div>
			<p css={title}>- { QUESTION.FIRST_TITLE } -</p>
			<p css={text}>{ questionFirst }</p>
		</div>
		<div>
			<p css={title}>- { QUESTION.SECOND_TITLE } -</p>
			<p css={text}>{ questionSecond }</p>
		</div>
		<div>
			<p css={title}>- { QUESTION.THIRD_TITLE } -</p>
			<p css={text}>{ questionThird }</p>
		</div>
		</>
	)
}
