/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { Carousel } from "antd";
import { Image as ImageType } from "@/models/tour/get";

type Props = {
  images?: ImageType[];
};

const Slide: FC<Props> = ({ images }) => {
  if (!images?.length) {
    return null;
  }

  return (
    <Carousel autoplay autoplaySpeed={2000}>
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={image.url ?? ""}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slide;
