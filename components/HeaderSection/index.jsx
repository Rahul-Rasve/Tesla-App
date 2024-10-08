import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const headerSection = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../assets/images/logo.png")}
			/>
            <Image
				style={styles.menu}
				source={require("../../assets/images/menu.png")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
        position: "absolute",
        zIndex: 100,
        top: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
    },

	logo: {
		width: 100,
		height: 20,
        resizeMode: "contain",
	},

	menu: {
		width: 25,
		height: 25,
        resizeMode: "contain",
	},
});

export default headerSection;
