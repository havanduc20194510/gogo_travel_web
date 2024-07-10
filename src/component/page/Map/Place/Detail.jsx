import { Badge } from "@chakra-ui/react";
import { Rating } from "@mui/material";
import {Image} from "@chakra-ui/react";
import React from "react";

const Detail = ({ place }) => {
  return (
    <div className="bg-white bg-opacity-90 px-4 py-2 mb-4 shadow-lg rounded-lg w-full">
      <div className="flex justify-between items-start">
        <div className="flex-1 px-2">
            <h2 className="capitalize text-lg font-medium truncate">
              {place.name.slice(0,30) + '...'}
            </h2>
            <span className="text-sm font-medium text-gray-500">
              {place.price}
            </span>

          <div className="flex items-center mb-2">
            <Rating size="small" value={Number(place.rating)} readOnly />
            <span className="text-sm font-medium text-gray-500 ml-2">
              ({place.num_reviews})
            </span>
          </div>

          <div className="mb-2 text-sm font-medium text-gray-400">
            {place.ranking}
          </div>

          <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-rose-400">
           <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <p>{place.open_now_text}</p>
          </div>

          {place?.dietary_restrictions && (
            <div className="flex flex-wrap mb-2">
              {place.dietary_restrictions.map((n, i) => (
                <Badge
                  colorScheme="teal"
                  cursor="pointer"
                  key={i}
                  className="m-1 text-xs border rounded border-teal-100 bg-teal-100"
                >
                  {n.name}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <Image
          alt={place.name}
          objectFit="cover"
          width="120px"
          height="120px"
          rounded="lg"
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
          }
        />
      </div>

      {place?.address && (
        <div className="flex items-center px-1 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-700 ml-1 truncate">
            {place.address}
          </span>
        </div>
      )}
    </div>
  );
};

export default Detail;