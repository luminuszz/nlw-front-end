import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		black: {
			"900": "#050206",
		},

		purple: {
			"500": "#835AFD",
			"700": "#6F4BD8",
		},
		blue: {
			"500": "#485BFF",
		},

		red: {
			"400": "#EA4335",
			"500": "#E73F5D",
			"600": "#D73754",
		},

		gray: {
			"300": "#CECECE",
			"500": "#7E7E86",
			"700": "#29292E",
		},

		pink: {
			"500": "#E559F9",
			"300": "#D67EE2",
		},

		white: {
			"500": "#F8F8F8",
			"800": "#FEFEFE",
		},
	},

	styles: {
		global: {
			body: {
				backgroundColor: "#F8F8F8",
			},
		},
	},
});
