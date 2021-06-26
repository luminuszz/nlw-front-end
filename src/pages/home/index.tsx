import React from "react";
import { Flex, Grid, Img, GridItem, Heading, Text } from "@chakra-ui/react";

import { Container } from "../../components/layout/container";

import Logo from "../../assets/logo.svg";
import illustration from "../../assets/illustration.svg";

import { GoogleSignButton } from "../../components/GoogleSignButton";

export function Home(): JSX.Element {
	return (
		<Container>
			<Grid templateColumns="repeat(2,1fr)" w="100%">
				<Flex
					bg="purple.500"
					align="flex-start"
					justify="center"
					p={20}
					flexDir="column"
				>
					<Flex flexDir="column" pl="84px" pr="133px">
						<Img src={illustration} w="312px" h="500px" />

						<Heading fontSize="36px" textAlign="left" color="white">
							Toda pergunta possui uma resposta.
						</Heading>
						<Text
							fontSize="24px"
							textAlign="left"
							mt={2}
							color="white"
						>
							Aprenda e compartilhe conhecimento com outras
							pessoas
						</Text>
					</Flex>
				</Flex>

				<Flex align="center" justify="center" flexDir="column">
					<Img w="154px" h="69px" src={Logo} />

					<Flex dir="column">
						<GoogleSignButton mt="56px" />
					</Flex>
				</Flex>
			</Grid>
		</Container>
	);
}
