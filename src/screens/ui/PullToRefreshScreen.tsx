import { Title } from '../../presentation/components/ui/Title'
import { CustomView } from '../../presentation/components/ui/CustomView'
import { RefreshControl, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { globalStyles } from '../../config/theme/theme';

export const PullToRefreshScreen = () => {

    const {top} = useSafeAreaInsets();

    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    }
    
    return (
        <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={isRefreshing}
                progressViewOffset={top}
                colors={['#5856D6', '#FF9427', '#9B59B6']}
                onRefresh={onRefresh}
            />
        }
        style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >
            {/* <CustomView margin> */}
                <Title text='Pull To Refresh' safe />
            {/* </CustomView> */}
        </ScrollView>
    )
}