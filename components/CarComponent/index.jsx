import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButtons";

const CarItem = (props) => {
	const { name, tagline, image, taglineCTA } = props;

	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />

			<View style={styles.headerSection}>
				<Text style={styles.title}>{name}</Text>

				<Text style={styles.subtitle}>
					{tagline}{" "}
					<Text style={styles.subtitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonContainer}>
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
		</View>
	);
};

export default CarItem;
