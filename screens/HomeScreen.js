import { Text, SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen