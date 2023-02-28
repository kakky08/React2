/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useSelector } from "react-redux"


export const VerificationGender = () => {
	const gender = useSelector(state => state.interview.questionnaire.gender);

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
		<div>
			<p css={title}>- 性別 -</p>
			<p css={text}>{ gender }</p>
		</div>
	)
}
