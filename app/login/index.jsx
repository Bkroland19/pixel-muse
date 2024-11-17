import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const LoginScreen = () => {
	return (
		<View>
			<Image
				source={require("../../assets/images/login.jpg")}
				style={{
					width: "100%",
					height: 700,
				}}
			/>

			<View style={styles.welcome_container}>
				<Text style={styles.welcome_text}>
					Welcome to Pixel Muse
				</Text>
				<Text
					style={{
						color: Colors.GRAY,
						textAlign: "center",
						marginTop: 15,
					}}
				>
					Let AI help you create your next masterpiece{" "}
				</Text>

				<View style={styles.button}>
					<Text
						style={{
							textAlign: "center",
							color: "white",
							fontSize: 15,
						}}
					>
						continue
					</Text>
				</View>

				<Text style={styles.agree}>
					By continuing you agree to our terms and conditions
				</Text>
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	welcome_container: {
		padding: 25,
		marginTop: -20,
		backgroundColor: "white",
		height: 600,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
	welcome_text: {
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		width: "100%",
		padding: 20,
		backgroundColor: Colors.PRIMARY,
		borderRadius: 40,
		marginTop: 20,
	},
	agree: {
		textAlign: "center",
		color: Colors.GRAY,
        fontSize: 13,
        marginTop:20
	},
});
