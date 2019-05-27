import { Component } from 'react';
import { IProps, IState } from '../Interfaces/IRateModal';
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
    };
    constructor(props: IProps);
    render(): JSX.Element;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    private onStarSelected;
    private renderRateModal;
    private renderRatingView;
    private renderContactFormView;
    private onClosed;
    private sendRate;
    private sendContactUsForm;
}
