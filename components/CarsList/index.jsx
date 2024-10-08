import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import React from "react";
import cars from "../../data/cars";
import CarItem from "../CarComponent";

const CarsList = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => <CarItem car={item} />}
				showsVerticalScrollIndicator={false}
				snapToAlignment={"start"}
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("window").height}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});

export default CarsList;
