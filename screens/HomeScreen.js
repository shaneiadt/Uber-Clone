import { Text, SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen