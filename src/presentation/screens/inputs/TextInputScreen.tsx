import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Card } from '../../components/ui/Card'
import { globalStyles } from '../../../config/theme/theme'
import { useContext, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext'
import { SubTitle } from '../../components/ui/SubTitle'

export const TextInputScreen = () => {

    const { colors } = useContext(ThemeContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
            >
            <ScrollView style={{ backgroundColor: colors.background }}>
                <CustomView margin>
                    <Title text='Text Inputs' safe></Title>
                    <Card>
                        <SubTitle text={'Nombre'} backgroundColor={colors.cardBackground} />
                        <TextInput style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
                            placeholder='Enter your name'
                            autoCapitalize='words'
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}
                        />
                    </Card>

                    <Card>
                        <SubTitle text={'Email'} backgroundColor={colors.cardBackground} />
                        <TextInput style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
                            placeholder='Enter your email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={value => setForm({ ...form, email: value })}
                        />
                    </Card>

                    <Card>
                        <SubTitle text={'Phone'} backgroundColor={colors.cardBackground} />
                        <TextInput style={[globalStyles.input, { color: colors.text, borderColor: colors.primary }]}
                            placeholder='Enter your phone'
                            keyboardType='phone-pad'
                            onChangeText={value => setForm({ ...form, phone: value })}
                        />
                    </Card>

                    <View style={{ height: 10 }} />
                    <Card>
                        <SubTitle text={'Datos'} backgroundColor={colors.cardBackground} />
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        {/* <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text> */}
                        {/* <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text> */}
                    </Card>
                </CustomView>

                <View style={{ height: 50 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}