import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./main";

export const getAllGames = async () => {
  let games = [];
  try {
    const queryGamesSnapshot = await getDocs(collection(db, "games"));
    return passGames(queryGamesSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
  return games;
};

export const getGamesByTeam = async (teamId) => {
  let games = [];
  try {
    const gamesPlayedByQuery = query(
      collection(db, "games"),
      where("teams", "array-contains", `/teams/${teamId}`)
    );

    const queryGamesSnapshot = await getDocs(gamesPlayedByQuery);
    return passGames(queryGamesSnapshot);
  } catch (error) {
    console.error("Error fetching data from the firebase: ", error);
  }
  return games;
};

function passGames(gamesSnapshot) {
  let games = [];
  gamesSnapshot.forEach(async (doc) => {
    games.push({
      id: doc.id,
      name: doc.name,
      status: doc.status,
    });
  });

  return games;
}
