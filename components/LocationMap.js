import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../features/navSlice/navSlice';

const LocationMap = () => {
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
        >
            {origin?.location && (
                <Marker
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                />
            )}
        </MapView>
    )
}

export default LocationMap