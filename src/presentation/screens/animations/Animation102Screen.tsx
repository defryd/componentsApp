import { useContext, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';
import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation102Screen = () => {

    const { colors } = useContext(ThemeContext);

        const {pan, panResponder} = useAnimation();
        
    return (
        <View style={[styles.container,{backgroundColor: colors.background}]}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box, {backgroundColor: colors.primary}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        // backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});