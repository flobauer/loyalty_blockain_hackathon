import React, { useEffect } from "react";
import Geohash from "latlon-geohash";
import { useGeolocated } from "react-geolocated";

export default function AskForGeolocation({ children }) {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5,
    });

  useEffect(() => {
    if (coords) {
      console.log(coords);
      const geohash = Geohash.encode(coords.latitude, coords.longitude, 7);
      console.log(geohash);
    }
  }, [coords]);

  return (
    <div>
      {isGeolocationAvailable ? (
        isGeolocationEnabled ? (
          <>{children}</>
        ) : (
          <div>Please allow access to your location.</div>
        )
      ) : (
        <div>Geolocation is not available</div>
      )}
    </div>
  );
}
