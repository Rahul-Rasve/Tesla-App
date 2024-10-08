import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.carContainer}>
				<ImageBackground
					source={require("./assets/images/ModelS.jpeg")}
					style={styles.image}
				/>

				<View style={styles.headerSection}>
					<Text style={styles.title}>Model S</Text>

					<Text style={styles.subtitle}>Starting at $69,420</Text>
				</View>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

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
