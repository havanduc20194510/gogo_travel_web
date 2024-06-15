"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Spin } from "antd";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import List from "./Place/List";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

type Center = {
  lat: number;
  lng: number;
};

const MAP_KEY = "AIzaSyCQv7PR6dM3BHDs7KH4aN3FH26rcFdF8yg";
const COORDINATES_URL = "https://maps.googleapis.com/maps/api/geocode/json";

export default function Map() {
  const [center, setCenter] = useState<Center>();
  const searchParams = useSearchParams();
  const address = searchParams.get("address") ?? undefined;

  const [loading, setLoading] = useState(false);
  const [bounds, setBounds] = useState<any>({});

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
        const bounds_addr = response.data.results[0].geometry.bounds;
        setBounds(bounds_addr);
      } else {
        throw new Error("Geocoding failed: " + response.data.status);
      }
    } catch (error) {
      // Do nothing
      console.log(error);
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
          <div className="flex items-center justify-center h-screen mb-8">
            <List bounds={bounds} isLoading={loading} />
            <LoadScript googleMapsApiKey={MAP_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        )}
      </div>
      <Footer />
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${center?.lat},${center?.lng}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-5 right-16 z-50"
      >
        <div className="group relative">
          <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:bg-blue-600">
            🔍
          </div>
          <span className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 w-32 p-2 text-xs text-center text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Open with Google Maps
          </span>
        </div>
      </a>
    </div>
  );
}
