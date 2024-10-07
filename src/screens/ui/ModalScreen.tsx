import { Modal, Text, View } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { useState } from 'react'
import { Button } from '../../presentation/components/ui/Button'

export const ModalScreen = () => {

    const [isvisible, setIsvisible] = useState(false);

    return (
        <CustomView>
            <Title text="Modal Screen"  safe/>

            <Button 
            text="Open Modal" 
            onPress={() => setIsvisible(true)} 
            />

            {/* <Modal>
                <View>
                    <Title text='Modal Content' safe/>
                </View>
            </Modal> */}

        </CustomView>
    )
}