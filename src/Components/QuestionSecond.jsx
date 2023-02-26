/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDispatch } from "react-redux"
import { setQuestionSecond } from "../stores/interviewSlice";


export const QuestionSecond = () => {
	const dispatch = useDispatch();

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
			<label css={label} htmlFor="questionSecond">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院をすすめられたことはありますか？</label>
			<input
				css={input}
				type="radio"
				className=""
				name="questionSecond"
				value="はい"
				onChange={(e) => dispatch(setQuestionSecond(e.target.value))}
			/>はい
			<input
				css={input}
				type="radio"
				className=""
				name="questionSecond"
				value="いいえ"
				onChange={(e) => dispatch(setQuestionSecond(e.target.value))}
			/>いいえ
		</div>
	)
}
