/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch, useSelector } from "react-redux";
import { setConsultationContent } from "../stores/interviewSlice";
import { BackButton } from "../Components/common/BackButton";
import { MoveOnButton } from "../Components/common/MoveOnButton";

export const ConsultationContent = () => {
	const dispatch = useDispatch();
	const consultationContent = useSelector(state => state.interview.questionnaire.consultationContent);

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
	const textarea_label = css`
		display: block;
		margin-bottom: 12px;
		color: steelblue;
	`
	const textarea = css`
		width: 100%;
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
		box-sizing: border-box;
	`
	const button_wrapper = css`
		text-align: center;
	`
	return(
		<div css={form_page}>
			<div css={container}>
				<div css={inner}>
					<label css={label}>STEP3</label>
					<h2 css={title}>ご相談内容をご記入ください</h2>
				</div>
				<div css={wrapper}>
					<label css={textarea_label} htmlFor="consultationContent">-ご相談内容-</label>
					<textarea
						css={textarea}
						name="consultationContent"
						cols="30"
						rows="10"
						value={consultationContent}
						onChange={(e) => dispatch(setConsultationContent(e.target.value))}
					>
					</textarea>
				</div>
			</div>
			<div css={button_wrapper}>
				<BackButton
					endpoint={'/step2'}
				/>
				<MoveOnButton
					endpoint={'/step4'}
				/>
			</div>
		</div>
	)
}
