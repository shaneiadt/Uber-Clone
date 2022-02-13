import { SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import { GOOGLE_MAPS_APIKEY } from '@env';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../features/navSlice/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null));
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
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen