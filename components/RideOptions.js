import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInfo } from '../features/navSlice/navSlice'

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
];

const SURCHARGE_RATE = 1.5;

const RideOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute left-5 z-50 p-3 rounded-full`}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-3`}>Select a Ride - {travelTimeInfo?.distance.text}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(selected?.id === item.id ? null : item)}
            style={tw`flex-row items-center justify-between px-10 max-h-20 ${id === selected?.id && 'bg-gray-200'}`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInfo?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>{new Intl.NumberFormat('en-gb', {
              style: 'currency',
              currency: 'GBP'
            }).format((travelTimeInfo?.duration.value * SURCHARGE_RATE * multiplier) / 15)}</Text>
          </TouchableOpacity>
        )}
      />
      {selected && (
        <View style={tw`absolute bottom-0 w-full bg-white border-t-2 border-gray-300`}>
          <TouchableOpacity style={tw`bg-black py-3 px-16 m-3`}>
            <Text style={tw`text-center text-white text-xl`}>Choose an {selected?.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default RideOptions