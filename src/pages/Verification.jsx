/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { BackButton } from "../Components/common/BackButton";
import { VerificationGender } from "../Components/VerificationGender";
import { VerificationBirthday } from "../Components/VerificationBirthday";
import { VerificationQuestion } from "../Components/VerificationQuestion";
import { VerificationConsultation } from "../Components/VerificationConsultation";
import { SendButton } from "../Components/common/SendButton";

export const Verification = () => {

	const form_page = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		overflow: hidden;
	`
	const container = css`
		border: 1px solid steelblue;
		border-radius: 4px;
		width: 50%;
		margin: 0 auto 16px;
	`
	const inner = css`
		position: relative;
		height: 40px;
		background-color: skyblue;
		border-radius: 4px 4px 0 0;
	`
	const label = css`
		position: absolute;
		top: 0;
		left: 0;
		background-color: steelblue;
		padding: 2px 8px;
		border-radius: 4px;
		color: #fff;
	`
	const title = css`
		margin: 0px;
		line-height: 40px;
		font-size: 1.2rem;
		font-weight: normal;
		text-align: center;
	`
	const wrapper = css`
		padding: 16px;
	`
	const button_wrapper = css`
		text-align: center;
	`
	return (
		<div css={form_page}>
			<div css={container}>
				<div css={inner}>
					<label css={label}>STEP4</label>
					<h2 css={title}>以下の内容をご確認ください</h2>
				</div>
				<div css={wrapper}>
					<VerificationGender />
					<VerificationBirthday />
					<VerificationQuestion />
					<VerificationConsultation />
				</div>
			</div>
			<div css={button_wrapper}>
				<BackButton
					endpoint={'/step3'}
				/>
				<SendButton
					endpoint={'#'}
				/>
			</div>
		</div>
	)
}
