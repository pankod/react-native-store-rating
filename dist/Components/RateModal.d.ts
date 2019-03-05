import { Component } from 'react';
import { IProps, IState } from '../Interfaces/IRateModal';
export declare class RateModal extends Component<IProps, IState> {
    static defaultProps: {
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
        reviews: string[];
        transparent: boolean;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    componentWillMount(): void;
    private ratingOnChange;
    private renderRateModal;
    private onClosed;
    private sendRate;
    private sendContactUsForm;
}
