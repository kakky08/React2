/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux"


export const VerificationBirthday = () => {
	const year = useSelector(state => state.interview.questionnaire.year);
	const month = useSelector(state => state.interview.questionnaire.month);
	const day = useSelector(state => state.interview.questionnaire.day);

	const title = css`
		display: block;
		margin-bottom: 12px;
		color: steelblue;
		text-align: start;

	`
	const text = css`
		text-align: start;
		margin-left: 16px;
	`

	return (
		<div>
			<p css={title}>- 生年月日 -</p>
			<p css={text}>{ year + month + day }</p>
		</div>
	)
}
