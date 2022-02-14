import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

export class NavigateCard extends Component {
    render() {
        return (
            <SafeAreaView
                style={tw`bg-white flex-1`}
            >
                <Text>Good Morning, Shane</Text>
            </SafeAreaView>
        )
    }
}

export default NavigateCard