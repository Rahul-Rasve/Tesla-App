import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	carContainer: {
		width: "100%",
		height: "100%",
	},

	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		position: "absolute",
	},

	headerSection: {
		marginTop: "25%",
		width: "100%",
		alignItems: "center",
	},

	title: {
		fontSize: 40,
		fontWeight: "600",
	},

	subtitle: {
		fontSize: 16,
		color: "#5c5e62",
		marginTop: 5,
	},
});

export default styles;
