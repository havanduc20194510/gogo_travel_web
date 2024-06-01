import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type:any, sw:any, ne:any) => {
  console.log("type",type);
  console.log("sw",sw);
  console.log("ne",ne);

  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          lunit: "10",
          lang: "vi_VN",
          currency: "VND",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "8fbe2c9f89msh1a75e155b2b8687p18571bjsn59cd1c2ec128",
        },
      }
    );
    console.log("data:",data);
    return data;
  } catch (error) {
    console.log(`Fetch data Error : ${error}`);
  }
};
