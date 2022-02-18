import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

const RideOptions = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <Text style={tw`text-center mb-2 font-semibold`}>Select a Ride</Text>
    </SafeAreaView>
  )
}

export default RideOptions