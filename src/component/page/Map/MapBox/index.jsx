import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { BiX } from "react-icons/bi";
import { Spin } from "antd";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapBox = ({ isloading, mapContainerStyle, coordinates, setCoordinates, setBounds, places }) => {
  const MAP_KEY = "AIzaSyDm9pPMTMrXoIof6QiL2OuBaMeRRfVDdCQ";
  const [isCard, setIsCard] = useState(false);
  const [cardData, setCardData] = useState(null);
  return (
    <Box width={"full"} height={"full"}>
         {isloading || !coordinates ? (
          <div className="h-screen flex items-center justify-center">
            <Spin tip="Loading..." />
          </div>
        ) : (
          <LoadScript googleMapsApiKey={MAP_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={coordinates}
              onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
              }}
              onChildClick={(child) => {
                setCardData(places[child]);
                setIsCard(true);
              }}
              zoom={15}
            >
        {places?.map((place, i) => (
          <Box
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <IoLocation color="red" fontSize={30} />
          </Box>
        ))}

        {isCard && (
          <Box
            width={"200px"}
            height={"150px"}
            bg={"whiteAlpha.900"}
            position={"absolute"}
            top={-12}
            left={0}
            shadow={"lg"}
            rounded={"lg"}
          >
            <Image
              alt="Image"
              objectFit={"cover"}
              width={"full"}
              height={"120px"}
              rounded="lg"
              src={
                cardData?.photo
                  ? cardData?.photo?.images?.large?.url
                  : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
              }
            />

            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {cardData.name}
            </Text>

            <Box
              cursor={"pointer"}
              position={"absolute"}
              top={2}
              right={2}
              width={"30px"}
              height={"30px"}
              bg={"red.300"}
              rounded={"full"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => {
                setIsCard(false);
              }}
            >
              <BiX fontSize={20} />
            </Box>
          </Box>
        )}
      </GoogleMap>
    </LoadScript>
    )}
    </Box>
  );
};

export default MapBox;