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
        ratingOnChange: (e: number) => void;
        onClosed: () => void;
        sendContactUsForm: (state: object) => void;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    ratingOnChange(e: number): void;
    private renderRateModal;
    private onClosed;
    private sendRate;
    private sendContactUsForm;
}
