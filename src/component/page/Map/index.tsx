"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Spin } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

type Center = {
  lat: number;
  lng: number;
};

const MAP_KEY = "AIzaSyDm9pPMTMrXoIof6QiL2OuBaMeRRfVDdCQ";
const COORDINATES_URL = "https://maps.googleapis.com/maps/api/geocode/json";

type Props = {
  address?: string;
};

export default function Map({ address }: Props) {
  const [center, setCenter] = useState<Center>();

  const [loading, setLoading] = useState(false);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error accessing the GPS of the device:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getCoordinatesFromAddress = useCallback(async () => {
    try {
      const response = await axios.get(COORDINATES_URL, {
        params: {
          address: address,
          key: MAP_KEY,
        },
      });

      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;
        setCenter(location);
      } else {
        throw new Error("Geocoding failed: " + response.data.status);
      }
    } catch (error) {
      // Do nothing
    }
  }, [address]);

  const getLocation = useCallback(async () => {
    try {
      setLoading(true);
      if (!address) {
        await getCurrentLocation();
      } else {
        await getCoordinatesFromAddress();
      }
    } finally {
      setLoading(false);
    }
  }, [address, getCoordinatesFromAddress, getCurrentLocation]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div>
      <Navbar />
      <div className="pt-[56px]">
        {loading || !center ? (
          <div className="h-screen flex items-center justify-center">
            <Spin tip="Loading..." />
          </div>
        ) : (
          <LoadScript googleMapsApiKey={MAP_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        )}
      </div>
      <Footer />
    </div>
  );
}
