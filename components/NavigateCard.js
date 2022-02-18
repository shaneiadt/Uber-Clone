import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'

import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../features/navSlice/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={tw`bg-white flex-1`}
        >
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Shane</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where To?'
                        styles={{
                            container: {
                                backgroundColor: 'white',
                                paddingTop: 20,
                                flex: 0
                            },
                            textInput: {
                                backgroundColor: '#DDDDDF',
                                borderRadius: 0,
                                fontSize: 18
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0
                            }
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate('RideOptions');
                        }}
                        returnKeyType='search'
                        fetchDetails={true}
                        minLength={2}
                        enablePoweredByContainer={false}
                        debounce={500}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                    />
                </View>
                <NavFavorites />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptions')}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name='car'
                        type='font-awesome'
                        color='white'
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name='fast-food-outline'
                        type='ionicon'
                        color='black'
                        size={16}
                    />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default NavigateCard