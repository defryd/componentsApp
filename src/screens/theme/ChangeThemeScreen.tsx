import { Text, View } from 'react-native'
import { Button } from '../../presentation/components/ui/Button'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { useContext } from 'react'
import { ThemeContext } from '../../presentation/context/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext(ThemeContext);

    return (
        <CustomView margin>
            <Title text={`Cambiar el tema: ${currentTheme}`} safe />

            <Button
                text='Light'
                onPress={() => setTheme('light')}
            />

            <View style={{ height: 10 }} />

            <Button
                text='Dark'
                onPress={() => setTheme('dark')}
            />
            <Text>
                {
                    JSON.stringify(colors, null, 2)
                }
            </Text>
        </CustomView>
    )
}