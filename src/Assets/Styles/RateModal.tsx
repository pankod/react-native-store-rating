import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Color } from './Color';

export let RateModalStyles = StyleSheet.create({
	bigButton: {
		width: 130,
	} as ViewStyle,

	button: {
		backgroundColor: Color.LightGreen[600],
		flex: 0,
		height: 30,
		marginHorizontal: 5,
		minWidth: 70,
		paddingHorizontal: 5,
	} as ViewStyle,

	buttonCancel: {
		backgroundColor: Color.Transparent,
	},

	buttonCancelText: {
		color: Color.Grey[500],
		fontWeight: '500',
		letterSpacing: 1,
	} as TextStyle,

	buttonContainer: {
		alignItems: 'center',
		alignSelf: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20,
		paddingHorizontal: 20,
	} as ViewStyle,

	buttonText: {
		fontWeight: '500',
	} as TextStyle,

	errorText: {
		color: Color.Red[500],
	} as TextStyle,

	modalContainer: {
		backgroundColor: Color.White[500],
		borderRadius: 10,
	} as ViewStyle,

	textBox: {
		borderBottomColor: Color.LightGreen[600],
		borderBottomWidth: 1,
		borderWidth: 0,
		margin: 20,
	} as ViewStyle,

	title: {
		fontSize: 20,
		fontWeight: '500',
		marginHorizontal: 30,
		marginVertical: 15,
		textAlign: 'center',
	} as TextStyle,
});
