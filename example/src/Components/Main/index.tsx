import * as React from 'react';
import { Alert } from 'react-native';
import RateModal from 'react-native-store-rating';

import Splash from '@pankod/project-splash';

export default class Main extends React.Component<{}, { intro: boolean, isModalOpen: boolean }> {
	constructor(props: {}) {
		super(props);

		this.state = {
			intro: true,
			isModalOpen: true
		};
	}

	public componentDidMount(): void {
		setTimeout(() => {
			this.setState({ intro: false });
		},         2000);
	}

	public render(): JSX.Element {
		const { intro, isModalOpen } = this.state;

		if (intro) {
			return (
				<Splash />
			);
		}

		return (
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
				isModalOpen={isModalOpen}
				onStarSelected={e => { console.log('change rating', e); }}
				storeRedirectThreshold={3}
				style={{
					paddingHorizontal: 30
				}}
				onClosed={() => {
					this.setState({
						isModalOpen: false
					})
				}}
				sendContactUsForm={state => { Alert.alert(JSON.stringify(state)) }}
			/>
		);
	}
}
