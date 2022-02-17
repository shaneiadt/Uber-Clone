import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'

import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../features/navSlice/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'

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
        </SafeAreaView>
    );
}

export default NavigateCard