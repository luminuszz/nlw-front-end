import React from "react";

import { Button, ButtonProps, Img } from "@chakra-ui/react";

type Props = ButtonProps;

import GoogleIcon from "../assets/google-icon.svg";

export function GoogleSignButton({ ...props }: Props): JSX.Element {
	return (
		<Button
			{...props}
			isFullWidth
			color="white"
			bg="red.400"
			h="50px"
			maxW="320px"
			display="flex"
			align="center"
			justify="center"
			fontSize="16px"
		>
			<Img src={GoogleIcon} mr="8px" />
			Crie uma sala com Google
		</Button>
	);
}
