import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LocationMap from '../components/LocationMap'
import NavigateCard from '../components/NavigateCard'
import RideOptions from '../components/RideOptions'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`absolute top-6 left-6 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}>
        <Icon
          name="menu"
        />
      </TouchableOpacity>
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