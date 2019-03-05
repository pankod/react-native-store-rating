export interface IProps {
	modalTitle: string;
	cancelBtnText: string;
	count: number;
	defaultRating: number;
	nonComment: string;
	showRating: boolean;
	isModalOpen: boolean;
	placeHolderText: string;
	rateBtnText: string;
	sendBtnText: string;
	commentOpenRating: number;
	ratingOnChange: (e: number) => void;
	onClosed: () => void;
	sendContactUsForm: (state: IState) => void;
	androidUrl?: string;
	iosUrl?: string;
}
export interface IState {
	rating: number;
	showContactForm: boolean;
	review: string;
	reviewError: boolean;
}
