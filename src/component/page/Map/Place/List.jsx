import Detail from "./Detail";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { getPlacesData } from "@/service/map";



const List = ({ bounds, isLoading }) => {
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("0.5");

  console.log("type: ", type);
  console.log("bounds: ", bounds);
  

  useEffect(() => {
    if (bounds.southwest && bounds.northeast) {
      getPlacesData(type, bounds.southwest, bounds.northeast).then((data) => {
        console.log("data: ", data);
        setPlaces(data);
      });
    }
  }, [type]);

  console.log("places1: ",places);
  // fllter places by rating

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setPlaces(filteredPlaces);
  }, [rating]);

  console.log("places2: ",places);


  if (isLoading)
    return (
      <div className=" bg-white bg-opacity-90 w-[35%] px-2 py-8">
        <div className="p-6 shadow-lg bg-white mt-16">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="mt-4 space-y-4">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col bg-white bg-opacity-90 w-[35%] h-screen px-2 pt-8">
      <div className="flex flex-row justify-around">
      <FormControl className="w-[40%]">
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          id="type"
          labelId="type-label"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="w-[40%]">
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          id="rating"
          labelId="rating-label"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <MenuItem value="0.5">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      </div>
      

      <div className="flex-1 overflow-y-scroll mt-16 flex-col">
        {places && places.map((place, i) => <Detail place={place} key={i} />)}
      </div>
    </div>
  );
};

export default List;
