import { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native'
import { FadeInImage } from '../../components/ui/FadeInImage';
import { ThemeContext } from '../../context/ThemeContext';

export const InfiniteScrollScreen = () => {
    
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
    const { colors } = useContext(ThemeContext);

    const loadMore = () => {
        const newArray = Array.from({length: 5}, (_, i) => i + numbers.length);
        setNumbers([...numbers, ...newArray]);
    };

    return (
        <View style={{ backgroundColor: 'black'}}>
            {/* <Title text="Infinite Scroll" safe /> */}

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
        <FadeInImage uri={`https://picsum.photos/id/${number}/500/400`} style={{ width: '100%', height: 400 }} />
        // <Image
        //     source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
        //     style={{
        //         width: '100%',
        //         height: 400,
        //     }}
        // />
    )
}