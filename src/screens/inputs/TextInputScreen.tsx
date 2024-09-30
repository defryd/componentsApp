import { Text, View } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { globalStyles } from '../../config/theme/theme'

export const TextInputScreen = () => {
    return (
        <CustomView margin>
            <Title text='TextInputScreen' safe></Title>
        </CustomView>
    )
}