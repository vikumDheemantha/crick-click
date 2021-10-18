import { collection, getDocs, getDoc, query, where } from "firebase/firestore";
import { db } from "./main";

export const getAllPlayers = async () => {
  let players = [];
  try {
    const queryPlayersSnapshot = await getDocs(collection(db, "players"));
    queryPlayersSnapshot.forEach(async (doc) => {
      players.push({
        id: doc.id,
        displayName: doc.displayName,
        image: doc.image_url,
        introduction: doc.introduction,
      });
    });
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
};
