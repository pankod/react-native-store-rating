import { Component } from 'react';
import { IProps, IState } from '../Interfaces/IRateModal';
export declare class RateModal extends Component<IProps, IState> {
    static defaultProps: {
        buttonStyle: {};
        cancelBtnText: string;
        commentPlaceholderText: string;
        defaultStars: number;
        emptyCommentErrorMessage: string;
        isModalOpen: boolean;
        isTransparent: boolean;
        isVisible: boolean;
        modalTitle: string;
        rateBtnText: string;
        sendBtnText: string;
        starLabels: string[];
        storeRedirectThreshold: number;
        totalStarCount: number;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    private onStarSelected;
    private renderRateModal;
    private cancelButton;
    private renderRatingView;
    private renderContactFormView;
    private renderReviewError;
    private onClosed;
    private sendRate;
    private sendContactUsForm;
}
