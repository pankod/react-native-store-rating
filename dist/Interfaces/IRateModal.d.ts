import { ElementType } from "react";
import { ViewStyle, TextStyle } from "react-native";
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
    onRated: () => void;
    sendContactUsForm: (state: IState) => void;
    playStoreUrl?: string;
    iTunesStoreUrl?: string;
    style: ViewStyle;
    styles: {
        title: TextStyle;
        modalWrapper: ViewStyle;
        buttonContainer: ViewStyle;
        button: ViewStyle;
        buttonText: TextStyle;
        buttonCancel: ViewStyle;
        modalContainer: ViewStyle;
        buttonCancelText: TextStyle;
        textBox: ViewStyle;
        buttonDisabled: ViewStyle;
        errorText: TextStyle;
        textBoxStyle?: TextStyle;
        placeholderTextColor?: string;
    };
    ratingProps: {
        selectedColor?: string;
    };
    ratingComponent?: ElementType;
    modalProps?: {
        animationType?: "slide" | "fade" | "none";
    };
    onSendReview: (state: IState) => void;
    starLabels: string[];
    isTransparent: boolean;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    cancelButtonTextStyle?: TextStyle;
    cancelButtonContainerStyle?: ViewStyle;
    rateButtonTextStyle?: TextStyle;
    rateButtonContainerStyle?: ViewStyle;
    errorTextStyle?: TextStyle;
    placeholderTextColor?: string;
    selectedColor?: string;
    reviewColor?: string;
    textBoxStyle?: TextStyle;
}
export interface IState {
    rating: number;
    showContactForm: boolean;
    review: string;
    reviewError: boolean;
}
