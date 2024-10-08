import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
	const { type, text } = props;

	const backgroundColor = type === "first" ? "#171A20CC" : "#FFFFFFA6";
	const color = type === "first" ? "#FFFFFF" : "#171A20";

	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.button, { backgroundColor: backgroundColor }]}
				onPress={props.onPress}>
				<Text style={[styles.text, { color: color }]}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;
