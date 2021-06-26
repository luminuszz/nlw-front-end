import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { RecoilRoot } from "recoil";

import { Home } from "./pages/home";

import { theme } from "./global/themes/default";

export function App(): JSX.Element {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Home />
			</ChakraProvider>
		</RecoilRoot>
	);
}
