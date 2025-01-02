import { Switch } from 'react-native';
import { CustomView } from '../../presentation/components/ui/CustomView'
import { useState } from 'react';
import { Card } from '../../presentation/components/ui/Card';
import { CustomSwitch } from '../../presentation/components/ui/CustomSwitch';
import { Separator } from '../../presentation/components/ui/Separator';
import { Title } from '../../presentation/components/ui/Title';

export const SwitchScreen = () => {

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    return (
        <CustomView>
            <Title text="Toggles" safe style={{ marginLeft: 10 }}/>
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    text='¿Esta activo?'
                    onChange={(value) => setState({ ...state, isActive: value })}
                />

                <Separator/>

                <CustomSwitch
                    isOn={state.isHungry}
                    text='¿Esta hambriento?'
                    onChange={(value) => setState({ ...state, isHungry: value })}
                />

                <Separator/>
                
                <CustomSwitch
                    isOn={state.isHappy}
                    text='¿Esta feliz?'
                    onChange={(value) => setState({ ...state, isHappy: value })}
                />
            </Card>
        </CustomView>
    )
}