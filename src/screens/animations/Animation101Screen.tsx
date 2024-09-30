import React from 'react'
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme/theme'
import { useAnimation } from '../../presentation/hooks/useAnimation';

export const Animation101Screen = () => {

    const { animatedOpacity, animetedTop, fadeIn, fadeOut, startmovingTopPosition } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.purpleBox
                , {
                    opacity: animatedOpacity,
                    // top: animetedTop
                    transform: [
                        {
                            translateY: animetedTop
                        }
                    ]

                }
            ]}></Animated.View>

            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={ () => {
                    fadeIn({});
                    startmovingTopPosition({
                        initialPosition : -100,
                        duration: 700,
                        easing: Easing.elastic(2),
                    })
                    }} style={[styles.button]}>
                    <Text style={styles.textButton}>FaseIn</Text>
                </Pressable>

                <Pressable onPress={ () => fadeOut({}) } style={[styles.button]}>
                    <Text style={styles.textButton}>FaseOut</Text>
                </Pressable>
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
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
    button:{
        backgroundColor: colors.gray,
        padding: 10,
        borderRadius: 10,
        margin: 10
        
    },
    textButton: {
        color: colors.buttonTextColor,
        textAlign: 'center',
    }

})    