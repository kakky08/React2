/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom"

export const BackButton = ({endpoint, style}) => {

	const button = css`
		text-decoration: none;
		border: none;
		background-color: skyblue;
		border-radius: 2px;
		padding: 4px 8px;
		margin-right: 16px;
		color: #fff;
		cursor: pointer;
	`

	return(
		<Link
			css={button}
			to={endpoint}
		>
			前に戻る
		</Link>
	)
}
