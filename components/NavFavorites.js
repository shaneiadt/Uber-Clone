import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, Sligo"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        screen: "Dublin, Airport"
    }
];

const NavFavorites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item: { icon } }) => (
                <TouchableOpacity>
                    <View>
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                            name={icon}
                            type='ionicon'
                            color='white'
                            size={18}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites