/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link }from "react-router-dom"

export const MoveOnButton = ({endpoint}) => {

	const button = css`
		text-decoration: none;
		border: none;
		background-color: skyblue;
		border: none;
		border-radius: 2px;
		padding: 4px 8px;
		color: #fff;
		cursor: pointer;
	`

	return(
		<Link
			css={button}
			to={endpoint}
		>
			次に進む
		</Link>
	)
}
