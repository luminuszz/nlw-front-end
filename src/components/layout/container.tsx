import React from "react";

import { Flex } from "@chakra-ui/react";

type Props = {
	children?: React.ReactNode;
};

export function Container({ children }: Props): JSX.Element {
	return (
		<Flex width="100vw" height="100vh" flex="1">
			{children}
		</Flex>
	);
}
