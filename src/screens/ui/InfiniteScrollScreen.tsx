import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { CustomView } from '../../presentation/components/ui/CustomView';
import { Title } from '../../presentation/components/ui/Title';
import { colors } from '../../config/theme/theme';

export const InfiniteScrollScreen = () => {
    
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = () => {
        const newArray = Array.from({length: 5}, (_, i) => i + numbers.length);
        setNumbers([...numbers, ...newArray]);
    };

    return (
        <View>
            <Title text="Infinite Scroll" safe />

            <FlatList
            data={numbers}
            onEndReached={loadMore}
            onEndReachedThreshold={0.6}
            keyExtractor={(item) => item.toString()}
            renderItem={({item}) => (
                <ListItem number={item} />
            )}
            ListFooterComponent={
                <View style={{ height: 150, justifyContent: 'center'}}>
                    <ActivityIndicator size={30} color={colors.primary} />
                </View>
            }
            />
        </View>
    )
}

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {
    return (
       <Image
       source={{uri: `https://picsum.photos/id/${number}/500/400`}}
       style={{
              width: '100%',
              height: 400,
       }}
       />
    )
}