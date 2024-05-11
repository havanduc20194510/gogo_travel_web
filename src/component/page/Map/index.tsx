"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

export default function Map() {
  return (
    <div>
      <Navbar />
      <div className="content py-24">
        <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <Footer />
    </div>
  );
}
