import { Component } from "react";
import { AirbnbRating } from "react-native-ratings";
import { IProps, IState } from "../Interfaces/IRateModal";
export declare class RateModal extends Component<IProps, IState> {
    static defaultProps: {
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
        starLabels: string[];
        isTransparent: boolean;
        styles: {};
        ratingProps: {};
        ratingComponent: typeof AirbnbRating;
        modalProps: {};
        onSendReview: () => boolean;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    static getDerivedStateFromProps(nextProps: IProps): {
        rating?: number;
        showContactForm?: boolean;
    } | null;
    private onStarSelected;
    private renderRateModal;
    private renderRatingView;
    private renderContactFormView;
    private renderRating;
    private renderContactForm;
    private renderCancelButton;
    private renderRateButton;
    private renderSendButton;
    private renderReviewError;
    private handleCancel;
    private sendRate;
    private sendContactUsForm;
}
