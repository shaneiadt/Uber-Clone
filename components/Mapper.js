import React from 'react'
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../features/navSlice/navSlice';

const Mapper = () => {
    const origin = useSelector(selectOrigin);

    return (
        <MapView
            style={tw`flex-1`}
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        />
    )
}

export default Mapper