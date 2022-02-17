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
        destination: "Dublin, Airport"
    }
];

const NavFavorites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={() => (
                <View
                    style={[tw`bg-gray-200 h-1`, { height: 0.5 }]}
                />
            )}
            renderItem={({ item: { icon, location, destination } }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type='ionicon'
                        color='white'
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites