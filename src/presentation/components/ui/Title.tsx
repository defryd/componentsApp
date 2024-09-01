import { Text, View } from 'react-native'
import { globalStyles } from '../../../screens/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props{
    text?: string;
    safe?: boolean;
    white?: boolean;
} 

export const Title = ( {text, safe = false, white = false} : Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={{
                ...globalStyles.title,
                marginTop: safe ? top : 0,
                marginBottom: 10,
                color: white ? 'white' : 'black'
            }}
        >{text}
        </Text>
    )
}