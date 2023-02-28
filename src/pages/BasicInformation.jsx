/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { MoveOnButton } from "../Components/common/MoveOnButton";
import { InputGender } from "../Components/InputGender";
import { SelectDay } from "../Components/SelectDay";
import { SelectMonth } from "../Components/SelectMonth";
import { SelectYear } from "../Components/SelectYear";

export const BasicInformation = () => {

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
	const box = css`
		margin-bottom: 16px;
	`
	const label_birthday = css`
		display: block;
		margin-bottom: 12px;
		color: steelblue;
	`
	const wrapper_birthday = css`
		display: flex;
		justify-content: center;
	`
	const button_wrapper = css`
		text-align: center;
	`
	return(
		<div css={form_page}>
            <div css={container}>
				<div css={inner}>
					<lavel css={label}>STEP1</lavel>
					<h2 css={title}>お客様の情報を入力してください</h2>
				</div>
                <div css={wrapper}>
                    <InputGender />
					<div css={box}>
						<label css={label_birthday}>- 生年月日 -</label>
						<div css={wrapper_birthday}>
							<SelectYear />
							<SelectMonth />
							<SelectDay />
						</div>
					</div>
				</div>
			</div>
			<div css={button_wrapper}>
                <MoveOnButton
                    endpoint={'/step2'}
                />
			</div>
		</div>
	)
}
