import { useRef } from 'react';
import { Animated, Easing, PanResponder, Text, View } from 'react-native'

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animetedTop = useRef(new Animated.Value(-100)).current;
    const pan = useRef(new Animated.ValueXY()).current;

    const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
        // Animated.timing(animetedTop,
        //     {
        //         toValue: toValue,
        //         duration: 700,
        //         useNativeDriver: true,
        //         easing: Easing.bounce //Easing.elastic(1)
        //     }
        // ).start();

        Animated.timing(animatedOpacity,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true
            }
        ).start(callback);
    }

    const fadeOut = ({ duration = 300, toValue = 0, callback = () => { } }) => {
        Animated.timing(animatedOpacity,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true
            }
        ).start();
        // () => animetedTop.resetAnimation()
    }

    const startmovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.bounce,
        callback = () => { }
    }) => {
        animetedTop.setValue(initialPosition);
        Animated.timing(animetedTop,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true,
                easing: easing
            }).start(callback);
    }
    
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ]),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
            ).start();
        },
    });


    return {
        animatedOpacity,
        animetedTop,
        pan,
        //methods
        fadeIn,
        fadeOut,
        startmovingTopPosition,
        panResponder,
    }

}