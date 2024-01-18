import axios from "axios";

export const getPlayers = async (name: string) => {
  try {
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players?search=${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
};
