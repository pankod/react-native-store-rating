import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Color } from './Color';

export let RateModalStyles = StyleSheet.create({

	modalWrapper: {
		backgroundColor: 'rgba(0,0,0,.5)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	} as ViewStyle,

	bigButton: {
		width: 130,
	} as ViewStyle,

	buttonSpacer: {
		flex: 1
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
		paddingLeft: 20,
		color: Color.Red[500],
	} as TextStyle,

	modalContainer: {
		backgroundColor: Color.White[500],
		borderRadius: 10,
		marginHorizontal: 20,
	} as ViewStyle,

	textBox: {
		borderBottomColor: Color.LightGreen[600],
		borderBottomWidth: 1,
		borderWidth: 0,
		margin: 20,
	} as ViewStyle,

	textBoxText: {
		paddingVertical: 5
	} as TextStyle,

	title: {
		fontSize: 20,
		fontWeight: '500',
		marginHorizontal: 30,
		marginVertical: 15,
		textAlign: 'center',
	} as TextStyle,
});
