/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useSelector } from "react-redux"


export const VerificationConsultation = () => {
	const consultationContent = useSelector(state => state.interview.questionnaire.consultationContent);

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
			<p css={title}>- ご相談内容 -</p>
			<p css={text}>{ consultationContent }</p>
		</div>
	)
}
