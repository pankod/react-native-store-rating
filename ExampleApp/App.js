import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import RateModal from 'react-native-store-rating'

export class App extends Component {

	state = {
		isModalOpen: false
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
					<Text> Open Modal </Text>
				</TouchableOpacity>

				<RateModal
					rateBtnText={'Rate'}
					cancelBtnText={'Cancel'}
					totalStarCount={5}
					defaultStars={5}
					isVisible={true}
					sendBtnText={'Send'}
					commentPlaceholderText={'Placeholder text'}
					emptyCommentErrorMessage={'Empty comment error message'}
					iTunesStoreUrl={'market://details?id=${APP_PACKAGE_NAME}'}
					isModalOpen={this.state.isModalOpen}
					storeRedirectThreshold={3}
					style={{
						backgroundColor: '#000',
						paddingHorizontal: 30,
					}}
					onStarSelected={(e) => {
						console.log('change rating', e);
					}}
					onClosed={() => {
						console.log('pressed cancel button...')
						this.setState({
							isModalOpen: false
						})
					}}
					sendContactUsForm={(state) => {
						// state = {
						// 	isModalOpen: true,
						// 	rating: 3,
						// 	review: "Lorem ipsum dolor sit amet...",
						// 	reviewError:false,
						// 	showContactForm:true
						// }
					}}
				/>

			</View >
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default App
