import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Mapper from '../components/Mapper'

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Mapper />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen