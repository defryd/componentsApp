import { Modal, Text, View } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { useState } from 'react'
import { Button } from '../../presentation/components/ui/Button'

export const ModalScreen = () => {

    const [isvisible, setIsvisible] = useState(false);

    return (
        <CustomView>
            <Title text="Modal Screen" safe />

            <Button
                text="Open Modal"
                onPress={() => setIsvisible(true)}
            />

            <Modal
                visible={isvisible}
                animationType='slide'
            >
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                }}
                >
                    <Title text='Modal Content' safe />
                    <Button
                        text="Close Modal"
                        onPress={() => setIsvisible(false)}
                    />
                </View>
            </Modal>

        </CustomView>
    )
}