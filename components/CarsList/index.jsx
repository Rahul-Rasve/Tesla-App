import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
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

export default CarsList;
