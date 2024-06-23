import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type: any, sw: any, ne: any) => {
  console.log("type", type);
  console.log("sw", sw);
  console.log("ne", ne);

  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          lang: "vi_VN",
          currency: "VND",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "157d3b1628msh3cb213b1b94ee67p1a97c6jsn17b0ee16707a",
        },
      }
    );

    const data = response.data.data;
    console.log("data:", data);

    // Filter out places that do not have a name
    const filteredData = data.filter((place: any) => place.name);

    return filteredData;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
