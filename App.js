import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<CarItem
				name={"Model X"}
				tagline={"Odrder Online for"}
        taglineCTA={"Touchless Delivery"}
				image={require("./assets/images/ModelX.jpeg")}
			/>
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
});
