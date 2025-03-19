import { useContext } from 'react';
import { Animated, StyleSheet } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation102Screen = () => {

    const { colors } = useContext(ThemeContext);

        const {pan, panResponder} = useAnimation();
        
    return (
        <CustomView style={[styles.container,{backgroundColor: colors.background}]}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box, {backgroundColor: colors.primary}]}
            />
        </CustomView>
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