import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { Title } from '../../presentation/components/ui/Title'
import { Card } from '../../presentation/components/ui/Card'
import { globalStyles } from '../../config/theme/theme'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView>
                <CustomView margin>
                    <Title text='Text Inputs' safe></Title>
                    <Card>
                        <TextInput style={globalStyles.input}
                            placeholder='Enter your name'
                            autoCapitalize='words'
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}
                        />
                    </Card>

                    <Card>
                        <TextInput style={globalStyles.input}
                            placeholder='Enter your email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={value => setForm({ ...form, name: value })}
                        />
                    </Card>

                    <Card>
                        <TextInput style={globalStyles.input}
                            placeholder='Enter your phone'
                            keyboardType='phone-pad'
                            onChangeText={value => setForm({ ...form, name: value })}
                        />
                    </Card>

                    <View style={{ height: 10 }} />
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>

                    <Card>
                        <TextInput style={globalStyles.input}
                            placeholder='Enter your phone'
                            keyboardType='phone-pad'
                            onChangeText={value => setForm({ ...form, name: value })}
                        />
                    </Card>
                </CustomView>

                <View style={{ height: 50 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}