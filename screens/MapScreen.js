import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LocationMap from '../components/LocationMap'
import NavigateCard from '../components/NavigateCard'
import RideOptions from '../components/RideOptions'

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <LocationMap />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='RideOptions'
            component={RideOptions}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen