import React, { useRef, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import MapViewDirections from 'react-native-maps-directions';

import { selectDestination, selectOrigin, setTravelTimeInfo } from '../features/navSlice/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env';

const LocationMap = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        // Zoom and fit to show both markers on the map
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            // Mock network request
            setTimeout(() => {
                const data = {
                    distance: {
                        text: '50 mi',
                        value: 647
                    },
                    duration: {
                        text: '27 minutes',
                        value: 249
                    },
                    status: 'OK'
                };

                dispatch(setTravelTimeInfo(data));
            }, 2000);
        };

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY]);

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor='black'
                />
            )}
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
            {destination?.location && (
                <Marker
                    title='Destination'
                    description={destination.description}
                    identifier='destination'
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                />
            )}
        </MapView>
    )
}

export default LocationMap