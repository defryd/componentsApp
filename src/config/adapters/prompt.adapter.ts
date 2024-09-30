import prompt from 'react-native-prompt-android';

interface Options {
    title: string;
    subTitle?: string;
    buttons: PromptButton[];
    promptType?:'plain-text' | 'secure-text';
    placeholder?: string;
    defaulValue?: string;
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'destructive' | 'default';
}

export const showPrompt = ({title, subTitle, buttons, promptType, placeholder, defaulValue }: Options) => {
    // ! Código nativo
    // Alert.prompt(
    //     'Correo electronico',
    //     'Enim commodo ut amet esse aliqua.',
    //     (valor: string) => console.log({ valor }),
    //     'secure-text',
    //     'Soy el valor por defecto',
    //     'number-pad'
    // );

    prompt(
        title,
        subTitle,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaulValue,
            placeholder: placeholder,
        },
    );
};