import { ViewStyle } from 'react-native'

export interface IProps {
	modalTitle: string;
	cancelBtnText: string;
	totalStarCount: number;
	defaultStars: number;
	emptyCommentErrorMessage: string;
	isVisible: boolean;
	isModalOpen: boolean;
	commentPlaceholderText: string;
	rateBtnText: string;
	sendBtnText: string;
	storeRedirectThreshold: number;
	onStarSelected: (e: number) => void;
	onClosed: () => void;
	sendContactUsForm: (state: IState) => void;
	playStoreUrl?: string;
	iTunesStoreUrl?: string;
	style: ViewStyle;
	starLabels: string[];
	isTransparent: boolean;
	onSendReview:()=> void;
}
export interface IState {
	rating: number;
	showContactForm: boolean;
	review: string;
	reviewError: boolean;
	isModalOpen: boolean;
}
