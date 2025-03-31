import { StyleProp, Text, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    style?: StyleProp<ViewStyle>;
    text?: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ style, text, safe = false, white = false }: Props) => {

    const { colors } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={[{
                ...globalStyles.title,
                color: colors.text,
                marginBottom: 10,
                marginTop: safe ? top : 0,
            },
                style
            ]
            }
        >{text}
        </Text>
    )
}