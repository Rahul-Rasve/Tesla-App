import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButtons";

const CarItem = (props) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/images/ModelS.jpeg")}
				style={styles.image}
			/>

			<View style={styles.headerSection}>
				<Text style={styles.title}>Model S</Text>

				<Text style={styles.subtitle}>Starting at $69,420</Text>
			</View>

			<StyledButton
				type="first"
				text={"custom order"}
				onPress={() => {
					console.log("Custom Order");
				}}
			/>
			<StyledButton
				type="second"
				text={"existing inventory"}
				onPress={() => {
					console.log("Existing Inventory");
				}}
			/>
		</View>
	);
};

export default CarItem;
