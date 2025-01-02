import { Text } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props{
    text: string;
    safe?: boolean;
    backgroundColor?: string;
}

export const SubTitle = ({ text, safe = false, backgroundColor = colors.background }: Props) => {

    const { top } = useSafeAreaInsets();
    const { colors } = useContext(ThemeContext);

    return (
        <Text style={{
            ...globalStyles.subTitle,
            backgroundColor: backgroundColor,
            marginBottom: 10,
            marginTop: safe ? top : 0,
            color: colors.text,
        }}
        >{text}</Text>
    )
}