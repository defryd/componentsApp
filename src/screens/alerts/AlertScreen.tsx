import {Alert, View } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { globalStyles } from '../../config/theme/theme'
import { Button } from '../../presentation/components/ui/Button'
import { showPrompt } from '../../config/adapters/prompt.adapter'

export const AlertScreen = () => {
    
    const createTwoButtonAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {},
        );
    };

    const createThreeButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
                onDismiss() {
                    console.log('onDismiss');
                },
            },
        );

        const onShowPrompt = () => {

            showPrompt({
                title: 'Correo electronico',
                subTitle: 'Enim commodo ut amet esse aliqua.',
                buttons: [
                    { text: 'Ok', onPress: () => console.log('ok') }
                ],
                promptType: 'secure-text',
                placeholder: 'Aqui va el texto',
                defaulValue: 'Soy el valor por defecto'
            })

            // showPrompt({
            //   title: 'Lorem Ipsum',
            //   subTitle: 'Nostrud qui duis officia dolor enim.',
            //   buttons: [
            //     { text: 'Ok', onPress: () => console.log('ok') }
            //   ],
            //   placeholder: 'Placeholder'
            // });
          };

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text="Alertas"></Title>

            <Button
                text="Alerta - Boton 1"
                onPress={createTwoButtonAlert}
            />
            <View style={{ height: 10 }} />

            <Button
                text="Alerta - Boton 2"
                onPress={createThreeButtonAlert}
            />

            <View style={{ height: 10 }} />
            <Button
                text="Alerta - Boton 3"
                onPress={onShowPrompt}
            />
        </CustomView>
    )
}