import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from '../../presentation/assets/dino_404.json';
import { CustomView } from '../../presentation/components/ui/CustomView';
import { globalStyles } from '../../config/theme/theme';
import { Title } from '../../presentation/components/ui/Title';

export default function Animation103Screen() {
    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text="Lottie React-native"></Title>
            <LottieView source={animationData} autoPlay loop style={{ maxHeight: 500, maxWidth: 500, height: 400, width: 400 }} />
        </CustomView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 300,
        height: 300,
    },
});
