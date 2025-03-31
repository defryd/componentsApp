import React, { useContext } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {

    const { animatedOpacity, animetedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();
    const { colors } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Animated.View style={[
                styles.purpleBox
                , {
                    opacity: animatedOpacity,
                    // top: animetedTop
                    transform: [
                        {
                            translateY: animetedTop
                        }
                    ],
                    backgroundColor: colors.primary

                }
            ]}></Animated.View>

            <View style={{ flexDirection: 'row' }}>
                <Button
                    text="FadeIn"
                    onPress={() => {
                        fadeIn({});
                        startMovingTopPosition({
                            initialPosition: -100,
                            duration: 700,
                            easing: Easing.elastic(2),
                        })

                    }}
                    styles={{ marginTop: 10 }}
                />
                <Button
                    text="FadeOut"
                    onPress={() => fadeOut({})}
                    styles={{ marginTop: 10 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    purpleBox: {
        // backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
    button: {
        // backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10,
        margin: 10

    },
    textButton: {
        // color: colors.buttonTextColor,
        textAlign: 'center',
    }

})    