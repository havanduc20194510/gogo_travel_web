"use client";

import { Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {getPlacesData} from "../../../service/map"
import List from "./List";
import MapHeader from "./MapHeader";
import MapBox from './MapBox/index';
import axios from "axios";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

type Center = {
  lat: number;
  lng: number;
};

const Map = () => {
  
  const MAP_KEY = "AIzaSyDm9pPMTMrXoIof6QiL2OuBaMeRRfVDdCQ";
  const COORDINATES_URL = "https://maps.googleapis.com/maps/api/geocode/json";
  
  const [center, setCenter] = useState<Center>();
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const address = searchParams.get("address") ?? undefined;


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
        console.log(location)
        setCenter(location);
        setBounds(location);
      } else {
        throw new Error("Geocoding failed: " + response.data.status);
      }
    } catch (error) {
      // Do nothing
    }
  }, [address]);

  const getLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!address) {
        await getCurrentLocation();
      } else {
        await getCoordinatesFromAddress();
      }
    } finally {
      setIsLoading(false);
    }
  }, [address, getCoordinatesFromAddress, getCurrentLocation]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  
  // useEffect(() => {
  //   setIsLoading(true);
  //   if (bounds) {
  //     getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
  //       console.log(data);
  //       setPlaces(data);
  //       setIsLoading(false);
  //     });
  //   }
  // }, [type, coordinates, bounds]);



  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      
      <MapHeader
        setType={setType}
        setRatings={setRatings}
      />

      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      />

      <MapBox
        isloading={isLoading}
        mapContainerStyle={mapContainerStyle}
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  );
};

export default Map;